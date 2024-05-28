import { env } from '@root/utils/common/env';
if (env.IS_NEXTJS_ENV === 'true') import('server-only');

import { defaultTRPCQueryOptions } from '@root/constants/common';
import { appRouter } from '@root/server/router';
import { createServerSideHelpers } from '@trpc/react-query/server';
import { getSessionResult } from '.';

export const getApiServerCtx = async () =>
	createServerSideHelpers({
		router: appRouter,
		ctx: { sessionResult: await getSessionResult() },
		queryClientConfig: { defaultOptions: defaultTRPCQueryOptions }
	});
