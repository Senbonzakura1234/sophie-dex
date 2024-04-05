import { insertOrUpdateUser } from '@root/server/database/postgresql/repository';
import { APIError } from '@root/types/common';
import type { ProviderIdEnum } from '@root/types/common/zod';
import { githubUserInfoSchema } from '@root/types/common/zod';
import { providerIdList } from '@root/types/model';
import { env } from '@root/utils/common/env.mjs';
import type { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import type { OAuthConfig } from 'next-auth/providers';
import Atlassian from 'next-auth/providers/atlassian';
import Facebook from 'next-auth/providers/facebook';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Instagram from 'next-auth/providers/instagram';

const providerMapping = {
	atlassian: Atlassian({ clientId: '', clientSecret: '' }),
	facebook: Facebook({ clientId: '', clientSecret: '' }),
	github: Github({
		clientId: env.GITHUB_APP_ID,
		clientSecret: env.GITHUB_APP_SECRET,
		profile: async (...args) => {
			const profileResult = githubUserInfoSchema.safeParse(args[0]);

			if (!profileResult.success)
				throw new Error(
					JSON.stringify(new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Get Github Profile Error' })),
				);

			const user = await insertOrUpdateUser(
				{
					email: profileResult.data.email,
					username: profileResult.data.login,
					githubProfile: profileResult.data,
				},
				false,
			);

			if (!user)
				throw new Error(
					JSON.stringify(new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Insert Profile Error' })),
				);

			return {
				id: user.githubProfile.id.toString(),
				email: user.email,
				image: user.githubProfile.avatar_url,
				name: user.username,
			};
		},
	}),
	google: Google({ clientId: '', clientSecret: '' }),
	instagram: Instagram({ clientId: '', clientSecret: '' }),
} satisfies Record<ProviderIdEnum, OAuthConfig<never>>;

export const authOptions: AuthOptions = {
	providers: [...providerIdList]
		.sort(id => (env.NEXT_PUBLIC_ALLOW_AUTH_PROVIDER.includes(id) ? -1 : 1))
		.map(id => providerMapping[id]),
	callbacks: {
		session: ({ session }) => session,
	},
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
