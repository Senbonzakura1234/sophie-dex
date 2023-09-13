import { appRouter } from '@root/server/api/router/_app';
import { LogProvider } from '@root/utils/common';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = (req: Request) => {
	return fetchRequestHandler({
		endpoint: '/api/trpc',
		req,
		router: appRouter,
		createContext: () => ({}),
		onError: ({ path, error }) => LogProvider.write({ args: [`❌ tRPC failed on ${path}: ${error}`], type: 'error' }),
	});
};

export { handler as GET, handler as POST };
