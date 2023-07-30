import { useRouter } from 'next/router';
import { DEFAULT_REFRESH_THRESHOLD, usePullToRefresh } from 'use-pull-to-refresh';

type PageRefreshProps = { isDisabled?: boolean };

function PageRefresh({ isDisabled = false }: PageRefreshProps) {
	const { reload } = useRouter();

	const { isRefreshing, pullPosition } = usePullToRefresh({
		onRefresh: reload,
		isDisabled,
		maximumPullLength: 300,
	});

	return (
		<div
			style={{
				opacity: (isRefreshing || pullPosition > 0) && !isDisabled ? 1 : 0,
				top: isDisabled ? 0 : (isRefreshing ? DEFAULT_REFRESH_THRESHOLD : pullPosition) / 3,
			}}
			className='fixed inset-x-1/2 z-30 aspect-square h-8 w-8 -translate-x-1/2 rounded-full bg-slate-50 p-2 transition-opacity'
		>
			<span className={`loading w-full text-primary ${isRefreshing ? 'loading-spinner' : 'loading-infinity'}`} />
		</div>
	);
}

export default PageRefresh;
