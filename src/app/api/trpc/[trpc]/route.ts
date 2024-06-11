import { appRouter, createContext } from '@root/server/router';
import { writeLog } from '@root/utils/common';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import type { NextRequest } from 'next/server';

const handler = (req: NextRequest) =>
	fetchRequestHandler({
		endpoint: '/api/trpc',
		req,
		router: appRouter,
		createContext: async (...args) => {
			console.log(args);

			return await createContext();
		},
		onError: ({ path, error }) =>
			writeLog({
				args: [`❌ tRPC failed on ${path}:`, JSON.stringify(error, null, 2)],
				type: 'error',
				hideInProd: true
			})
	});

export { handler as GET, handler as POST };
