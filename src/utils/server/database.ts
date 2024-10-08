import { env } from '@root/utils/common/env';
if (env.NEXT_PUBLIC_NODE_ENV !== 'script') void import('server-only');

import { errorMap } from '@root/constants/common';
import type { CommonRecord, Effect, Item, Rumor, Trait } from '@root/server/postgresql/schema';
import type { APIResult, CommonObject, PreparedPGQuery } from '@root/types/common';
import { APIError } from '@root/types/common';
import type { PageProps } from '@root/types/common/props';
import type { IdQuery, OgQuery } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import {
	capitalize,
	deleteNullableProperty,
	entries,
	getBaseUrl,
	objectValues,
	parseHyperLinkData,
	tryCatchHandler
} from '@root/utils/common';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateGenericMetadata(
	parentPromise: ResolvingMetadata,
	extraMeta: Metadata,
	searchParams?: Readonly<PageProps>['searchParams']
): Promise<Metadata> {
	const parentRes = await tryCatchHandler(parentPromise, 'generateGenericMetadata.getParentMeta');

	if (!parentRes.isSuccess) return { title: `Error 500 - ${errorMap.INTERNAL_SERVER_ERROR.message}` };

	const { keywords } = parentRes.data;

	const result = objectValues(searchQueryValidator.parse(searchParams)).filter(Boolean).map(String);

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

	const ogSearchParam = new URLSearchParams(entries(ogQuery));
	const ogImgUrl = `${getBaseUrl(true)}/api/og?${ogSearchParam.toString()}`;

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
	{ id }: IdQuery
) => {
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
