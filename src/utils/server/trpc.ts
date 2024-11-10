import { env } from '@root/utils/common/env';
if (env.NEXT_PUBLIC_NODE_ENV !== 'script') void import('server-only');

import { defaultTRPCQueryOptions } from '@root/constants/common';
import { appRouter, createContext } from '@root/server/router';
import { createServerSideHelpers } from '@trpc/react-query/server';

export const getApiServerCtx = async () =>
	createServerSideHelpers({
		router: appRouter,
		ctx: await createContext(),
		queryClientConfig: { defaultOptions: defaultTRPCQueryOptions }
	});
