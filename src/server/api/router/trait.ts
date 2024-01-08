import { procedure, router } from '@root/server/api/trpc';
import { exportTraits, getAllTraitIds } from '@root/server/database/postgresql';
import { getTraits } from '@root/server/database/postgresql/repository/listRecord';
import { getTrait } from '@root/server/database/postgresql/repository/singleRecord';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { onQueryDBError } from '@root/utils/server/database';

export const traitRouter = router({
	getAll: procedure.input(searchQueryValidator).query(({ input }) => getTraits(input)),

	getOne: procedure.input(idQueryValidator).query(({ input }) => getTrait(input)),

	getAllIds: procedure.query(async () =>
		(await getAllTraitIds.execute().catch(onQueryDBError)).map(({ id }) => ({ id })),
	),

	export: procedure.query(() => exportTraits.execute().catch(onQueryDBError)),
});
