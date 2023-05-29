import { defaultLimit } from '@root/constants';
import { publicProcedure, router } from '@root/server/api/trpc';
import { db } from '@root/server/db';
import type { Rumor } from '@root/server/db/schema';
import { rumors } from '@root/server/db/schema';
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
import { and, eq, ilike, or } from 'drizzle-orm';

export const rumorRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ input }): Promise<ListRecord<Rumor>> => {
		const { search, sortBy, direction, page, rumorType } = { ...input };

		const pageInt = page ?? 1;

		const OR: SQL[] = search ? [ilike(rumors.name, `%${search}%`), ilike(rumors.keyWords, `%${search}%`)] : [];

		const AND: SQL[] = [];

		if (rumorType) AND.push(eq(rumors.rumorType, rumorType));

		const [totalRecord, records] = await db
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
			.then(processDBListResult)
			.catch(onQueryDBError);

		return { records, page, totalRecord, totalPage: Math.ceil(totalRecord / defaultLimit) };
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ input }): Promise<Rumor> => {
		const { id } = input;

		if (!id) throw InvalidRecordIdError();

		const record = await db
			.select()
			.from(rumors)
			.where(eq(rumors.id, id))
			.then(([res]) => res)
			.catch(onQueryDBError);

		if (record) return record;

		throw RecordNotFoundError(id);
	}),
});
