import { defaultLimit } from '@root/constants';
import { publicProcedure, router } from '@root/server/api/trpc';
import type { Effect } from '@root/server/db/schema';
import { effects } from '@root/server/db/schema';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { ListRecord } from '@root/types/model';
import {
	CountQuery,
	DirectionQueryMap,
	InvalidRecordIdError,
	RecordNotFoundError,
	onQueryDBError,
	processDBListResult,
} from '@root/utils/server';
import type { SQL } from 'drizzle-orm';
import { eq, ilike, or } from 'drizzle-orm';

export const effectRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }): Promise<ListRecord<Effect>> => {
		const { search, sortBy, direction, page } = { ...input };

		const pageInt = page ?? 1;

		const OR: SQL[] = search
			? [
					ilike(effects.name, `%${search}%`),
					ilike(effects.description, `%${search}%`),
					ilike(effects.keyWords, `%${search}%`),
			  ]
			: [];

		const [totalRecord, records] = await ctx.db
			.select({ totalCount: CountQuery, record: effects })
			.from(effects)
			.where(or(...OR))
			.orderBy(
				DirectionQueryMap[direction ?? 'asc'](
					effects[!!sortBy && sortBy !== 'price' && sortBy !== 'level' ? sortBy : 'index'],
				),
			)
			.limit(defaultLimit)
			.offset((pageInt - 1) * defaultLimit)
			.then(processDBListResult)
			.catch(onQueryDBError);

		return { records, page, totalRecord, totalPage: Math.ceil(totalRecord / defaultLimit) };
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ ctx, input }): Promise<Effect> => {
		const { id } = input;

		if (!id) throw InvalidRecordIdError();

		const record = await ctx.db
			.select()
			.from(effects)
			.where(eq(effects.id, id))
			.then(([res]) => res)
			.catch(onQueryDBError);

		if (record) return record;

		throw RecordNotFoundError(id);
	}),
});
