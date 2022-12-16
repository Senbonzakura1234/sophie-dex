import { env } from '@root/env/server.mjs';
import { createContext } from '@root/server/trpc/context';
import { appRouter } from '@root/server/trpc/router/_app';
import { createNextApiHandler } from '@trpc/server/adapters/next';

// export API handler
export default createNextApiHandler({
	router: appRouter,
	createContext,
	onError:
		env.NODE_ENV === 'development'
			? ({ path, error }) => console.error(`❌ tRPC failed on ${path}: ${error}`)
			: undefined,
});
