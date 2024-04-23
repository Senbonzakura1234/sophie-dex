'use client';

import { useModuleId } from '@root/hooks/useModuleId';
import { ApiClientCtx } from '@root/utils/client/trpc';
import { useSession } from 'next-auth/react';

export default function BookmarkApiTrigger() {
	const { moduleId } = useModuleId();
	const sessions = useSession();

	ApiClientCtx.user.getModuleBookmarks.useQuery(
		{ moduleId: moduleId! },
		{ enabled: sessions.status === 'authenticated' && typeof moduleId !== 'undefined' },
	);

	return null;
}
