import 'server-only';

import type { CommonRecord } from '@root/server/postgresql/schema';
import type { APIResult, PageProps, PreparedPGQuery } from '@root/types/common';
import { APIError } from '@root/types/common';
import type { IdQuery } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import { objectValues, tryCatchHandler } from '@root/utils/common';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateGenericMetadata(
	parentPromise: ResolvingMetadata,
	extraMeta: Metadata,
	searchParams?: PageProps['searchParams'],
): Promise<Metadata> {
	const { keywords } = await parentPromise;

	const result = objectValues(searchQueryValidator.parse(searchParams)).filter(Boolean).map(String);

	return { ...extraMeta, keywords: [...result, ...(keywords || [])] };
}

export async function generateDetailMetadata(
	parentPromise: ResolvingMetadata,
	getRecordPromise: ReturnType<typeof getContentRecord>,
): Promise<Metadata> {
	const result = await tryCatchHandler(Promise.all([parentPromise, getRecordPromise]));

	if (!result.isSuccess) return { title: 'Error' };

	const [{ keywords: parentKeywords }, record] = result.data;

	if (!record.isSuccess) return { title: 'Error' };

	const {
		data: { name, keyWords: currentKeywords },
	} = record.result;

	return { title: name, keywords: [...currentKeywords.split(','), ...(parentKeywords || [])] };
}

export const getContentRecord = async <TRecord extends CommonRecord>(
	query: PreparedPGQuery<TRecord | undefined>,
	{ id }: IdQuery,
) => {
	if (!id)
		return {
			result: null,
			isSuccess: false as const,
			error: new APIError({ code: 'BAD_REQUEST', message: 'Invalid Record Id' }),
		} satisfies Awaited<APIResult>;

	const { data, isSuccess } = await tryCatchHandler(query.execute({ id }));

	if (!isSuccess || !data)
		return {
			result: null,
			isSuccess: false as const,
			error: new APIError({ code: isSuccess ? 'NOT_FOUND' : 'INTERNAL_SERVER_ERROR' }),
		} satisfies Awaited<APIResult>;

	return { result: { data, currentId: id }, isSuccess: true as const, error: null } satisfies Awaited<APIResult>;
};

export const getAllRecordIds = async (
	query: PreparedPGQuery<Array<{ id: string }>>,
): APIResult<Array<{ id: string }>> => {
	const { data, isSuccess } = await tryCatchHandler(query.execute());

	if (isSuccess) return { isSuccess, result: data, error: null };

	return { isSuccess, result: null, error: new APIError({ code: 'INTERNAL_SERVER_ERROR' }) };
};

export const exportRecords = async <TRecord extends CommonRecord>(
	query: PreparedPGQuery<Array<TRecord>>,
): APIResult<Array<TRecord>> => {
	const { data, isSuccess } = await tryCatchHandler(query.execute());

	if (isSuccess) return { isSuccess, result: data, error: null };

	return { isSuccess, result: null, error: new APIError({ code: 'INTERNAL_SERVER_ERROR' }) };
};
