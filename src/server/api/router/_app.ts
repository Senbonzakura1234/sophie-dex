import { publicProcedure, router } from '@root/server/api/trpc';
import { apiDoc } from '@root/server/database/postgresql/repository/apiDoc';

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
	apiDoc: publicProcedure.query(apiDoc),
});

export type AppRouter = typeof appRouter;
