import { defaultLimit, sortByMap } from '@root/constants';
import { publicProcedure, router } from '@root/server/api/trpc';
import { db, getItemRecord, getListItemDefault } from '@root/server/db';
import type { Item } from '@root/server/db/schema';
import { items } from '@root/server/db/schema';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { ListRecord } from '@root/types/model';
import {
	ANYQuery,
	CountQuery,
	InvalidRecordIdError,
	RecordNotFoundError,
	getDirection,
	getSortField,
	onQueryDBError,
	processDBListResult,
} from '@root/utils/server';
import type { SQL } from 'drizzle-orm';
import { and, eq, ilike, or } from 'drizzle-orm';

export const itemRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ input }): Promise<ListRecord<Item>> => {
		const { search, sortBy, direction, color, relatedCategory, page, category, recipeType } = input;

		const OR: Array<SQL> = search ? [ilike(items.name, `%${search}%`), ilike(items.keyWords, `%${search}%`)] : [];

		const AND: Array<SQL> = [];
		if (relatedCategory) AND.push(ANYQuery(items.relatedCategories.name, relatedCategory));
		if (color) AND.push(eq(items.color, color));
		if (recipeType) AND.push(eq(items.recipeType, recipeType));
		if (category) AND.push(eq(items.category, category));

		if (OR.length === 0 && AND.length === 0 && !sortBy && !direction)
			return await getListItemDefault
				.execute({ offset: ((page ?? 1) - 1) * defaultLimit })
				.then(res => processDBListResult(res))
				.catch(onQueryDBError);

		return await db
			.select({ totalRecord: CountQuery, record: items })
			.from(items)
			.where(and(or(...OR), ...AND))
			.orderBy(getDirection(direction)(items[getSortField(sortByMap.item, 'index', sortBy)]))
			.limit(defaultLimit)
			.offset(((page ?? 1) - 1) * defaultLimit)
			.then(res => processDBListResult(res))
			.catch(onQueryDBError);
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ input: { id } }): Promise<Item> => {
		if (!id) throw InvalidRecordIdError();

		const recordResult = await getItemRecord.execute({ id }).catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw RecordNotFoundError(id);
	}),
});
