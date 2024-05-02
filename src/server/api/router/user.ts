import { privateProcedure, router } from '@root/server/api/trpc';
import { bookmarkRecord, getModuleBookmarks } from '@root/server/postgresql/repository';
import { bookmarkQueryValidator, moduleIdQueryValidator } from '@root/types/common/zod';

export const userRouter = router({
	getModuleBookmarks: privateProcedure.input(moduleIdQueryValidator).query(({ input }) => getModuleBookmarks(input)),
	bookmark: privateProcedure.input(bookmarkQueryValidator).mutation(({ input }) => bookmarkRecord(input)),
});
