import { defaultLimit } from '@root/constants';
import { publicProcedure, router } from '@root/server/api/trpc';
import { primaryDB, secondaryDB } from '@root/server/db';
import type { Item } from '@root/server/db/schema';
import { items } from '@root/server/db/schema';
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

const getItem: GetRecord<Item> = (db, id) =>
	db
		.select()
		.from(items)
		.where(eq(items.id, id))
		.then(([res]) => res);

const getALLItems: GetListRecords<Item> = async (
	db,
	{ search, sortBy, direction, color, relatedCategory, page, category, recipeType },
) => {
	const pageInt = page ?? 1;

	const OR: SQL[] = search ? [ilike(items.name, `%${search}%`), ilike(items.keyWords, `%${search}%`)] : [];

	const AND: SQL[] = [];

	if (relatedCategory) AND.push(ANYQuery(items.relatedCategories.name, relatedCategory));
	if (color) AND.push(eq(items.color, color));
	if (recipeType) AND.push(eq(items.recipeType, recipeType));
	if (category) AND.push(eq(items.category, category));

	return await db
		.select({ totalCount: CountQuery, record: items })
		.from(items)
		.where(or(...OR))
		.where(and(...AND))
		.orderBy(DirectionQueryMap[direction ?? 'asc'](items[!!sortBy && sortBy !== 'price' ? sortBy : 'index']))
		.limit(defaultLimit)
		.offset((pageInt - 1) * defaultLimit)
		.then(processDBListResult);
};

export const itemRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ input }): Promise<ListRecord<Item>> => {
		const [totalRecord, records] = await getALLItems(primaryDB, input).catch(async error => {
			if (env.USE_SECONDARY_DB_ON_ERROR === 'DISABLED') return onQueryDBError(error);
			if (!evnIs('production')) console.error(error);
			return await getALLItems(secondaryDB, input).catch(onQueryDBError);
		});

		return { records, page: input.page, totalRecord, totalPage: Math.ceil(totalRecord / defaultLimit) };
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ input: { id } }): Promise<Item> => {
		if (!id) throw InvalidRecordIdError();

		const record = await getItem(primaryDB, id).catch(async error => {
			if (env.USE_SECONDARY_DB_ON_ERROR === 'DISABLED') return onQueryDBError(error);
			if (!evnIs('production')) console.error(error);
			return await getItem(secondaryDB, id).catch(onQueryDBError);
		});

		if (record) return record;

		throw RecordNotFoundError(id);
	}),
});
