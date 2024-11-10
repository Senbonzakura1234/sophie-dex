import { env } from '@root/utils/common/env';
if (env.NEXT_PUBLIC_NODE_ENV !== 'script') void import('server-only');

import { errorMap, moduleIdList } from '@root/constants/common';
import {
	getAllRecordQueriesMap,
	getBookmarksQueriesMap,
	getProfileRecordQuery
} from '@root/server/postgresql/repository/query';
import type { CommonRecord, Effect, Item, Rumor, Trait } from '@root/server/postgresql/schema';
import type { APIResult, CommonObject, PreparedPGQuery } from '@root/types/common';
import { APIError } from '@root/types/common';
import type { PageProps } from '@root/types/common/props';
import type { IdQuery, ModuleIdQuery, OgQuery } from '@root/types/common/zod';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { ModuleIdEnum } from '@root/types/common/zod/generic';
import {
	capitalize,
	deleteNullableProperty,
	getBaseUrl,
	objectValues,
	parseHyperLinkData,
	tryCatchHandler
} from '@root/utils/common';
import type { SessionResult } from '@root/utils/server';
import { getOgImgUrl, getSiteMapPriority } from '@root/utils/server';
import { getGithubReadme } from '@root/utils/server/fetch';
import type { Metadata, MetadataRoute, ResolvingMetadata } from 'next';

export async function generateGenericMetadata(
	parentPromise: ResolvingMetadata,
	extraMeta: Metadata,
	searchParams?: Readonly<PageProps>['searchParams']
): Promise<Metadata> {
	const res = await tryCatchHandler(
		Promise.all([parentPromise, searchParams]),
		'generateGenericMetadata.getParentMeta'
	);

	if (!res.isSuccess) return { title: `Error 500 - ${errorMap.INTERNAL_SERVER_ERROR.message}` };

	const [{ keywords }, searchParamsRes] = res.data;

	const result = objectValues(searchQueryValidator.parse(searchParamsRes)).filter(Boolean).map(String);

	return { ...extraMeta, keywords: [...result, ...(keywords || [])] };
}

export async function generateDetailMetadata(
	parentPromise: ResolvingMetadata,
	getRecordPromise: ReturnType<typeof getContentRecord>
): Promise<Metadata> {
	const result = await tryCatchHandler(
		Promise.all([parentPromise, getRecordPromise]),
		'generateDetailMetadata.getParentMetaAndRecord'
	);

	if (!result.isSuccess) return { title: `Error 500 - ${errorMap.INTERNAL_SERVER_ERROR.message}` };

	const [{ keywords: parentKeywords, other, twitter }, record] = result.data;

	if (!record.isSuccess) return { title: `Error ${record.error.codeNumber} - ${errorMap[record.error.code].message}` };

	const { data: recordData } = record.result;

	const ogQuery = {
		alt: recordData.name,
		title: `${capitalize(recordData.moduleId)} | ${recordData.name}`,
		description: `${getBaseUrl(true)}/${recordData.moduleId}/${recordData.id}`
	} satisfies OgQuery;

	const ogImgUrl = getOgImgUrl(ogQuery);

	return {
		title: ogQuery.title,
		keywords: [...recordData.keyWords.split(','), ...(parentKeywords || [])],
		other: {
			...deleteNullableProperty((other || {}) as CommonObject),
			'og:description': recordData.keyWords,
			'og:image': ogImgUrl,
			'og:title': ogQuery.title,
			'og:url': ogQuery.description
		},
		twitter: {
			...deleteNullableProperty((twitter || {}) as CommonObject),
			description: recordData.keyWords,
			images: ogImgUrl,
			title: ogQuery.title
		}
	};
}

export const getContentRecord = async <TRecord extends CommonRecord>(
	query: PreparedPGQuery<TRecord | undefined>,
	params: IdQuery
) => {
	const idQueryRes = idQueryValidator.safeParse(params);

	if (!idQueryRes.success)
		return {
			result: null,
			isSuccess: false as const,
			error: new APIError({ code: 'BAD_REQUEST', message: 'Invalid Record Id' })
		} satisfies Awaited<APIResult>;

	const { id } = idQueryRes.data;

	if (!id)
		return {
			result: null,
			isSuccess: false as const,
			error: new APIError({ code: 'BAD_REQUEST', message: 'Invalid Record Id' })
		} satisfies Awaited<APIResult>;

	const { data, isSuccess } = await tryCatchHandler(query.execute({ id }), 'getContentRecord.execute');

	if (!isSuccess || !data)
		return {
			result: null,
			isSuccess: false as const,
			error: new APIError({ code: isSuccess ? 'NOT_FOUND' : 'INTERNAL_SERVER_ERROR' })
		} satisfies Awaited<APIResult>;

	return { result: { data, currentId: id }, isSuccess: true as const, error: null } satisfies Awaited<APIResult>;
};

export const getAllRecordIds = async (
	query: PreparedPGQuery<Array<{ id: string }>>
): APIResult<Array<{ id: string }>> => {
	const { data, isSuccess } = await tryCatchHandler(query.execute(), 'getAllRecordIds.execute');

	if (isSuccess) return { isSuccess, result: data, error: null };

	return { isSuccess, result: null, error: new APIError({ code: 'INTERNAL_SERVER_ERROR' }) };
};

