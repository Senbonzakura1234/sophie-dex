import { publicProcedure, router } from '@root/server/api/trpc';
import { exportItems, getAllItemIds } from '@root/server/database';
import { getItems } from '@root/server/database/repository/listRecord';
import { getItem } from '@root/server/database/repository/singleRecord';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { onQueryDBError } from '@root/utils/server';

export const itemRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(({ input }) => getItems(input)),

	getOne: publicProcedure.input(idQueryValidator).query(({ input }) => getItem(input)),

	getAllIds: publicProcedure.query(async () =>
		(await getAllItemIds.execute().catch(onQueryDBError)).map(({ id }) => ({ id })),
	),

	export: publicProcedure.query(() => exportItems.execute().catch(onQueryDBError)),
});
