import { appRouter } from '@root/server/api/router/_app';
import { evnIs } from '@root/utils/common';
import { createNextApiHandler } from '@trpc/server/adapters/next';

export type AppRouter = typeof appRouter;

export default createNextApiHandler({
	router: appRouter,
	createContext: () => ({}),
	onError: evnIs('development')
		? ({ path, error }) => console.error(`❌ tRPC failed on ${path}: ${error}`)
		: undefined,
});
