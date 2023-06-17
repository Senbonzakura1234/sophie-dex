import { defaultLimit, sortByMap } from '@root/constants';
import { publicProcedure, router } from '@root/server/api/trpc';
import { db } from '@root/server/db';
import type { Rumor } from '@root/server/db/schema';
import { rumors } from '@root/server/db/schema';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { ListRecord } from '@root/types/model';
import {
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

export const rumorRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ input }): Promise<ListRecord<Rumor>> => {
		const { search, sortBy, direction, page, rumorType } = input;

		const OR: SQL[] = search ? [ilike(rumors.name, `%${search}%`), ilike(rumors.keyWords, `%${search}%`)] : [];

		const AND: SQL[] = [];
		if (rumorType) AND.push(eq(rumors.rumorType, rumorType));

		const [totalRecord, records] = await db
			.select({ totalRecord: CountQuery, record: rumors })
			.from(rumors)
			.where(and(or(...OR), ...AND))
			.orderBy(getDirection(direction)(rumors[getSortField(sortByMap.rumor, 'price', sortBy)]))
			.limit(defaultLimit)
			.offset(((page ?? 1) - 1) * defaultLimit)
			.then(processDBListResult)
			.catch(onQueryDBError);

		return { records, page, totalRecord, totalPage: Math.ceil(totalRecord / defaultLimit) };
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ input: { id } }): Promise<Rumor> => {
		if (!id) throw InvalidRecordIdError();

		const recordResult = await db.select().from(rumors).where(eq(rumors.id, id)).catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw RecordNotFoundError(id);
	}),
});
