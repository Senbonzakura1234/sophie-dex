import { procedure, router } from '@root/server/api/trpc';
import { exportRumors, getAllRumorIds } from '@root/server/database/postgresql';
import { getRumors } from '@root/server/database/postgresql/repository/listRecord';
import { getRumor } from '@root/server/database/postgresql/repository/singleRecord';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { onQueryDBError } from '@root/utils/server/database';

export const rumorRouter = router({
	getAll: procedure.input(searchQueryValidator).query(({ input }) => getRumors(input)),

	getOne: procedure.input(idQueryValidator).query(({ input }) => getRumor(input)),

	getAllIds: procedure.query(async () =>
		(await getAllRumorIds.execute().catch(onQueryDBError)).map(({ id }) => ({ id })),
	),

	export: procedure.query(() => exportRumors.execute().catch(onQueryDBError)),
});
