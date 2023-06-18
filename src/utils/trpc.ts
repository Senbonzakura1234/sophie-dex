import { type AppRouter } from '@root/server/api/router/_app';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { evnIs, getBaseUrl } from './common';

export const apiContext = createTRPCNext<AppRouter>({
	config() {
		return {
			queryClientConfig: {
				defaultOptions: {
					queries: {
						retry: evnIs('production') ? 2 : 1,
						refetchOnWindowFocus: evnIs('production'),
						refetchOnReconnect: evnIs('production'),
					},
				},
			},
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
