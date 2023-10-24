import 'server-only';

import { defaultGithubHeader, defaultGithubUserInfo, defaultLicenseInfo } from '@root/constants/server';
import { APIError } from '@root/types/common';
import {
	githubFileResponseSchema,
	githubUserInfoSchema,
	licenseInfoSchema,
	packageDotJSONSchema,
} from '@root/types/common/zod';
import { tryCatchHandler, tryCatchHandlerSync, writeLog } from '@root/utils/common';
import { env } from '@root/utils/common/env.mjs';
import type { ZodType } from 'zod';

async function improvedFetch<TResult = unknown>(
	validator: ZodType<TResult>,
	defaultValue: TResult | undefined,
	...args: Parameters<typeof fetch>
) {
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

	if (!defaultValue)
		throw new APIError({
			code: 'INTERNAL_SERVER_ERROR',
			message: parseResult.error.message,
			cause: parseResult.error,
		});

	return defaultValue;
}

export const getVersion = async () => {
	const githubResult = await tryCatchHandler(
		improvedFetch(
			githubFileResponseSchema,
			undefined,
			`https://api.github.com/repos/${env.NEXT_PUBLIC_APP_PATH}/contents/package.json`,
			defaultGithubHeader,
		),
	);

	if (!githubResult.isSuccess) return '0.0.0';

	const base64ToStringResult = tryCatchHandlerSync(() => atob(githubResult.data.content));

	if (!base64ToStringResult.isSuccess) return '0.0.0';

	const jsonToObjResult = tryCatchHandlerSync(() => JSON.parse(base64ToStringResult.data));

	if (!jsonToObjResult.isSuccess) return '0.0.0';

	const packageDotJSONResult = packageDotJSONSchema.safeParse(jsonToObjResult.data);

	if (!packageDotJSONResult.success) return '0.0.0';

	return packageDotJSONResult.data.version;
};

export const getGithubUserInfo = async () => {
	const githubUserInfo = await tryCatchHandler(
		improvedFetch(
			githubUserInfoSchema,
			undefined,
			`https://api.github.com/users/${env.NEXT_PUBLIC_APP_AUTHOR}`,
			defaultGithubHeader,
		),
	);

	return githubUserInfo.isSuccess ? githubUserInfo.data : defaultGithubUserInfo;
};

export const getLicense = async () => {
	const licenseResult = await tryCatchHandler(
		improvedFetch(
			licenseInfoSchema,
			undefined,
			`https://api.github.com/licenses/${env.NEXT_PUBLIC_APP_LICENSE_CODE}`,
			defaultGithubHeader,
		),
	);

	return licenseResult.isSuccess ? licenseResult.data : defaultLicenseInfo;
};
