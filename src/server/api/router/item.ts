import { defaultLimit } from '@root/constants';
import { publicProcedure, router } from '@root/server/api/trpc';
import { db } from '@root/server/db';
import type { Item } from '@root/server/db/schema';
import { items } from '@root/server/db/schema';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { ListRecord } from '@root/types/model';
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

export const itemRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ input }): Promise<ListRecord<Item>> => {
		const { search, sortBy, direction, color, relatedCategory, page, category, recipeType } = { ...input };

		const pageInt = page ?? 1;

		const OR: SQL[] = search ? [ilike(items.name, `%${search}%`), ilike(items.keyWords, `%${search}%`)] : [];

		const AND: SQL[] = [];

		if (relatedCategory) AND.push(ANYQuery(items.relatedCategories.name, relatedCategory));
		if (color) AND.push(eq(items.color, color));
		if (recipeType) AND.push(eq(items.recipeType, recipeType));
		if (category) AND.push(eq(items.category, category));

		const [totalRecord, records] = await db
			.select({ totalCount: CountQuery, record: items })
			.from(items)
			.where(or(...OR))
			.where(and(...AND))
			.orderBy(DirectionQueryMap[direction ?? 'asc'](items[!!sortBy && sortBy !== 'price' ? sortBy : 'index']))
			.limit(defaultLimit)
			.offset((pageInt - 1) * defaultLimit)
			.then(processDBListResult)
			.catch(onQueryDBError);

		return { records, page, totalRecord, totalPage: Math.ceil(totalRecord / defaultLimit) };
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ input }): Promise<Item> => {
		const { id } = input;

		if (!id) throw InvalidRecordIdError();

		const record = await db
			.select()
			.from(items)
			.where(eq(items.id, id))
			.then(([res]) => res)
			.catch(onQueryDBError);

		if (record) return record;

		throw RecordNotFoundError(id);
	}),
});
