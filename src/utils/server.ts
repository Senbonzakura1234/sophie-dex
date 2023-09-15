import 'server-only';

import type { AnyColumn } from 'drizzle-orm';
import { asc, desc, sql } from 'drizzle-orm';

import type { PageProps } from '@root/types/common';
import type { DirectionEnum, SortByEnum } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import type { CommonRecord } from '@root/types/model';

import { TRPCError } from '@trpc/server';
import type { Metadata, ResolvingMetadata } from 'next';
import { LogProvider, improvedInclude, tryCatchHandler } from './common';

export const onQueryDBError = (error: unknown) => {
	LogProvider.write({ args: [error], type: 'error' });

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
