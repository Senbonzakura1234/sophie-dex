import { env } from '@root/utils/common/env';
if (env.NEXT_PUBLIC_NODE_ENV !== 'script') import('server-only');

import { defaultTRPCQueryOptions } from '@root/constants/common';
import { appRouter, createContext } from '@root/server/router';
import { createServerSideHelpers } from '@trpc/react-query/server';

export const getApiServerCtx = async (protectedRoute = false) =>
	createServerSideHelpers({
		router: appRouter,
		ctx: protectedRoute
			? await createContext()
			: { sessionResult: { isAuthenticated: false as const, session: null } },
		queryClientConfig: { defaultOptions: defaultTRPCQueryOptions }
	});
