import NextAuth from 'next-auth';

import { customPages } from '@root/constants/common';
import { insertOrUpdateUser } from '@root/server/postgresql';
import { APIError } from '@root/types/common';
import { githubUserInfoSchema } from '@root/types/common/zod';
import type { ProviderIdEnum } from '@root/types/common/zod/generic';
import { genericProviderIdEnumValidator } from '@root/types/common/zod/generic';
import { env } from '@root/utils/common/env';
import Apple from 'next-auth/providers/apple';
import Facebook from 'next-auth/providers/facebook';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import type { Provider } from 'next-auth/providers/index';
import Instagram from 'next-auth/providers/instagram';

const providerMapping = {
	apple: Apple,
	facebook: Facebook,
	github: GitHub({
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
	}),
	google: Google,
	instagram: Instagram
} satisfies Record<ProviderIdEnum, Provider>;

const providers: Array<Provider> = genericProviderIdEnumValidator._def.values
	.sort(id => (env.NEXT_PUBLIC_ALLOW_AUTH_PROVIDER.includes(id) ? -1 : 1))
	.map(id => providerMapping[id]);

export const providersData = providers.map(provider => {
	if (typeof provider === 'function') {
		const providerData = provider();

		return { id: providerData.id, name: providerData.name };
	} else {
		return { id: provider.id, name: provider.name };
	}
});

export const { auth, handlers, signIn } = NextAuth({
	providers,
	callbacks: { session: ({ session }) => session },
	pages: customPages
});
