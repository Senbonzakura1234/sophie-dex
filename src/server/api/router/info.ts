import { privateProcedure, router } from '@root/server/api/trpc';
import { getGithubUserInfo, getLicense, getVersion } from '@root/utils/server/fetch';
import type { ServerRuntime } from 'next';

export const runtime: ServerRuntime = 'edge';

export const infoRouter = router({
	license: privateProcedure.query(getLicense),
	profile: privateProcedure.query(getGithubUserInfo),
	version: privateProcedure.query(getVersion),
});
