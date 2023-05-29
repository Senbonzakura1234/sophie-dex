import { defaultLimit } from '@root/constants';
import { publicProcedure, router } from '@root/server/api/trpc';
import { db } from '@root/server/db';
import type { Trait } from '@root/server/db/schema';
import { traits } from '@root/server/db/schema';
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

export const traitRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ input }): Promise<ListRecord<Trait>> => {
		const { search, sortBy, direction, category, page } = { ...input };

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

		const [totalRecord, records] = await db
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
			.then(processDBListResult)
			.catch(onQueryDBError);

		return { records, page, totalRecord, totalPage: Math.ceil(totalRecord / defaultLimit) };
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ input }): Promise<Trait> => {
		const { id } = input;

		if (!id) throw InvalidRecordIdError();

		const record = await db
			.select()
			.from(traits)
			.where(eq(traits.id, id))
			.then(([res]) => res)
			.catch(onQueryDBError);

		if (record) return record;

		throw RecordNotFoundError(id);
	}),
});
