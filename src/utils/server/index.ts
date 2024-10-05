import { env } from '@root/utils/common/env';
if (env.NEXT_PUBLIC_NODE_ENV !== 'script') void import('server-only');

import { auth } from '@root/auth';
import { track } from '@vercel/analytics/server';
import { reportValue } from '@vercel/flags';
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';
import { tryCatchHandler, tryCatchHandlerSync } from '../common';

export const getCookieData = async (name: string) => {
	const cookieData = cookies().get(name);

	return new Promise<RequestCookie | undefined>(resolve => setTimeout(() => resolve(cookieData)));
};

export type SessionResult =
	| { isAuthenticated: false; session: null }
	| {
			isAuthenticated: true;
			session: { user: { id: string; name: string; email: string; image: string }; expires: string };
	  };

export const getSessionResult = async (): Promise<SessionResult> => {
	const rawSession = await auth();

	if (!rawSession) return { isAuthenticated: false as const, session: null };

	return {
		isAuthenticated: true as const,
		session: {
			user: {
				id: rawSession.user?.id || '',
				name: rawSession.user?.name || '',
				email: rawSession.user?.email || '',
				image: rawSession.user?.image || ''
			},
			expires: rawSession.expires || ''
		}
	};
};

export const trackEventServer = (
	reportValueArgs: Parameters<typeof reportValue>,
	trackArgs: Parameters<typeof track>
) => {
	if (env.NEXT_PUBLIC_NODE_ENV !== 'production') return;

	tryCatchHandlerSync(() => reportValue(...reportValueArgs), 'trackEventServer.reportValue');

	return tryCatchHandler(track(...trackArgs), 'trackEventServer.track');
};
