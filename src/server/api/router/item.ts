import { publicProcedure, router } from '@root/server/api/trpc';
import { exportItems, getAllItemIds } from '@root/server/database/postgresql';
import { getItems } from '@root/server/database/postgresql/repository/listRecord';
import { getItem } from '@root/server/database/postgresql/repository/singleRecord';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { onQueryDBError } from '@root/utils/server/database';

export const itemRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(({ input }) => getItems(input)),

	getOne: publicProcedure.input(idQueryValidator).query(({ input }) => getItem(input)),

	getAllIds: publicProcedure.query(async () =>
		(await getAllItemIds.execute().catch(onQueryDBError)).map(({ id }) => ({ id })),
	),

	export: publicProcedure.query(() => exportItems.execute().catch(onQueryDBError)),
});
