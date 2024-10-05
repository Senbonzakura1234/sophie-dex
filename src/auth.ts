import NextAuth from 'next-auth';

import { customPages } from '@root/constants/common';
import { insertOrUpdateUser } from '@root/server/postgresql';
import { APIError } from '@root/types/common';
import { githubUserInfoSchema } from '@root/types/common/zod';
import { env } from '@root/utils/common/env';
import { trackEventServer } from '@root/utils/server';
import GitHub from 'next-auth/providers/github';

export const provider = GitHub({
	clientId: env.APP_GITHUB_APP_ID,
	clientSecret: env.APP_GITHUB_APP_SECRET,

	profile: async (...args) => {
		const featureFlag = 'server.authentication';

		await trackEventServer(
			[featureFlag, true],
			[`${featureFlag}.githubLogin`, { username: args[0].login || null }, { flags: [featureFlag] }]
		);

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
