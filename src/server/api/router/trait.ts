import { publicProcedure, router } from '@root/server/api/trpc';
import { getAllTraitIds } from '@root/server/database';
import { exampleRecordProvider } from '@root/server/database/repository/exampleRecord';
import { listRecordProvider } from '@root/server/database/repository/listRecord';
import { singleRecordProvider } from '@root/server/database/repository/singleRecord';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { onQueryDBError } from '@root/utils/server';

export const traitRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(({ input }) => listRecordProvider.getTraits(input)),

	getOne: publicProcedure.input(idQueryValidator).query(({ input }) => singleRecordProvider.getTrait(input)),

	getAllIds: publicProcedure.query(async () =>
		(await getAllTraitIds.execute().catch(onQueryDBError)).map(({ id }) => ({ id })),
	),

	getOneExample: publicProcedure.query(exampleRecordProvider.getTrait),
});
