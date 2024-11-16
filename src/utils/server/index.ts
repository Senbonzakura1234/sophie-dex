import { env } from '@root/utils/common/env';
if (env.NEXT_PUBLIC_NODE_ENV !== 'script') void import('server-only');

import { auth } from '@root/auth';
import { sitemapPriorityArray } from '@root/constants/server';
import type { OgQuery } from '@root/types/common/zod';
import { getBaseUrl, queryToParamsString } from '@root/utils/common';

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

export const getOgImgUrl = (ogQuery: OgQuery = {}) => `${getBaseUrl(true)}/api/og${queryToParamsString(ogQuery)}`;

export const getSiteMapPriority = (path: (typeof sitemapPriorityArray)[number]) => {
	const index = sitemapPriorityArray.indexOf(path);

	return index / (sitemapPriorityArray.length - 1) || 0;
};
