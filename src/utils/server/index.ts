import 'server-only';

import type { APIResult } from '@root/types/common';
import { APIError } from '@root/types/common';
import { getServerSession } from 'next-auth';
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { tryCatchHandler } from '../common';

export const getIpAddress = (headers: NextRequest['headers']) =>
	(headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0] || 'anonymous';

export const getCookieData = async (name: string) => {
	const cookieData = cookies().get(name);

	return new Promise<RequestCookie | undefined>(resolve => setTimeout(() => resolve(cookieData), 0));
};

export const getSessionUser = async () => {
	const sessionRes = await tryCatchHandler(getServerSession());

	if (!sessionRes.isSuccess)
		return {
			isSuccess: false as const,
			result: null,
			error: new APIError({ code: 'INTERNAL_SERVER_ERROR' }),
		} satisfies APIResult;

	if (!sessionRes.data || !sessionRes.data.user?.name || !sessionRes.data.user?.email)
		return {
			isSuccess: false as const,
			result: null,
			error: new APIError({ code: 'UNAUTHORIZED' }),
		} satisfies APIResult;

	return {
		result: {
			email: sessionRes.data.user.email,
			image: sessionRes.data.user.image,
			name: sessionRes.data.user.name,
		},
		isSuccess: true as const,
		error: null,
	};
};