export const exportRecords = async <TRecord extends CommonRecord>(
	query: PreparedPGQuery<Array<TRecord>>
): APIResult<Array<TRecord>> => {
	const { data, isSuccess } = await tryCatchHandler(query.execute(), 'exportRecords.execute');

	if (isSuccess) return { isSuccess, result: data, error: null };

	return { isSuccess, result: null, error: new APIError({ code: 'INTERNAL_SERVER_ERROR' }) };
};

export const getReadmeProfile = async (session: NonNullable<SessionResult['session']>) => {
	const getReadmeProfileRes = await tryCatchHandler(
		Promise.all([getProfileRecordQuery.execute({ login: session.user.name }), getGithubReadme(session)]),
		'getReadmeProfile.batchQuery'
	);

	if (!getReadmeProfileRes.isSuccess)
		return {
			error: new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Get Profile error' }),
			isSuccess: false as const,
			result: null
		} satisfies Awaited<APIResult>;

	const [profile, readmeContent] = getReadmeProfileRes.data;

	if (!profile)
		return {
			error: new APIError({ code: 'NOT_FOUND', message: 'Profile not found' }),
			isSuccess: false as const,
			result: null
		} satisfies Awaited<APIResult>;

	return { error: null, isSuccess: true as const, result: { profile, readmeContent } } satisfies Awaited<APIResult>;
};

const onGetBookmarks = async (moduleId: ModuleIdQuery['moduleId'], username: string) => {
	const res = (await getBookmarksQueriesMap[moduleId].execute({ name: username })) as Record<string, Array<string>>;

	return objectValues(res || {})[0] || [];
};

export const getModuleBookmarks = async (
	{ moduleId }: ModuleIdQuery,
	session: NonNullable<SessionResult['session']>
): APIResult<Array<string>> => {
	const getModuleBookmarkRes = await tryCatchHandler(
		onGetBookmarks(moduleId, session.user.name),
		'getModuleBookmarks.executeQuery'
	);

	if (!getModuleBookmarkRes.isSuccess)
		return {
			isSuccess: false as const,
			result: null,
			error: new APIError({ code: 'INTERNAL_SERVER_ERROR' })
		};

	if (!getModuleBookmarkRes.data)
		return {
			isSuccess: false as const,
			result: null,
			error: new APIError({ code: 'NOT_FOUND', message: 'User not found' })
		};

	return {
		isSuccess: true as const,
		result: getModuleBookmarkRes.data,
		error: null
	};
};

export const updateEffectKeywords = (input: Effect): Effect => ({
	...input,
	keyWords: [input.name, input.index].filter(Boolean).join(',').replaceAll('_', ' ').toLowerCase()
});

export const updateItemKeywords = (input: Item): Item => ({
	...input,
	keyWords: [
		input.name,
		input.color,
		input.category,
		input.index.toString(),
		input.level.toString(),
		input.recipeType,
		...input.relatedCategories,
		input.traitPresent?.name,
		...(input.recipeIdea?.contentData || []).map(c => parseHyperLinkData(c).label),
		...input.description.hunt,
		input.description.rumor?.name,
		input.description.shop,
		...input.description.location,
		input.description.special
	]
		.filter(Boolean)
		.join(',')
		.replaceAll('_', ' ')
		.toLowerCase()
});

export const updateRumorKeywords = (input: Rumor): Rumor => ({
	...input,
	keyWords: [
		input.name,
		input.price.toString(),
		input.location,
		input.rumorType,
		...input.description.contentData.map(c => parseHyperLinkData(c).label)
	]
		.filter(Boolean)
		.join(',')
		.replaceAll('_', ' ')
		.toLowerCase()
});

export const updateTraitKeywords = (input: Trait): Trait => ({
	...input,
	keyWords: [
		input.name,
		input.index.toString(),
		input.itemPresent?.name,
		...input.mergeFrom.map(([f, s]) => [f.name, s.name]).flat(),
		...input.categories
	]
		.filter(Boolean)
		.join(',')
		.replaceAll('_', ' ')
		.toLowerCase()
});

export const generateRecordDetailSitemap = async (moduleId: ModuleIdEnum): Promise<MetadataRoute.Sitemap> => {
	const { data } = await tryCatchHandler(
		getAllRecordQueriesMap[moduleId].execute(),
		'generateRecordsSitemap.getAllRecords'
	);

	return (data || []).map(record => {
		const ogQuery = {
			alt: record.name,
			title: `${capitalize(record.moduleId)} | ${record.name}`,
			description: `${getBaseUrl(true)}/${record.moduleId}/${record.id}`
		} satisfies OgQuery;

		return {
			url: ogQuery.description,
			changeFrequency: 'weekly',
			images: [getOgImgUrl()],
			priority: getSiteMapPriority(`detail_${moduleId}`)
		};
	});
};

export const generateRecordListSitemap = (): MetadataRoute.Sitemap => {
	return moduleIdList.map(moduleId => {
		const ogQuery = {
			alt: moduleId,
			title: capitalize(moduleId),
			description: `${getBaseUrl(true)}/${moduleId}`
		} satisfies OgQuery;

		return {
			url: ogQuery.description,
			changeFrequency: 'weekly',
			images: [getOgImgUrl()],
			priority: getSiteMapPriority(`list_${moduleId}`)
		};
	});
};
