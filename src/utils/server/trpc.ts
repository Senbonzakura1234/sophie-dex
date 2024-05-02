import { defaultTRPCQueryOptions } from '@root/constants/common';
import { appRouter } from '@root/server/router';
import { createServerSideHelpers } from '@trpc/react-query/server';

export const ApiServerCtx = createServerSideHelpers({
	router: appRouter,
	ctx: {},
	queryClientConfig: { defaultOptions: defaultTRPCQueryOptions },
});
