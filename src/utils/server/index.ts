import 'server-only';

import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';

export const getIpAddress = (headers: NextRequest['headers']) =>
	(headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0] || 'anonymous';

export const getCookieData = async (name: string) => {
	const cookieData = cookies().get(name);

	return new Promise<RequestCookie | undefined>(resolve => setTimeout(() => resolve(cookieData), 0));
};
