import { privateProcedure, router } from '@root/server/api/trpc';
import { exportEffectsQuery, getAllEffectIdsQuery, getEffectRecordQuery } from '@root/server/database/postgresql';
import { getEffects } from '@root/server/database/postgresql/repository';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { exportRecords, getAllRecordIds, getContentRecord } from '@root/utils/server/database';

export const effectRouter = router({
	getAll: privateProcedure.input(searchQueryValidator).query(({ input }) => getEffects(input)),

	getOne: privateProcedure.input(idQueryValidator).query(({ input }) => getContentRecord(getEffectRecordQuery, input)),

	getAllIds: privateProcedure.query(() => getAllRecordIds(getAllEffectIdsQuery)),

	export: privateProcedure.query(() => exportRecords(exportEffectsQuery)),
});
