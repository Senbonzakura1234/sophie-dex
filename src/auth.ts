import NextAuth from 'next-auth';

import { customPages } from '@root/constants/common';
import { insertOrUpdateProfile } from '@root/server/postgresql';
import { authAdapter } from '@root/server/postgresql/authAdapter';
import { insertProfileValidationSchema } from '@root/server/postgresql/schema';
import { APIError } from '@root/types/common';
import { tryCatchHandler } from '@root/utils/common';
import { env } from '@root/utils/common/env';
import GitHub from 'next-auth/providers/github';

export const provider = GitHub({
	clientId: env.APP_GITHUB_APP_ID,
	clientSecret: env.APP_GITHUB_APP_SECRET,

	profile: async ({ id, plan: _, ...profile }, _tokens) => {
		const profileParseRes = insertProfileValidationSchema.safeParse({ profile_id: id, ...profile });

		if (!profileParseRes.success) throw new APIError({ code: 'BAD_REQUEST', message: 'Profile Input Invalid' });

		const insertOrUpdateProfileRes = await tryCatchHandler(insertOrUpdateProfile(profileParseRes.data, false), {
			operationCode: 'profile.insertOrUpdateProfileRes'
		});

		if (!insertOrUpdateProfileRes.isSuccess)
			throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Create or Update Profile Error' });

		return { id: id.toString(), email: profile.email, image: profile.avatar_url, name: profile.login };
	}
});

export const providerConfig = { id: provider.id, name: provider.name };

export const { auth, handlers } = NextAuth({
	adapter: authAdapter,
	providers: [provider],
	pages: customPages
});
