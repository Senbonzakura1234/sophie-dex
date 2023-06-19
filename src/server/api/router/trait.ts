import { defaultLimit, sortByMap } from '@root/constants';
import { publicProcedure, router } from '@root/server/api/trpc';
import { db } from '@root/server/db';
import type { Trait } from '@root/server/db/schema';
import { traits } from '@root/server/db/schema';
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

export const traitRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ input }): Promise<ListRecord<Trait>> => {
		const { search, sortBy, direction, category, page } = input;

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
			.select({ totalRecord: CountQuery, record: traits })
			.from(traits)
			.where(and(or(...OR), ...AND))
			.orderBy(getDirection(direction)(traits[getSortField(sortByMap.trait, 'index', sortBy)]))
			.limit(defaultLimit)
			.offset(((page ?? 1) - 1) * defaultLimit)
			.then(res => processDBListResult(res, page))
			.catch(onQueryDBError);
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ input: { id } }): Promise<Trait> => {
		if (!id) throw InvalidRecordIdError();

		const recordResult = await db.select().from(traits).where(eq(traits.id, id)).catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw RecordNotFoundError(id);
	}),
});
