import { defaultLimit } from '@root/constants';
import { publicProcedure, router } from '@root/server/api/trpc';
import { primaryDB, secondaryDB } from '@root/server/db';
import type { Trait } from '@root/server/db/schema';
import { traits } from '@root/server/db/schema';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { GetListRecords, GetRecord, ListRecord } from '@root/types/model';
import { evnIs } from '@root/utils/common';
import { env } from '@root/utils/env.mjs';
import {
	ANYQuery,
	CountQuery,
	DirectionQueryMap,
	InvalidRecordIdError,
	RecordNotFoundError,
	onQueryDBError,
	processDBListResult,
} from '@root/utils/server';
import type { SQL } from 'drizzle-orm';
import { and, eq, ilike, or } from 'drizzle-orm';

const getTrait: GetRecord<Trait> = (db, id) =>
	db
		.select()
		.from(traits)
		.where(eq(traits.id, id))
		.then(([res]) => res);

const getALLTraits: GetListRecords<Trait> = async (db, { search, sortBy, direction, category, page }) => {
	const pageInt = page ?? 1;

	const OR: SQL[] = search
		? [
				ilike(traits.name, `%${search}%`),
				ilike(traits.description, `%${search}%`),
				ilike(traits.keyWords, `%${search}%`),
		  ]
		: [];

	const AND: SQL[] = [];

	if (category) AND.push(ANYQuery(traits.categories.name, category));

	return await db
		.select({ totalCount: CountQuery, record: traits })
		.from(traits)
		.where(or(...OR))
		.where(and(...AND))
		.orderBy(
			DirectionQueryMap[direction ?? 'asc'](
				traits[!!sortBy && sortBy !== 'price' && sortBy !== 'level' ? sortBy : 'index'],
			),
		)
		.limit(defaultLimit)
		.offset((pageInt - 1) * defaultLimit)
		.then(processDBListResult);
};

export const traitRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ input }): Promise<ListRecord<Trait>> => {
		const [totalRecord, records] = await getALLTraits(primaryDB, input).catch(async error => {
			if (env.USE_SECONDARY_DB_ON_ERROR === 'DISABLED') return onQueryDBError(error);
			if (!evnIs('production')) console.error(error);
			return await getALLTraits(secondaryDB, input).catch(onQueryDBError);
		});

		return { records, page: input.page, totalRecord, totalPage: Math.ceil(totalRecord / defaultLimit) };
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ input: { id } }): Promise<Trait> => {
		if (!id) throw InvalidRecordIdError();

		const record = await getTrait(primaryDB, id).catch(async error => {
			if (env.USE_SECONDARY_DB_ON_ERROR === 'DISABLED') return onQueryDBError(error);
			if (!evnIs('production')) console.error(error);
			return await getTrait(secondaryDB, id).catch(onQueryDBError);
		});

		if (record) return record;

		throw RecordNotFoundError(id);
	}),
});
