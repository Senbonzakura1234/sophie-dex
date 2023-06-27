import ArrowPathIcon from '@root/assets/icons/solid/ArrowPathIcon';
import { useRouterReady } from '@root/hooks/useRouterReady';
import { useRouter } from 'next/router';
import { usePullToRefresh } from 'use-pull-to-refresh';

const refreshThreshold = 200;

export type PageRefreshProps = { isDisabled?: boolean };

export default function PageRefresh({ isDisabled = false }: PageRefreshProps) {
	const { isReady, reload } = useRouter();

	const isRouterReady = useRouterReady(isReady);

	const { isRefreshing, pullPosition } = usePullToRefresh({
		onRefresh: reload,
		isDisabled: !isRouterReady || isDisabled,
		maximumPullLength: 300,
		refreshThreshold,
	});

	return (
		<div
			style={{
				opacity: (isRefreshing || pullPosition > 0) && !isDisabled ? 1 : 0,
				top: isDisabled ? 0 : (isRefreshing ? refreshThreshold : pullPosition) / 3,
			}}
			className='fixed inset-x-1/2 z-30 aspect-square h-8 w-8 -translate-x-1/2 rounded-full bg-slate-50 p-2 transition-opacity'
		>
			<div
				style={{ rotate: `${isDisabled ? 0 : pullPosition}deg` }}
				className={`h-full w-full transition-[rotate] ${!isDisabled && isRefreshing ? 'animate-spin' : ''}`}
			>
				<ArrowPathIcon className='h-full w-full text-primary' />
			</div>
		</div>
	);
}
