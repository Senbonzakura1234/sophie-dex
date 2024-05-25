'use client';

import type { RefreshProps } from '@root/types/common/props';
import { ApiClientCtx } from '@root/utils/client/trpc';
import { useCallback } from 'react';
import { usePullToRefresh } from 'use-pull-to-refresh';
import RefreshIndicator from './RefreshIndicator';

export default function ProfileRefresh({ isDisabled }: RefreshProps) {
	const trpcUtils = ApiClientCtx.useUtils();

	const onRefresh = useCallback(async () => trpcUtils.user.getProfile.invalidate(), [trpcUtils]);

	const { isRefreshing, pullPosition } = usePullToRefresh({ onRefresh, isDisabled, maximumPullLength: 300 });

	return <RefreshIndicator isRefreshing={isRefreshing} pullPosition={pullPosition} isDisabled={isDisabled} />;
}
