import { publicProcedure, router } from '@root/server/api/trpc';

import { exampleRecordProvider } from '@root/server/database/repository/exampleRecord';
import { effectRouter } from './effect';
import { itemRouter } from './item';
import { rumorRouter } from './rumor';
import { traitRouter } from './trait';

export const appRouter = router({
	effect: effectRouter,
	item: itemRouter,
	rumor: rumorRouter,
	trait: traitRouter,
	example: publicProcedure.query(exampleRecordProvider.getExample),
});

export type AppRouter = typeof appRouter;
