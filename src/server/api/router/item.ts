import { privateProcedure, router } from '@root/server/api/trpc';
import { exportItemsQuery, getAllItemIdsQuery, getItemRecordQuery } from '@root/server/database/postgresql';
import { getItems } from '@root/server/database/postgresql/repository';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { exportRecords, getAllRecordIds, getContentRecord } from '@root/utils/server/database';

export const itemRouter = router({
	getAll: privateProcedure.input(searchQueryValidator).query(({ input }) => getItems(input)),

	getOne: privateProcedure.input(idQueryValidator).query(({ input }) => getContentRecord(getItemRecordQuery, input)),

	getAllIds: privateProcedure.query(() => getAllRecordIds(getAllItemIdsQuery)),

	export: privateProcedure.query(() => exportRecords(exportItemsQuery)),
});
