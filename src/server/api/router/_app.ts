import { router } from '../trpc';
import { effectRouter } from './effect';
import { itemRouter } from './item';
import { traitRouter } from './trait';

export const appRouter = router({ effect: effectRouter, item: itemRouter, trait: traitRouter });

// export type definition of API
export type AppRouter = typeof appRouter;
