import { privateProcedure, router } from '@root/server/api/trpc';
import { exportRumorsQuery, getAllRumorIdsQuery, getRumorRecordQuery } from '@root/server/postgresql';
import { getRumors } from '@root/server/postgresql/repository';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { exportRecords, getAllRecordIds, getContentRecord } from '@root/utils/server/database';

export const rumorRouter = router({
	getAll: privateProcedure.input(searchQueryValidator).query(({ input }) => getRumors(input)),

	getOne: privateProcedure.input(idQueryValidator).query(({ input }) => getContentRecord(getRumorRecordQuery, input)),

	getAllIds: privateProcedure.query(() => getAllRecordIds(getAllRumorIdsQuery)),

	export: privateProcedure.query(() => exportRecords(exportRumorsQuery)),
});
