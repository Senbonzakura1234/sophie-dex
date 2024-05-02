import { privateProcedure, router } from '@root/server/api/trpc';
import { exportTraitsQuery, getAllTraitIdsQuery, getTraitRecordQuery } from '@root/server/postgresql';
import { getTraits } from '@root/server/postgresql/repository';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { exportRecords, getAllRecordIds, getContentRecord } from '@root/utils/server/database';

export const traitRouter = router({
	getAll: privateProcedure.input(searchQueryValidator).query(({ input }) => getTraits(input)),

	getOne: privateProcedure.input(idQueryValidator).query(({ input }) => getContentRecord(getTraitRecordQuery, input)),

	getAllIds: privateProcedure.query(() => getAllRecordIds(getAllTraitIdsQuery)),

	export: privateProcedure.query(() => exportRecords(exportTraitsQuery)),
});
