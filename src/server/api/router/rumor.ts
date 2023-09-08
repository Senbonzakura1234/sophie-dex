import { publicProcedure, router } from '@root/server/api/trpc';
import { listRecordProvider } from '@root/server/database/repository/listRecord';
import { singleRecordProvider } from '@root/server/database/repository/singleRecord';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';

export const rumorRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(({ input }) => listRecordProvider.getRumors(input)),

	getOne: publicProcedure.input(idQueryValidator).query(({ input }) => singleRecordProvider.getRumor(input)),
});
