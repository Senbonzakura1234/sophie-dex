import { publicProcedure, router } from '@root/server/api/trpc';
import { getAllEffectIds } from '@root/server/database';
import { listRecordProvider } from '@root/server/database/repository/listRecord';
import { singleRecordProvider } from '@root/server/database/repository/singleRecord';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { onQueryDBError } from '@root/utils/server';

export const effectRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(({ input }) => listRecordProvider.getEffects(input)),

	getOne: publicProcedure.input(idQueryValidator).query(({ input }) => singleRecordProvider.getEffect(input)),

	getAllIds: publicProcedure.query(async () =>
		(await getAllEffectIds.execute().catch(onQueryDBError)).map(({ id }) => ({ id })),
	),
});
