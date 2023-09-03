import 'server-only';

import type { AnyColumn } from 'drizzle-orm';
import { asc, desc, sql } from 'drizzle-orm';

import { defaultLimit } from '@root/constants';
import type { PageProps, ServerError } from '@root/types/common';
import type { DirectionEnum, SortByEnum } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import type { CommonRecord, DBListResult, ListRecord } from '@root/types/model';
import type { Metadata, ResolvingMetadata } from 'next';
import { LogProvider, improvedInclude, tryCatchHandler } from './common';

export const onQueryDBError = (error: unknown) => {
	LogProvider.write({ args: [error], type: 'error' });

	throw 'INTERNAL_SERVER_ERROR-Some Thing When Wrong On The Server.' as const satisfies ServerError;
};

export const InvalidRecordIdError = () => 'BAD_REQUEST-Invalid Record Id.' as const satisfies ServerError;

export const RecordNotFoundError = () => 'NOT_FOUND-Record not found.' as const satisfies ServerError;

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

export function processDBListResult<TRecord extends CommonRecord>(
	dbResult: DBListResult<TRecord>,
): ListRecord<TRecord> {
	const [totalRecord, records] = [dbResult[0]?.totalRecord ?? 0, dbResult.map(({ record }) => record)] as const;

	return { records, totalRecord, totalPage: Math.ceil(totalRecord / defaultLimit) };
}

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
