import { publicProcedure, router } from '@root/server/api/trpc';
import { getExample } from '@root/server/database/repository/exampleRecord';

import { aboutRouter } from './about';
import { effectRouter } from './effect';
import { itemRouter } from './item';
import { rumorRouter } from './rumor';
import { traitRouter } from './trait';

export const appRouter = router({
	about: aboutRouter,
	effect: effectRouter,
	item: itemRouter,
	rumor: rumorRouter,
	trait: traitRouter,
	example: publicProcedure.query(getExample),
});

export type AppRouter = typeof appRouter;
