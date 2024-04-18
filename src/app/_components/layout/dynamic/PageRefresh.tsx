'use client';

import usePageSegment from '@root/hooks/usePageSegment';
import useSelector from '@root/hooks/useSelector';
import { moduleIdList } from '@root/types/model';
import { arrayInclude, cn } from '@root/utils/common';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { DEFAULT_REFRESH_THRESHOLD, usePullToRefresh } from 'use-pull-to-refresh';

export default function PageRefresh() {
	const { refresh } = useRouter();
	const {
		contentData: { refetch },
		scrollWrapper: { isDisabledPullToRefresh: isDisabled },
	} = useSelector();
	const { isDetailPage, segment } = usePageSegment();

	const onRefresh = useMemo(() => {
		if (!refetch) return refresh;
		if (isDetailPage || !arrayInclude(moduleIdList, segment)) return refresh;
		return refetch;
	}, [isDetailPage, refetch, refresh, segment]);

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
