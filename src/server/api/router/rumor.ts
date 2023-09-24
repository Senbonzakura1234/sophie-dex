import { publicProcedure, router } from '@root/server/api/trpc';
import { exportRumors, getAllRumorIds } from '@root/server/database';
import { listRecordProvider } from '@root/server/database/repository/listRecord';
import { singleRecordProvider } from '@root/server/database/repository/singleRecord';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { onQueryDBError } from '@root/utils/server';

export const rumorRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(({ input }) => listRecordProvider.getRumors(input)),

	getOne: publicProcedure.input(idQueryValidator).query(({ input }) => singleRecordProvider.getRumor(input)),

	getAllIds: publicProcedure.query(async () =>
		(await getAllRumorIds.execute().catch(onQueryDBError)).map(({ id }) => ({ id })),
	),

	export: publicProcedure.query(() => exportRumors.execute().catch(onQueryDBError)),
});
