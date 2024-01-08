import { procedure, router } from '@root/server/api/trpc';
import { exportEffects, getAllEffectIds } from '@root/server/database/postgresql';
import { getEffects } from '@root/server/database/postgresql/repository/listRecord';
import { getEffect } from '@root/server/database/postgresql/repository/singleRecord';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { onQueryDBError } from '@root/utils/server/database';

export const effectRouter = router({
	getAll: procedure.input(searchQueryValidator).query(({ input }) => getEffects(input)),

	getOne: procedure.input(idQueryValidator).query(({ input }) => getEffect(input)),

	getAllIds: procedure.query(async () =>
		(await getAllEffectIds.execute().catch(onQueryDBError)).map(({ id }) => ({ id })),
	),

	export: procedure.query(() => exportEffects.execute().catch(onQueryDBError)),
});
