import { insertOrUpdateUser } from '@root/server/database/postgresql/repository';
import { APIError } from '@root/types/common';
import { githubUserInfoSchema } from '@root/types/common/zod';
import { env } from '@root/utils/common/env.mjs';
import type { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
	providers: [
		Github({
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
	],
	callbacks: {
		session: ({ session, user }) => {
			console.log({ user });

			return session;
		},
	},
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
