import { defaultLimit } from '@root/constants';
import { publicProcedure, router } from '@root/server/api/trpc';
import { primaryDB, secondaryDB } from '@root/server/db';
import type { Effect } from '@root/server/db/schema';
import { effects } from '@root/server/db/schema';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { GetListRecords, GetRecord, ListRecord } from '@root/types/model';
import { evnIs } from '@root/utils/common';
import { env } from '@root/utils/env.mjs';
import {
	CountQuery,
	InvalidRecordIdError,
	RecordNotFoundError,
	getDirection,
	getSortField,
	onQueryDBError,
	processDBListResult,
} from '@root/utils/server';
import { eq, ilike, or } from 'drizzle-orm';

const getEffect: GetRecord<Effect> = (db, id) =>
	db
		.select()
		.from(effects)
		.where(eq(effects.id, id))
		.then(([res]) => res);

const getALLEffects: GetListRecords<Effect> = (db, { search, sortBy, direction, page }) =>
	db
		.select({ totalRecord: CountQuery, record: effects })
		.from(effects)
		.where(
			or(
				...(search
					? [
							ilike(effects.name, `%${search}%`),
							ilike(effects.description, `%${search}%`),
							ilike(effects.keyWords, `%${search}%`),
					  ]
					: []),
			),
		)
		.orderBy(getDirection(direction)(effects[getSortField(['index', 'name'], 'index', sortBy)]))
		.limit(defaultLimit)
		.offset(((page ?? 1) - 1) * defaultLimit)
		.then(processDBListResult);

export const effectRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ input }): Promise<ListRecord<Effect>> => {
		const [totalRecord, records] = await getALLEffects(primaryDB, input).catch(async error => {
			if (env.USE_SECONDARY_DB_ON_ERROR === 'DISABLED') return onQueryDBError(error);
			if (!evnIs('production')) console.error(error);
			return await getALLEffects(secondaryDB, input).catch(onQueryDBError);
		});

		return { records, page: input.page, totalRecord, totalPage: Math.ceil(totalRecord / defaultLimit) };
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ input: { id } }): Promise<Effect> => {
		if (!id) throw InvalidRecordIdError();

		const record = await getEffect(primaryDB, id).catch(async error => {
			if (env.USE_SECONDARY_DB_ON_ERROR === 'DISABLED') return onQueryDBError(error);
			if (!evnIs('production')) console.error(error);
			return await getEffect(secondaryDB, id).catch(onQueryDBError);
		});

		if (record) return record;

		throw RecordNotFoundError(id);
	}),
});
