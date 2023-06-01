import { type AppRouter } from '@root/server/api/router/_app';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import superjson from 'superjson';
import { getBaseUrl } from './client';
import { evnIs } from './common';

export const apiContext = createTRPCNext<AppRouter>({
	config() {
		return {
			transformer: superjson,
			links: [
				loggerLink({
					enabled: opts => evnIs('development') || (opts.direction === 'down' && opts.result instanceof Error),
				}),
				httpBatchLink({ url: `${getBaseUrl()}/api/trpc` }),
			],
		};
	},
	ssr: true,
});
