import { privateProcedure, router } from '@root/server/api/trpc';
import { bookmarkRecord, getAllBookmarks, getModuleBookmarks } from '@root/server/database/postgresql/repository';
import { bookmarkQueryValidator, moduleIdQueryValidator } from '@root/types/common/zod';

export const userRouter = router({
	getModuleBookmarks: privateProcedure.input(moduleIdQueryValidator).query(({ input }) => getModuleBookmarks(input)),
	getAllBookmarks: privateProcedure.query(getAllBookmarks),
	bookmark: privateProcedure.input(bookmarkQueryValidator).mutation(({ input }) => bookmarkRecord(input)),
});
