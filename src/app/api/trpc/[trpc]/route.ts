import { appRouter } from '@root/server/api/router/_app';
import { LogProvider } from '@root/utils/common';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

export type AppRouter = typeof appRouter;

const handler = (req: Request) => {
	return fetchRequestHandler({
		endpoint: '/api/trpc',
		req,
		router: appRouter,
		createContext: () => ({}),
		onError: ({ path, error }) => LogProvider.write({ args: [`❌ tRPC failed on ${path}: ${error}`], type: 'error' }),
		responseMeta: () => ({
			status: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Request-Method': '*',
				'Access-Control-Allow-Methods': 'GET, OPTIONS',
				'Access-Control-Allow-Headers': 'Content-Type, Authorization',
			},
		}),
	});
};

export { handler as GET, handler as POST };
