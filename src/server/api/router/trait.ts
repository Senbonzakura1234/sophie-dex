import { publicProcedure, router } from '@root/server/api/trpc';
import { exportTraits, getAllTraitIds } from '@root/server/database';
import { getTraits } from '@root/server/database/repository/listRecord';
import { getTrait } from '@root/server/database/repository/singleRecord';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { onQueryDBError } from '@root/utils/server/database';

export const traitRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(({ input }) => getTraits(input)),

	getOne: publicProcedure.input(idQueryValidator).query(({ input }) => getTrait(input)),

	getAllIds: publicProcedure.query(async () =>
		(await getAllTraitIds.execute().catch(onQueryDBError)).map(({ id }) => ({ id })),
	),

	export: publicProcedure.query(() => exportTraits.execute().catch(onQueryDBError)),
});
