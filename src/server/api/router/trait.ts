import { privateProcedure, router } from '@root/server/api/trpc';
import { exportTraitsQuery, getAllTraitIdsQuery, getTraitRecordQuery } from '@root/server/database/postgresql';
import { getTraits } from '@root/server/database/postgresql/repository';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { exportRecords, getAllRecordIds, getRecord } from '@root/utils/server/database';

export const traitRouter = router({
	getAll: privateProcedure.input(searchQueryValidator).query(({ input }) => getTraits(input)),

	getOne: privateProcedure.input(idQueryValidator).query(({ input }) => getRecord(getTraitRecordQuery, input)),

	getAllIds: privateProcedure.query(() => getAllRecordIds(getAllTraitIdsQuery)),

	export: privateProcedure.query(() => exportRecords(exportTraitsQuery)),
});
