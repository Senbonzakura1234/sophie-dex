import { router } from '@root/server/api/trpc';

import { effectRouter } from './effect';
import { itemRouter } from './item';
import { rumorRouter } from './rumor';
import { traitRouter } from './trait';
import { userRouter } from './user';

export const appRouter = router({
	effect: effectRouter,
	item: itemRouter,
	rumor: rumorRouter,
	trait: traitRouter,
	user: userRouter,
});

export type AppRouter = typeof appRouter;
