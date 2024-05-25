'use client';

import type { RefreshProps } from '@root/types/common/props';
import { ApiClientCtx } from '@root/utils/client/trpc';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { usePullToRefresh } from 'use-pull-to-refresh';
import RefreshIndicator from './RefreshIndicator';

export default function DetailRefresh({ isDisabled }: RefreshProps) {
	const { status: sessionStatus } = useSession();

	const { refresh } = useRouter();

	const trpcUtils = ApiClientCtx.useUtils();

	const onRefresh = useCallback(async () => {
		const promiseList: Array<Promise<unknown>> = [new Promise(resolve => resolve(refresh()))];

		if (sessionStatus === 'authenticated') promiseList.push(trpcUtils.user.getModuleBookmarks.invalidate());

		await Promise.allSettled(promiseList);
	}, [refresh, sessionStatus, trpcUtils]);

	const { isRefreshing, pullPosition } = usePullToRefresh({ onRefresh, isDisabled, maximumPullLength: 300 });

	return <RefreshIndicator isRefreshing={isRefreshing} pullPosition={pullPosition} isDisabled={isDisabled} />;
}
