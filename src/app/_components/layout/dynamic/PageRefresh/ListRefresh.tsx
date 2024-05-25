'use client';

import { useModuleId } from '@root/hooks/useModuleId';
import type { RefreshProps } from '@root/types/common/props';
import { ApiClientCtx } from '@root/utils/client/trpc';
import { useSession } from 'next-auth/react';
import { useCallback } from 'react';
import { usePullToRefresh } from 'use-pull-to-refresh';
import RefreshIndicator from './RefreshIndicator';

export default function ListRefresh({ isDisabled }: RefreshProps) {
	const { status: sessionStatus } = useSession();

	const trpcUtils = ApiClientCtx.useUtils();

	const { moduleId = 'effect' } = useModuleId();

	const onRefresh = useCallback(async () => {
		const promiseList: Array<Promise<unknown>> = [trpcUtils[moduleId].getAll.invalidate()];

		if (sessionStatus === 'authenticated') promiseList.push(trpcUtils.user.getModuleBookmarks.invalidate());

		await Promise.allSettled(promiseList);
	}, [moduleId, sessionStatus, trpcUtils]);

	const { isRefreshing, pullPosition } = usePullToRefresh({ onRefresh, isDisabled, maximumPullLength: 300 });

	return <RefreshIndicator isRefreshing={isRefreshing} pullPosition={pullPosition} isDisabled={isDisabled} />;
}
