'use client';

import type { ChildrenProps } from '@root/types/common/props';
import { ApiContext } from '@root/utils/client/trpc';
import { evnIs, getBaseUrl } from '@root/utils/common';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { useState } from 'react';

type TrpcProviderProps = ChildrenProps;

export default function TrpcProvider({ children }: TrpcProviderProps) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnMount: false,
						refetchOnReconnect: evnIs('production'),
						refetchOnWindowFocus: false,
						retry: evnIs('production') ? 2 : 1,
					},
				},
			}),
	);

	const [trpcClient] = useState(() =>
		ApiContext.createClient({
			links: [
				httpBatchLink({ url: `${getBaseUrl()}/api/trpc` }),
				loggerLink({
					enabled: opts => evnIs('development') || (opts.direction === 'down' && opts.result instanceof Error),
				}),
			],
		}),
	);

	return (
		<ApiContext.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</ApiContext.Provider>
	);
}
