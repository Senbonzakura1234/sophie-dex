import { appRouter } from '@root/server/api/router/_app';
import { LogProvider } from '@root/utils/common';
import { createNextApiHandler } from '@trpc/server/adapters/next';

export type AppRouter = typeof appRouter;

export default createNextApiHandler({
	router: appRouter,
	createContext: () => ({}),
	onError: ({ path, error }) => LogProvider.write({ args: [`❌ tRPC failed on ${path}: ${error}`], type: 'error' }),
});
