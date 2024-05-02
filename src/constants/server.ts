import 'server-only';

import { insertOrUpdateUser } from '@root/server/database/postgresql/repository';
import { APIError } from '@root/types/common';
import type { ProviderIdEnum } from '@root/types/common/zod';
import { githubUserInfoSchema } from '@root/types/common/zod';
import { evnIs } from '@root/utils/common';
import { env } from '@root/utils/common/env';
import Atlassian from 'next-auth/providers/atlassian';
import Facebook from 'next-auth/providers/facebook';
import Github from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import type { OAuthConfig } from 'next-auth/providers/index';
import Instagram from 'next-auth/providers/instagram';
import type { NextResponse } from 'next/server';

export const publicResponseConfig: Parameters<typeof NextResponse.json>[1] = {
	status: 200,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type, Authorization',
	},
};

export const providerMapping = {
	atlassian: Atlassian({ clientId: '', clientSecret: '' }),
	facebook: Facebook({ clientId: '', clientSecret: '' }),
	github: Github({
		clientId: evnIs('production') ? env.GITHUB_PROD_APP_ID : env.GITHUB_APP_ID,
		clientSecret: evnIs('production') ? env.GITHUB_PROD_APP_SECRET : env.GITHUB_APP_SECRET,
		profile: async (...args) => {
			const profileResult = githubUserInfoSchema.safeParse(args[0]);

			if (!profileResult.success)
				throw new Error(
					JSON.stringify(new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Get Github Profile Error' })),
				);

			const user = await insertOrUpdateUser({
				isUpdate: false,
				userData: {
					email: profileResult.data.email,
					username: profileResult.data.login,
					githubProfile: profileResult.data,
				},
			});

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
