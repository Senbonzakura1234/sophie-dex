import { defaultLimit, sortByMap } from '@root/constants';
import { publicProcedure, router } from '@root/server/api/trpc';
import { db, getEffectRecord, getListEffectDefault } from '@root/server/db';
import type { Effect } from '@root/server/db/schema';
import { effects } from '@root/server/db/schema';
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
import { ilike, or } from 'drizzle-orm';

export const effectRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ input }): Promise<ListRecord<Effect>> => {
		const { search, sortBy, direction, page } = input;

		if (!search && !sortBy && !direction)
			return await getListEffectDefault
				.execute({ offset: ((page ?? 1) - 1) * defaultLimit })
				.then(res => processDBListResult(res))
				.catch(onQueryDBError);

		return await db
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
			.orderBy(getDirection(direction)(effects[getSortField(sortByMap.effect, 'index', sortBy)]))
			.limit(defaultLimit)
			.offset(((page ?? 1) - 1) * defaultLimit)
			.then(res => processDBListResult(res))
			.catch(onQueryDBError);
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ input: { id } }): Promise<Effect> => {
		if (!id) throw InvalidRecordIdError();

		const recordResult = await getEffectRecord.execute({ id }).catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw RecordNotFoundError(id);
	}),
});
