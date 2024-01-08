import 'server-only';

import type { getRecord } from '@root/server/database/postgresql/repository/singleRecord';
import type { CommonRecord } from '@root/server/database/postgresql/schema';
import { APIError, type PageProps } from '@root/types/common';
import { searchQueryValidator } from '@root/types/common/zod';
import { objectValues, tryCatchHandler, writeLog } from '@root/utils/common';
import type { Metadata, ResolvingMetadata } from 'next';

export const onQueryDBError = (error: unknown) => {
	writeLog({ args: [error], type: 'error', hideInProd: true });

	throw new APIError({ code: 'INTERNAL_SERVER_ERROR' });
};

export async function generateListMetadata(
	searchParams: PageProps['searchParams'],
	parentPromise: ResolvingMetadata,
	extraMeta: Metadata,
): Promise<Metadata> {
	const { keywords } = await parentPromise;

	const result = objectValues(searchQueryValidator.parse(searchParams)).filter(Boolean).map(String);

	return { ...extraMeta, keywords: [...result, ...(keywords || [])] };
}

export async function generateDetailMetadata<TRecord extends CommonRecord>(
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
