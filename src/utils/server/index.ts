import { env } from '@root/utils/common/env';
if (env.NEXT_PUBLIC_NODE_ENV !== 'script') import('server-only');

import { auth } from '@root/auth';
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';

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
