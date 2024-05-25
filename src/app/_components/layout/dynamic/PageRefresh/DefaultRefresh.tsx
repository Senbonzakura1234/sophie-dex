'use client';

import type { RefreshProps } from '@root/types/common/props';
import { useRouter } from 'next/navigation';
import { usePullToRefresh } from 'use-pull-to-refresh';
import RefreshIndicator from './RefreshIndicator';

export default function DefaultRefresh({ isDisabled }: RefreshProps) {
	const { refresh: onRefresh } = useRouter();

	const { isRefreshing, pullPosition } = usePullToRefresh({ onRefresh, isDisabled, maximumPullLength: 300 });

	return <RefreshIndicator isRefreshing={isRefreshing} pullPosition={pullPosition} isDisabled={isDisabled} />;
}
