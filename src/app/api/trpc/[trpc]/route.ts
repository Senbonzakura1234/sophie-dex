import { appRouter } from '@root/server/router';
import { writeLog } from '@root/utils/common';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = (req: Request) =>
	fetchRequestHandler({
		endpoint: '/api/trpc',
		req,
		router: appRouter,
		createContext: () => ({}),
		onError: ({ path, error }) => writeLog({ args: [`❌ tRPC failed on ${path}: ${error}`], type: 'error' }),
	});

export { handler as GET, handler as POST };
