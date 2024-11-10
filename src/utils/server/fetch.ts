import { env } from '@root/utils/common/env';
if (env.NEXT_PUBLIC_NODE_ENV !== 'script') void import('server-only');

import type { APIResult } from '@root/types/common';
import { APIError } from '@root/types/common';
import type { LicenseInfo, PackageDotJSON } from '@root/types/common/zod';
import { githubFileResponseSchema, licenseInfoSchema, packageDotJSONSchema } from '@root/types/common/zod';
import { tryCatchHandler, tryCatchHandlerSync, writeLog } from '@root/utils/common';
import type { SessionResult } from '@root/utils/server';
import type { ZodType } from 'zod';

async function improvedFetch(args: Parameters<typeof fetch>): Promise<string>;
async function improvedFetch<TResult = unknown>(
	args: Parameters<typeof fetch>,
	validator: ZodType<TResult>
): Promise<TResult>;
async function improvedFetch<TResult = unknown>(args: Parameters<typeof fetch>, validator?: ZodType<TResult>) {
	writeLog({ args: [`Fetch: ${JSON.stringify(args[0], null, 2)}`] });

	const fetchResult = await tryCatchHandler(fetch(...args), { operationCode: 'improvedFetch.fetch' });

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

	if (!validator) {
		const textResult = await tryCatchHandler(fetchResult.data.text(), { operationCode: 'improvedFetch.parstText' });

		if (!textResult.isSuccess)
			throw new APIError({
				code: 'INTERNAL_SERVER_ERROR',
				message: `Parse JSON fail: ${JSON.stringify(textResult.error, null, 2)}`,
				cause: textResult.error
			});

		return textResult.data;
	}

	const jsonResult = await tryCatchHandler(fetchResult.data.json(), { operationCode: 'improvedFetch.parseJson' });

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
	headers: { Authorization: `Bearer ${env.APP_GITHUB_TOKEN}`, 'X-GitHub-Api-Version': '2022-11-28' },
	...(env.NEXT_PUBLIC_NODE_ENV === 'production' ? { next: { revalidate } } : { cache: 'no-cache' })
});

export const getVersion = async (): Promise<APIResult<PackageDotJSON>> => {
	const githubResult = await tryCatchHandler(
		improvedFetch(
			[`https://api.github.com/repos/${env.NEXT_PUBLIC_APP_PATH}/contents/package.json`, getDefaultFetchHeader()],
			githubFileResponseSchema
		),
		{ operationCode: 'getVersion.get' }
	);

	if (!githubResult.isSuccess) return defaultResult;

	const base64ToStringResult = tryCatchHandlerSync(() => atob(githubResult.data.content), {
		operationCode: 'getVersion.base64ToStringResult'
	});

	if (!base64ToStringResult.isSuccess) return defaultResult;

	const jsonToObjResult = tryCatchHandlerSync(() => JSON.parse(base64ToStringResult.data), {
		operationCode: 'getVersion.jsonToObjResult'
	});

	if (!jsonToObjResult.isSuccess) return defaultResult;

	const packageDotJSONResult = packageDotJSONSchema.safeParse(jsonToObjResult.data);

	if (!packageDotJSONResult.success) return defaultResult;

	return { result: packageDotJSONResult.data, isSuccess: true as const, error: null };
};

export const getLicense = async () => {
	const licenseResult = await tryCatchHandler(
		improvedFetch(
			[`https://api.github.com/licenses/${env.NEXT_PUBLIC_APP_LICENSE_CODE}`, getDefaultFetchHeader()],
			licenseInfoSchema
		),
		{ operationCode: 'getLicense.get' }
	);

	return licenseResult.isSuccess
		? { result: licenseResult.data as LicenseInfo, isSuccess: true as const, error: null }
		: defaultResult;
};

export const getGithubReadme = async ({
	user: { name }
}: NonNullable<SessionResult['session']>): Promise<string | null> =>
	(
		await tryCatchHandler(
			improvedFetch([`https://raw.githubusercontent.com/${name}/${name}/main/README.md`, getDefaultFetchHeader()]),
			{ operationCode: 'getUserReadme.get' }
		)
	).data;
