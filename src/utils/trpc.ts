import { type AppRouter } from '@root/server/api/router/_app';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import { evnIs, getBaseUrl } from './common';

export const apiContext = createTRPCNext<AppRouter>({
	config() {
		return {
			links: [
				httpBatchLink({ url: `${getBaseUrl()}/api/trpc` }),
				loggerLink({
					enabled: opts => evnIs('development') || (opts.direction === 'down' && opts.result instanceof Error),
				}),
			],
			queryClientConfig: {
				defaultOptions: {
					queries: {
						refetchOnMount: false,
						refetchOnReconnect: evnIs('production'),
						refetchOnWindowFocus: false,
						retry: evnIs('production') ? 2 : 1,
					},
				},
			},
		};
	},
	ssr: false,
});
