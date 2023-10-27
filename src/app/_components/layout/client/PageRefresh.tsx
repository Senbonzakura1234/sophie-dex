'use client';

import type usePageSegment from '@root/hooks/usePageSegment';
import useSelector from '@root/hooks/useSelector';
import { moduleIdList } from '@root/types/model';
import { arrayInclude } from '@root/utils/common';
import { useRouter } from 'next/navigation';
import { DEFAULT_REFRESH_THRESHOLD, usePullToRefresh } from 'use-pull-to-refresh';

type PageRefreshProps = { isDisabled?: boolean } & Partial<ReturnType<typeof usePageSegment>>;

export default function PageRefresh({ isDisabled = false, isDetailPage = false, segment }: PageRefreshProps) {
	const { refresh } = useRouter();
	const {
		contentData: { refetch },
	} = useSelector();

	const { isRefreshing, pullPosition } = usePullToRefresh({
		onRefresh: isDetailPage || arrayInclude(moduleIdList, segment) ? refresh : refetch || refresh,
		isDisabled,
		maximumPullLength: 300,
	});

	return (
		<div
			style={{
				opacity: (isRefreshing || pullPosition > 0) && !isDisabled ? 1 : 0,
				transform: `translateY(${
					(isDisabled ? 0 : (isRefreshing ? DEFAULT_REFRESH_THRESHOLD : pullPosition) / 3) - 48
				}px)`,
			}}
			className='fixed inset-x-1/2 top-0 z-[100] aspect-square h-8 w-8 -translate-x-1/2 rounded-full bg-slate-50 p-2 text-primary transition-[opacity,transform]'
		>
			<span className={`loading w-full  ${isRefreshing ? 'loading-spinner' : 'loading-infinity'}`} />
		</div>
	);
}
