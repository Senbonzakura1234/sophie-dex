import 'server-only';

import type { AnyColumn } from 'drizzle-orm';
import { asc, desc, sql } from 'drizzle-orm';

import type { PageProps, ServerErrorEnum } from '@root/types/common';
import type { DirectionEnum, SortByEnum } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import type { CommonRecord } from '@root/types/model';
import type { Metadata, ResolvingMetadata } from 'next';
import { LogProvider, improvedInclude, tryCatchHandler } from './common';

export const onQueryDBError = (error: unknown) => {
	LogProvider.write({ args: [error], type: 'error' });

	throw 'INTERNAL_SERVER_ERROR' as const satisfies ServerErrorEnum;
};

export const InvalidRecordIdError = () => 'BAD_REQUEST' as const satisfies ServerErrorEnum;

export const RecordNotFoundError = () => 'NOT_FOUND' as const satisfies ServerErrorEnum;

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
	parent: ResolvingMetadata,
	getRecord: Promise<TRecord>,
): Promise<Metadata> {
	const result = await tryCatchHandler(Promise.all([getRecord, parent]));

	if (!result.isSuccess) return {};

	const [{ keyWords, name }, { keywords: prevKeywords }] = result.data;

	return { title: name, keywords: [...keyWords.split(','), ...(prevKeywords || [])] };
}
