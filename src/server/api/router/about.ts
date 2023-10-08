import { publicProcedure, router } from '@root/server/api/trpc';
import { getGithubUserInfo, getLicense } from '@root/utils/server/fetch';
import type { ServerRuntime } from 'next';

export const runtime: ServerRuntime = 'edge';

export const aboutRouter = router({
	license: publicProcedure.query(getLicense),
	profile: publicProcedure.query(getGithubUserInfo),
});
