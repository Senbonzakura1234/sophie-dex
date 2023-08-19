import { TRPCError } from '@trpc/server';
import type { AnyColumn } from 'drizzle-orm';
import { asc, desc, sql } from 'drizzle-orm';

import { defaultLimit } from '@root/constants';
import type { DirectionEnum, SortByEnum } from '@root/types/common/zod';
import type { CommonRecord, DBListResult, ListRecord } from '@root/types/model';
import { LogProvider, improvedInclude } from './common';

export const onQueryDBError = (error: unknown) => {
	LogProvider.write({ args: [error], type: 'error' });

	throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Some Thing When Wrong On The Server.' });
};

export const InvalidRecordIdError = () => new TRPCError({ code: 'BAD_REQUEST', message: 'Invalid Record Id.' });

export const RecordNotFoundError = (id: string) =>
	new TRPCError({ code: 'NOT_FOUND', message: 'Record not found.', cause: `Record id: ${id}` });

export const ANYQuery = (column: AnyColumn['name'], value: string | number) =>
	sql`${value} = ANY(${sql.identifier(column)})`;

export const CountQuery = sql<number>`count(*) over()`;

const DirectionMap = { asc, desc } as const;
export const getDirection = (direction: DirectionEnum | null) => (direction ? DirectionMap[direction] : asc);

export const getSortField = <TSearch extends Readonly<SortByEnum>>(
	allowedSortField: Readonly<TSearch[]>,
	defaultSortField: TSearch,
	search: SortByEnum | null,
) => (improvedInclude(allowedSortField, search) ? search : defaultSortField);

export const processDBListResult = <TRecord extends CommonRecord>(
	dbResult: DBListResult<TRecord>,
): ListRecord<TRecord> => {
	const [totalRecord, records] = [dbResult[0]?.totalRecord ?? 0, dbResult.map(({ record }) => record)] as const;

	return { records, totalRecord, totalPage: Math.ceil(totalRecord / defaultLimit) };
};
