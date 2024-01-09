import 'server-only';

import type { CommonRecord } from '@root/server/database/postgresql/schema';
import { APIError, type PageProps, type PreparedPGQuery } from '@root/types/common';
import type { IdQuery } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import { objectValues, tryCatchHandler } from '@root/utils/common';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateListMetadata(
	searchParams: PageProps['searchParams'],
	parentPromise: ResolvingMetadata,
	extraMeta: Metadata,
): Promise<Metadata> {
	const { keywords } = await parentPromise;

	const result = objectValues(searchQueryValidator.parse(searchParams)).filter(Boolean).map(String);

	return { ...extraMeta, keywords: [...result, ...(keywords || [])] };
}

export async function generateDetailMetadata(
	parentPromise: ResolvingMetadata,
	getRecordPromise: ReturnType<typeof getRecord>,
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

export const getRecord = async <TRecord extends CommonRecord>(
	query: PreparedPGQuery<TRecord | undefined>,
	{ id }: IdQuery,
) => {
	if (!id)
		return {
			result: null,
			isSuccess: false as const,
			error: new APIError({ code: 'BAD_REQUEST', message: 'Invalid Record Id' }),
		};

	const { data, isSuccess } = await tryCatchHandler(query.execute({ id }));

	if (!isSuccess || !data)
		return {
			result: null,
			isSuccess: false as const,
			error: new APIError({ code: isSuccess ? 'NOT_FOUND' : 'INTERNAL_SERVER_ERROR' }),
		};

	return { result: { data, currentId: id }, isSuccess: true as const, error: null };
};

export const getAllRecordIds = async (query: PreparedPGQuery<Array<{ id: string }>>) => {
	const { data, isSuccess } = await tryCatchHandler(query.execute());

	if (isSuccess) return { isSuccess, result: data, error: null };

	return { isSuccess, result: null, error: new APIError({ code: 'INTERNAL_SERVER_ERROR' }) };
};

export const exportRecords = async <TRecord extends CommonRecord>(query: PreparedPGQuery<Array<TRecord>>) => {
	const { data, isSuccess } = await tryCatchHandler(query.execute());

	if (isSuccess) return { isSuccess, result: data, error: null };

	return { isSuccess, result: null, error: new APIError({ code: 'INTERNAL_SERVER_ERROR' }) };
};
