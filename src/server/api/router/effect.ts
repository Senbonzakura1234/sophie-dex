import { publicProcedure, router } from '@root/server/api/trpc';
import { exportEffects, getAllEffectIds } from '@root/server/database/postgresql';
import { getEffects } from '@root/server/database/postgresql/repository/listRecord';
import { getEffect } from '@root/server/database/postgresql/repository/singleRecord';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { onQueryDBError } from '@root/utils/server/database';

export const effectRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(({ input }) => getEffects(input)),

	getOne: publicProcedure.input(idQueryValidator).query(({ input }) => getEffect(input)),

	getAllIds: publicProcedure.query(async () =>
		(await getAllEffectIds.execute().catch(onQueryDBError)).map(({ id }) => ({ id })),
	),

	export: publicProcedure.query(() => exportEffects.execute().catch(onQueryDBError)),
});
