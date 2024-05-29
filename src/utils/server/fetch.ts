import { env } from '@root/utils/common/env';
if (env.IS_NEXTJS_ENV === 'true') import('server-only');

import type { APIResult } from '@root/types/common';
import { APIError } from '@root/types/common';
import type { LicenseInfo, PackageDotJSON } from '@root/types/common/zod';
import { githubFileResponseSchema, licenseInfoSchema, packageDotJSONSchema } from '@root/types/common/zod';
import { tryCatchHandler, tryCatchHandlerSync, writeLog } from '@root/utils/common';
import type { ZodType } from 'zod';

async function improvedFetch<TResult = unknown>(validator: ZodType<TResult>, ...args: Parameters<typeof fetch>) {
	writeLog({ args: [`Fetch: ${JSON.stringify(args[0], null, 2)}`], hideInProd: true });

	const fetchResult = await tryCatchHandler(fetch(...args), 'improvedFetch.fetch');

	if (!fetchResult.isSuccess) {
		throw new APIError({
			code: 'INTERNAL_SERVER_ERROR',
			message: `Fetch fail at: ${JSON.stringify(args[0], null, 2)}`,
			cause: fetchResult.error
		});
	}

	if (!fetchResult.data.ok) {
		throw new APIError({
			code: 'INTERNAL_SERVER_ERROR',
			message: `Fetch fail at: ${JSON.stringify(args[0], null, 2)}`,
			cause: fetchResult.data
		});
	}

	const jsonResult = await tryCatchHandler(fetchResult.data.json(), 'improvedFetch.parseJson');

	if (!jsonResult.isSuccess)
		throw new APIError({
			code: 'INTERNAL_SERVER_ERROR',
			message: `Parse JSON fail: ${JSON.stringify(jsonResult.error, null, 2)}`,
			cause: jsonResult.error
		});

	const parseResult = await validator.safeParseAsync(jsonResult.data);

	if (parseResult.success) return parseResult.data;

	throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: parseResult.error.message, cause: parseResult.error });
}

const defaultResult = {
	isSuccess: false as const,
	result: null,
	error: new APIError({ code: 'INTERNAL_SERVER_ERROR' })
} satisfies Awaited<APIResult>;

const getDefaultFetchHeader = (revalidate = 86400): Parameters<typeof fetch>[1] => ({
	headers: { Authorization: `Bearer ${env.GITHUB_TOKEN}`, 'X-GitHub-Api-Version': '2022-11-28' },
	next: { revalidate }
});

export const getVersion = async (): Promise<APIResult<PackageDotJSON>> => {
	const githubResult = await tryCatchHandler(
		improvedFetch(
			githubFileResponseSchema,
			`https://api.github.com/repos/${env.NEXT_PUBLIC_APP_PATH}/contents/package.json`,
			getDefaultFetchHeader()
		),
		'getVersion.get'
	);

	if (!githubResult.isSuccess) return defaultResult;

	const base64ToStringResult = tryCatchHandlerSync(
		() => atob(githubResult.data.content),
		'getVersion.base64ToStringResult'
	);

	if (!base64ToStringResult.isSuccess) return defaultResult;

	const jsonToObjResult = tryCatchHandlerSync(
		() => JSON.parse(base64ToStringResult.data),
		'getVersion.jsonToObjResult'
	);

	if (!jsonToObjResult.isSuccess) return defaultResult;

	const packageDotJSONResult = packageDotJSONSchema.safeParse(jsonToObjResult.data);

	if (!packageDotJSONResult.success) return defaultResult;

	return { result: packageDotJSONResult.data, isSuccess: true as const, error: null };
};

export const getLicense = async () => {
	const licenseResult = await tryCatchHandler(
		improvedFetch(
			licenseInfoSchema,
			`https://api.github.com/licenses/${env.NEXT_PUBLIC_APP_LICENSE_CODE}`,
			getDefaultFetchHeader()
		),
		'getLicense.get'
	);

	return licenseResult.isSuccess
		? { result: licenseResult.data as LicenseInfo, isSuccess: true as const, error: null }
		: defaultResult;
};
