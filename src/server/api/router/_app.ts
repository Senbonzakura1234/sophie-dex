import { router } from '@root/server/api/trpc';

import { effectRouter } from './effect';
import { itemRouter } from './item';
import { rumorRouter } from './rumor';
import { testRouter } from './test';
import { traitRouter } from './trait';

export const appRouter = router({
	effect: effectRouter,
	item: itemRouter,
	trait: traitRouter,
	rumor: rumorRouter,
	test: testRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
