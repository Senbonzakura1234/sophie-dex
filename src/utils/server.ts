import 'server-only';

import type { AnyColumn } from 'drizzle-orm';
import { asc, desc, sql } from 'drizzle-orm';

import type { PageProps } from '@root/types/common';
import type { DirectionEnum, SortByEnum } from '@root/types/common/zod';
import {
	githubFileResponseSchema,
	githubUserInfoSchema,
	licenseInfoSchema,
	packageDotJSONSchema,
	repoInfoSchema,
	searchQueryValidator,
} from '@root/types/common/zod';
import type { CommonRecord } from '@root/types/model';

import { APP_AUTHOR, APP_PATH } from '@root/constants/common';
import {
	defaultGithubHeader,
	defaultGithubUserInfo,
	defaultLicenseInfo,
	defaultRepoInfo,
} from '@root/constants/server';
import { TRPCError } from '@trpc/server';
import type { Metadata, ResolvingMetadata } from 'next';
import type { ZodType } from 'zod';
import { improvedInclude, tryCatchHandler, tryCatchHandlerSync, writeLog } from './common';

export const onQueryDBError = (error: unknown) => {
	writeLog({ args: [error], type: 'error' });

	throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR' });
};

export const ANYQuery = (column: AnyColumn['name'], value: string | number) =>
	sql`${value} = ANY(${sql.identifier(column)})`;

export const CountQuery = sql<number>`count(*) over()`;

const DirectionMap = { asc, desc } as const;
export const getDirection = (direction: DirectionEnum | null) => (direction ? DirectionMap[direction] : asc);

export const getSortField = <TSearch extends Readonly<SortByEnum>>(
	allowedSortField: Readonly<Array<TSearch>>,
	defaultSortField: TSearch,
	search: SortByEnum | null,
) => (improvedInclude(allowedSortField, search) ? search : defaultSortField);

export async function generateListMetadata(
	searchParams: PageProps['searchParams'],
	parent: ResolvingMetadata,
	extraMeta: Metadata = {},
): Promise<Metadata> {
	const { keywords } = await parent;

	const result = Object.values(searchQueryValidator.parse(searchParams)).filter(Boolean).map(String);

	return { ...extraMeta, keywords: [...result, ...(keywords || [])] };
}

export async function generateDetailMetadata<TRecord extends CommonRecord>(
	parentPromise: ResolvingMetadata,
	getRecordPromise: Promise<TRecord>,
): Promise<Metadata> {
	const result = await tryCatchHandler(Promise.all([parentPromise, getRecordPromise]));

	if (!result.isSuccess) return { title: 'Error' };

	const [parent, record] = result.data;

	return { title: record.name, keywords: [...record.keyWords.split(','), ...(parent.keywords || [])] };
}

export async function improvedFetch<TResult = unknown>(
	validator: ZodType<TResult>,
	defaultValue: TResult | undefined,
	...args: Parameters<typeof fetch>
) {
	writeLog({ args: [`Fetch: ${JSON.stringify(args[0], null, 2)}`], type: 'log' });

	const fetchResult = await tryCatchHandler(fetch(...args));

	if (!fetchResult.isSuccess) {
		throw new TRPCError({
			code: 'INTERNAL_SERVER_ERROR',
			message: `Fetch fail at: ${JSON.stringify(args[0], null, 2)}`,
			cause: fetchResult.error,
		});
	}

	if (!fetchResult.data.ok) {
		throw new TRPCError({
			code: 'INTERNAL_SERVER_ERROR',
			message: `Fetch fail at: ${JSON.stringify(args[0], null, 2)}`,
			cause: fetchResult.data,
		});
	}

	const jsonResult = await tryCatchHandler(fetchResult.data.json());

	if (!jsonResult.isSuccess)
		throw new TRPCError({
			code: 'INTERNAL_SERVER_ERROR',
			message: `Parse JSON fail: ${JSON.stringify(jsonResult.error, null, 2)}`,
			cause: jsonResult.error,
		});

	const parseResult = await validator.safeParseAsync(jsonResult.data);

	if (parseResult.success) return parseResult.data;

	if (!defaultValue)
		throw new TRPCError({
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
			`https://api.github.com/repos/${APP_PATH}/contents/package.json`,
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

export const getRepoInfo = async () => {
	const repoResult = await tryCatchHandler(
		improvedFetch(repoInfoSchema, undefined, `https://api.github.com/repos/${APP_PATH}`, defaultGithubHeader),
	);

	return repoResult.isSuccess ? repoResult.data : defaultRepoInfo;
};

export const getGithubUserInfo = async () => {
	const githubUserInfo = await tryCatchHandler(
		improvedFetch(githubUserInfoSchema, undefined, `https://api.github.com/users/${APP_AUTHOR}`, defaultGithubHeader),
	);

	return githubUserInfo.isSuccess ? githubUserInfo.data : defaultGithubUserInfo;
};

export const getLicense = async () => {
	const repoInfo = await getRepoInfo();

	const licenseResult = await tryCatchHandler(
		improvedFetch(licenseInfoSchema, undefined, repoInfo.license.url, defaultGithubHeader),
	);

	return licenseResult.isSuccess ? licenseResult.data : defaultLicenseInfo;
};
