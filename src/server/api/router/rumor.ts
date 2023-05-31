import { defaultLimit } from '@root/constants';
import { publicProcedure, router } from '@root/server/api/trpc';
import { primaryDB, secondaryDB } from '@root/server/db';
import type { Rumor } from '@root/server/db/schema';
import { rumors } from '@root/server/db/schema';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { GetListRecords, GetRecord, ListRecord } from '@root/types/model';
import { evnIs } from '@root/utils/common';
import { env } from '@root/utils/env.mjs';
import {
	CountQuery,
	DirectionQueryMap,
	InvalidRecordIdError,
	RecordNotFoundError,
	onQueryDBError,
	processDBListResult,
} from '@root/utils/server';
import type { SQL } from 'drizzle-orm';
import { and, eq, ilike, or } from 'drizzle-orm';

const getRumor: GetRecord<Rumor> = (db, id) =>
	db
		.select()
		.from(rumors)
		.where(eq(rumors.id, id))
		.then(([res]) => res);

const getALLRumors: GetListRecords<Rumor> = async (db, { search, sortBy, direction, page, rumorType }) => {
	const pageInt = page ?? 1;

	const OR: SQL[] = search ? [ilike(rumors.name, `%${search}%`), ilike(rumors.keyWords, `%${search}%`)] : [];

	const AND: SQL[] = [];

	if (rumorType) AND.push(eq(rumors.rumorType, rumorType));

	return await db
		.select({ totalCount: CountQuery, record: rumors })
		.from(rumors)
		.where(or(...OR))
		.where(and(...AND))
		.orderBy(
			DirectionQueryMap[direction ?? 'asc'](
				rumors[!!sortBy && sortBy !== 'index' && sortBy !== 'level' ? sortBy : 'price'],
			),
		)
		.limit(defaultLimit)
		.offset((pageInt - 1) * defaultLimit)
		.then(processDBListResult);
};

export const rumorRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ input }): Promise<ListRecord<Rumor>> => {
		const [totalRecord, records] = await getALLRumors(primaryDB, input).catch(async error => {
			if (env.USE_SECONDARY_DB_ON_ERROR === 'DISABLED') return onQueryDBError(error);
			if (!evnIs('production')) console.error(error);
			return await getALLRumors(secondaryDB, input).catch(onQueryDBError);
		});

		return { records, page: input.page, totalRecord, totalPage: Math.ceil(totalRecord / defaultLimit) };
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ input: { id } }): Promise<Rumor> => {
		if (!id) throw InvalidRecordIdError();

		const record = await getRumor(primaryDB, id).catch(async error => {
			if (env.USE_SECONDARY_DB_ON_ERROR === 'DISABLED') return onQueryDBError(error);
			if (!evnIs('production')) console.error(error);
			return await getRumor(secondaryDB, id).catch(onQueryDBError);
		});

		if (record) return record;

		throw RecordNotFoundError(id);
	}),
});
