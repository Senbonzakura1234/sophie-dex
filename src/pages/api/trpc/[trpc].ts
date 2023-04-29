import { createContext } from '@root/server/api/context';
import { appRouter } from '@root/server/api/router/_app';
import { env } from '@root/utils/env.mjs';
import { createNextApiHandler } from '@trpc/server/adapters/next';

// export API handler
export default createNextApiHandler({
	router: appRouter,
	createContext,
	onError:
		env.NEXT_PUBLIC_NODE_ENV === 'development'
			? ({ path, error }) => console.error(`❌ tRPC failed on ${path}: ${error}`)
			: undefined,
});
