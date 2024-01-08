import { router } from '@root/server/api/trpc';

import { effectRouter } from './effect';
import { infoRouter } from './info';
import { itemRouter } from './item';
import { rumorRouter } from './rumor';
import { traitRouter } from './trait';

export const appRouter = router({
	info: infoRouter,
	effect: effectRouter,
	item: itemRouter,
	rumor: rumorRouter,
	trait: traitRouter,
});

export type AppRouter = typeof appRouter;
