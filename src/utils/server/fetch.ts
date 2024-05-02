import 'server-only';

import type { APIResult } from '@root/types/common';
import { APIError } from '@root/types/common';
import type { GithubUserInfo, LicenseInfo, PackageDotJSON } from '@root/types/common/zod';
import {
	githubFileResponseSchema,
	githubUserInfoSchema,
	licenseInfoSchema,
	packageDotJSONSchema,
} from '@root/types/common/zod';
import { tryCatchHandler, tryCatchHandlerSync, writeLog } from '@root/utils/common';
import { env } from '@root/utils/common/env';
import type { ZodType } from 'zod';

async function improvedFetch<TResult = unknown>(validator: ZodType<TResult>, ...args: Parameters<typeof fetch>) {
	writeLog({ args: [`Fetch: ${JSON.stringify(args[0], null, 2)}`] });

	const fetchResult = await tryCatchHandler(fetch(...args));

	if (!fetchResult.isSuccess) {
		throw new APIError({
			code: 'INTERNAL_SERVER_ERROR',
			message: `Fetch fail at: ${JSON.stringify(args[0], null, 2)}`,
			cause: fetchResult.error,
		});
	}

	if (!fetchResult.data.ok) {
		throw new APIError({
			code: 'INTERNAL_SERVER_ERROR',
			message: `Fetch fail at: ${JSON.stringify(args[0], null, 2)}`,
			cause: fetchResult.data,
		});
	}

	const jsonResult = await tryCatchHandler(fetchResult.data.json());

	if (!jsonResult.isSuccess)
		throw new APIError({
			code: 'INTERNAL_SERVER_ERROR',
			message: `Parse JSON fail: ${JSON.stringify(jsonResult.error, null, 2)}`,
			cause: jsonResult.error,
		});

	const parseResult = await validator.safeParseAsync(jsonResult.data);

	if (parseResult.success) return parseResult.data;

	throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: parseResult.error.message, cause: parseResult.error });
}

const defaultResult = {
	isSuccess: false as const,
	result: null,
	error: new APIError({ code: 'INTERNAL_SERVER_ERROR' }),
} satisfies Awaited<APIResult>;

const getDefaultFetchHeader = (revalidate = 86400): Parameters<typeof fetch>[1] => ({
	headers: { Authorization: `Bearer ${env.GITHUB_TOKEN}`, 'X-GitHub-Api-Version': '2022-11-28' },
	next: { revalidate },
});

export const getVersion = async (): Promise<APIResult<PackageDotJSON>> => {
	const githubResult = await tryCatchHandler(
		improvedFetch(
			githubFileResponseSchema,
			`https://api.github.com/repos/${env.NEXT_PUBLIC_APP_PATH}/contents/package.json`,
			getDefaultFetchHeader(),
		),
	);

	if (!githubResult.isSuccess) return defaultResult;

	const base64ToStringResult = tryCatchHandlerSync(() => atob(githubResult.data.content));

	if (!base64ToStringResult.isSuccess) return defaultResult;

	const jsonToObjResult = tryCatchHandlerSync(() => JSON.parse(base64ToStringResult.data));

	if (!jsonToObjResult.isSuccess) return defaultResult;

	const packageDotJSONResult = packageDotJSONSchema.safeParse(jsonToObjResult.data);

	if (!packageDotJSONResult.success) return defaultResult;

	return { result: packageDotJSONResult.data, isSuccess: true as const, error: null };
};

export const getGithubUserInfo = async (): Promise<APIResult<GithubUserInfo>> => {
	const githubUserInfo = await tryCatchHandler(
		improvedFetch(
			githubUserInfoSchema,
			`https://api.github.com/users/${env.NEXT_PUBLIC_APP_AUTHOR}`,
			getDefaultFetchHeader(),
		),
	);

	return githubUserInfo.isSuccess
		? { result: githubUserInfo.data as GithubUserInfo, isSuccess: true as const, error: null }
		: defaultResult;
};

export const getLicense = async () => {
	const licenseResult = await tryCatchHandler(
		improvedFetch(
			licenseInfoSchema,
			`https://api.github.com/licenses/${env.NEXT_PUBLIC_APP_LICENSE_CODE}`,
			getDefaultFetchHeader(),
		),
	);

	return licenseResult.isSuccess
		? { result: licenseResult.data as LicenseInfo, isSuccess: true as const, error: null }
		: defaultResult;
};
