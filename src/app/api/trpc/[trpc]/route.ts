import { appRouter } from '@root/server/api/router/_app';
import { LogProvider } from '@root/utils/common';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import type { ServerRuntime } from 'next';

export const runtime: ServerRuntime = 'edge';

export type AppRouter = typeof appRouter;

const handler = (req: Request) =>
	fetchRequestHandler({
		endpoint: '/api/trpc',
		req,
		router: appRouter,
		createContext: () => ({}),
		onError: ({ path, error }) => LogProvider.write({ args: [`❌ tRPC failed on ${path}: ${error}`], type: 'error' }),
	});

export { handler as GET, handler as POST };
