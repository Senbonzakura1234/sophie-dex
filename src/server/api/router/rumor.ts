import { privateProcedure, router } from '@root/server/api/trpc';
import { exportRumorsQuery, getAllRumorIdsQuery, getRumorRecordQuery } from '@root/server/database/postgresql';
import { getRumors } from '@root/server/database/postgresql/repository';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { exportRecords, getAllRecordIds, getRecord } from '@root/utils/server/database';

export const rumorRouter = router({
	getAll: privateProcedure.input(searchQueryValidator).query(({ input }) => getRumors(input)),

	getOne: privateProcedure.input(idQueryValidator).query(({ input }) => getRecord(getRumorRecordQuery, input)),

	getAllIds: privateProcedure.query(() => getAllRecordIds(getAllRumorIdsQuery)),

	export: privateProcedure.query(() => exportRecords(exportRumorsQuery)),
});
