import { TRPCError } from '@trpc/server';
import type { AnyColumn, SQL } from 'drizzle-orm';
import { asc, desc, sql } from 'drizzle-orm';

import type { CommonRecord, DBListResult } from '@root/types/model';
import { evnIs } from './common';

export const onQueryDBError = (error: unknown) => {
	if (evnIs('development')) console.error(error);

	throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Some Thing When Wrong On The Server.' });
};

export const InvalidRecordIdError = () => new TRPCError({ code: 'BAD_REQUEST', message: 'Invalid Record Id.' });

export const RecordNotFoundError = (id: string) =>
	new TRPCError({ code: 'NOT_FOUND', message: 'Record not found.', cause: `Record id: ${id}` });

export const ForbiddenError = () =>
	new TRPCError({ code: 'FORBIDDEN', message: 'You are not allow to see this page.' });

export const ANYQuery = (column: AnyColumn['name'], value: string | number): SQL => sql`${value}=ANY("${column}")`;
export const CountQuery: SQL<number> = sql<number>`count(*) over()`;

export const DirectionQueryMap = {
	asc: asc,
	desc: desc,
} as const;

export const processDBListResult = <TRecord extends CommonRecord>(dbResult: DBListResult<TRecord>) =>
	[dbResult[0]?.totalCount || 0, dbResult.map(({ record }) => record)] as const;
