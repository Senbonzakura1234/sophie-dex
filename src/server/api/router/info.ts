import { procedure, router } from '@root/server/api/trpc';
import { getGithubUserInfo, getLicense, getVersion } from '@root/utils/server/fetch';
import type { ServerRuntime } from 'next';

export const runtime: ServerRuntime = 'edge';

export const infoRouter = router({
	license: procedure.query(getLicense),
	profile: procedure.query(getGithubUserInfo),
	version: procedure.query(getVersion),
});
