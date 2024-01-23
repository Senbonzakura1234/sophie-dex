'use client';

import { defaultTRPCQueryOptions } from '@root/constants/common';
import type { ChildrenProps } from '@root/types/common/props';
import { ApiClientCtx } from '@root/utils/client/trpc';
import { evnIs, getBaseUrl } from '@root/utils/common';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { useState } from 'react';

type TrpcProviderProps = ChildrenProps;

export default function TrpcProvider({ children }: TrpcProviderProps) {
	const [queryClient] = useState(() => new QueryClient({ defaultOptions: defaultTRPCQueryOptions }));

	const [trpcClient] = useState(() =>
		ApiClientCtx.createClient({
			links: [
				httpBatchLink({ url: `${getBaseUrl()}/api/trpc` }),
				loggerLink({
					enabled: opts => evnIs('development') || (opts.direction === 'down' && opts.result instanceof Error),
				}),
			],
		}),
	);

	return (
		<ApiClientCtx.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{children}
				<ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-left' position='left' />
			</QueryClientProvider>
		</ApiClientCtx.Provider>
	);
}
