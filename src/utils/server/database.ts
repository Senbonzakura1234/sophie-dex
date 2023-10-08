import 'server-only';

import { DEFAULT_LIMIT } from '@root/constants/common';
import type { CommonRecord } from '@root/server/database/schema';
import type { PageProps } from '@root/types/common';
import type { DirectionEnum, SortByEnum } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import { improvedInclude, tryCatchHandler, writeLog } from '@root/utils/common';
import { TRPCError } from '@trpc/server';
import { asc, desc, sql } from 'drizzle-orm';
import type { Metadata, ResolvingMetadata } from 'next';

export const onQueryDBError = (error: unknown) => {
	writeLog({ args: [error], type: 'error' });

	throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR' });
};

export const getOffset = (page: number | null) => ((page ?? 1) - 1) * DEFAULT_LIMIT;

export const CountQuery = sql<number>`count(*) over()`;

export const getDirection = (direction: DirectionEnum | null) => (direction ? { asc, desc }[direction] : asc);

export const getSortField = <TSearch extends Readonly<SortByEnum>>(
	allowedSortField: Readonly<Array<TSearch>>,
	defaultSortField: TSearch,
	search: SortByEnum | null,
) => (improvedInclude(allowedSortField, search) ? search : defaultSortField);

export async function generateListMetadata(
	searchParams: PageProps['searchParams'],
	parentPromise: ResolvingMetadata,
	extraMeta: Metadata,
): Promise<Metadata> {
	const { keywords } = await parentPromise;

	const result = Object.values(searchQueryValidator.parse(searchParams)).filter(Boolean).map(String);

	return { ...extraMeta, keywords: [...result, ...(keywords || [])] };
}

export async function generateDetailMetadata<TRecord extends CommonRecord>(
	parentPromise: ResolvingMetadata,
	getRecordPromise: Promise<TRecord>,
): Promise<Metadata> {
	const result = await tryCatchHandler(Promise.all([parentPromise, getRecordPromise]));

	if (!result.isSuccess) return { title: 'Error' };

	const [{ keywords: parentKeywords }, { name, keyWords: currentKeywords }] = result.data;

	return { title: name, keywords: [...currentKeywords.split(','), ...(parentKeywords || [])] };
}
