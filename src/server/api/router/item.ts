import { publicProcedure, router } from '@root/server/api/trpc';
import { getAllItemIds } from '@root/server/database';
import { listRecordProvider } from '@root/server/database/repository/listRecord';
import { singleRecordProvider } from '@root/server/database/repository/singleRecord';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { onQueryDBError } from '@root/utils/server';

export const itemRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(({ input }) => listRecordProvider.getItems(input)),

	getOne: publicProcedure.input(idQueryValidator).query(({ input }) => singleRecordProvider.getItem(input)),

	getAllIds: publicProcedure.query(async () =>
		(await getAllItemIds.execute().catch(onQueryDBError)).map(({ id }) => ({ id })),
	),
});
