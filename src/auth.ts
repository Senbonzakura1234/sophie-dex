import NextAuth from 'next-auth';

import { customPages } from '@root/constants/common';
import { insertOrUpdateUser } from '@root/server/postgresql';
import { APIError } from '@root/types/common';
import { githubUserInfoSchema } from '@root/types/common/zod';
import { env } from '@root/utils/common/env';
import GitHub from 'next-auth/providers/github';

export const provider = GitHub({
	clientId: env.NEXT_PUBLIC_NODE_ENV === 'production' ? env.GITHUB_PROD_APP_ID : env.GITHUB_APP_ID,
	clientSecret: env.NEXT_PUBLIC_NODE_ENV === 'production' ? env.GITHUB_PROD_APP_SECRET : env.GITHUB_APP_SECRET,

	profile: async (...args) => {
		const profileResult = githubUserInfoSchema.safeParse(args[0]);

		if (!profileResult.success)
			throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Get Github Profile Error' });

		const user = await insertOrUpdateUser({
			isUpdate: false,
			userData: {
				email: profileResult.data.email,
				username: profileResult.data.login,
				githubProfile: profileResult.data
			}
		});

		if (!user) throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Insert Profile Error' });

		return {
			id: user.githubProfile.id.toString(),
			email: user.email,
			image: user.githubProfile.avatar_url,
			name: user.username
		};
	}
});

export const providerConfig = { id: provider.id, name: provider.name };

export const { auth, handlers } = NextAuth({
	providers: [provider],
	pages: customPages
});
