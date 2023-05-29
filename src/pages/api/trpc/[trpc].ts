import { appRouter } from '@root/server/api/router/_app';
import { evnIs } from '@root/utils/common';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import type { NextRequest } from 'next/server';

export const config = {
	runtime: 'edge',
};

// export API handler
export default async function handler(req: NextRequest) {
	return fetchRequestHandler({
		endpoint: '/api/trpc',
		router: appRouter,
		req,
		createContext: () => ({}),
		onError: evnIs('development')
			? ({ path, error }) => console.error(`❌ tRPC failed on ${path}: ${error}`)
			: undefined,
	});
}
