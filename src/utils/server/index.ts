import { env } from '@root/utils/common/env';
if (env.NEXT_PUBLIC_NODE_ENV !== 'script') import('server-only');

import { auth } from '@root/auth';
import type { APIResult } from '@root/types/common';
import { APIError } from '@root/types/common';
import { tryCatchHandler } from '@root/utils/common';
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

export const getCookieData = async (name: string) => {
	const cookieData = cookies().get(name);

	return new Promise<RequestCookie | undefined>(resolve => setTimeout(() => resolve(cookieData)));
};

export const getSessionResult = async () => {
	const sessionRes = await tryCatchHandler(auth(), 'getSessionResult.getServerSession');

	if (!sessionRes.isSuccess)
		return {
			isSuccess: false as const,
			result: null,
			error: new APIError({ code: 'INTERNAL_SERVER_ERROR' })
		} satisfies Awaited<APIResult>;

	if (!sessionRes.data || !sessionRes.data.user?.name || !sessionRes.data.user?.email)
		return {
			isSuccess: false as const,
			result: null,
			error: new APIError({ code: 'UNAUTHORIZED' })
		} satisfies Awaited<APIResult>;

	return {
		result: {
			user: {
				email: sessionRes.data.user.email,
				image: sessionRes.data.user.image,
				name: sessionRes.data.user.name
			},
			expires: sessionRes.data.expires
		},
		isSuccess: true as const,
		error: null
	};
};
