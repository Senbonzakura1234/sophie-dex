import { procedure, router } from '@root/server/api/trpc';
import { exportItems, getAllItemIds } from '@root/server/database/postgresql';
import { getItems } from '@root/server/database/postgresql/repository/listRecord';
import { getItem } from '@root/server/database/postgresql/repository/singleRecord';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { onQueryDBError } from '@root/utils/server/database';

export const itemRouter = router({
	getAll: procedure.input(searchQueryValidator).query(({ input }) => getItems(input)),

	getOne: procedure.input(idQueryValidator).query(({ input }) => getItem(input)),

	getAllIds: procedure.query(async () =>
		(await getAllItemIds.execute().catch(onQueryDBError)).map(({ id }) => ({ id })),
	),

	export: procedure.query(() => exportItems.execute().catch(onQueryDBError)),
});
