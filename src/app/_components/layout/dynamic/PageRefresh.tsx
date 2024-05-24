'use client';

import { useModuleId } from '@root/hooks/useModuleId';
import { ApiClientCtx } from '@root/utils/client/trpc';
import { cn } from '@root/utils/common';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { DEFAULT_REFRESH_THRESHOLD, usePullToRefresh } from 'use-pull-to-refresh';

type Props = { isDisabledPullToRefresh: boolean };

export default function PageRefresh({ isDisabledPullToRefresh: isDisabled }: Props) {
	const { status: sessionStatus } = useSession();

	const { refresh } = useRouter();

	const trpcUtils = ApiClientCtx.useUtils();

	const { isDetailPage, segment, moduleId } = useModuleId();

	const onRefresh = useCallback(async () => {
		if (sessionStatus === 'authenticated') await trpcUtils.user.getModuleBookmarks.invalidate();

		if (!segment || !moduleId || isDetailPage) return refresh();

		return await trpcUtils[moduleId].getAll.invalidate();
	}, [isDetailPage, moduleId, refresh, segment, sessionStatus, trpcUtils]);

	const { isRefreshing, pullPosition } = usePullToRefresh({ onRefresh, isDisabled, maximumPullLength: 300 });

	return (
		<div
			style={{
				opacity: (isRefreshing || pullPosition > 0) && !isDisabled ? 1 : 0,
				transform: `translateY(${
					(isDisabled ? 0 : (isRefreshing ? DEFAULT_REFRESH_THRESHOLD : pullPosition) / 3) - 48
				}px)`,
			}}
			className='fixed inset-x-1/2 top-0 z-[100] aspect-square size-8 -translate-x-1/2 rounded-full bg-slate-50 p-2 text-primary transition-[opacity,transform]'
		>
			<span className={cn('loading w-full', isRefreshing ? 'loading-spinner' : 'loading-infinity')} />
		</div>
	);
}
