'use client';

import { DEFAULT_REFRESH_THRESHOLD } from '@root/constants';
import type { useModuleId } from '@root/hooks/useModuleId';
import { usePullToRefresh } from '@root/hooks/usePullToRefresh';
import useSelector from '@root/hooks/useSelector';
import { useRouter } from 'next/navigation';

type PageRefreshProps = { isDisabled?: boolean } & Partial<ReturnType<typeof useModuleId>>;

export default function PageRefresh({ isDisabled = false, isDetailPage = false, moduleId }: PageRefreshProps) {
	const { refresh } = useRouter();
	const {
		contentData: { refetch },
	} = useSelector();

	const { isRefreshing, pullPosition } = usePullToRefresh({
		onRefresh: isDetailPage || !moduleId ? refresh : refetch || refresh,
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
