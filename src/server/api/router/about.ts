import { publicProcedure, router } from '@root/server/api/trpc';
import { getGithubUserInfo, getLicense } from '@root/utils/server/fetch';

export const aboutRouter = router({
	license: publicProcedure.query(getLicense),
	profile: publicProcedure.query(getGithubUserInfo),
});
