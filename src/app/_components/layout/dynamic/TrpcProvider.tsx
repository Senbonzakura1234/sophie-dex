'use client';

import { defaultTRPCQueryOptions } from '@root/constants/common';
import type { ChildrenProps } from '@root/types/common/props';
import { ApiClientCtx } from '@root/utils/client/trpc';
import { getBaseUrl } from '@root/utils/common';
import { env } from '@root/utils/common/env';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { httpBatchLink, loggerLink } from '@trpc/client';
import { useState } from 'react';

export default function TrpcProvider({ children }: ChildrenProps) {
	const [queryClient] = useState(() => new QueryClient({ defaultOptions: defaultTRPCQueryOptions }));

	const [trpcClient] = useState(() =>
		ApiClientCtx.createClient({
			links: [
				httpBatchLink({ url: `${getBaseUrl()}/api/trpc` }),
				loggerLink({
					enabled: opts =>
						env.NEXT_PUBLIC_NODE_ENV === 'development' ||
						(opts.direction === 'down' && opts.result instanceof Error)
				})
			]
		})
	);

	return (
		<ApiClientCtx.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{children}
				<ReactQueryDevtools initialIsOpen={false} buttonPosition='top-left' position='left' />
			</QueryClientProvider>
		</ApiClientCtx.Provider>
	);
}
