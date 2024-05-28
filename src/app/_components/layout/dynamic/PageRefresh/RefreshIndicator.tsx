import type { RefreshProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';
import { DEFAULT_REFRESH_THRESHOLD } from 'use-pull-to-refresh';

type Props = {
	isRefreshing: boolean;
	pullPosition: number;
} & RefreshProps;

export default function RefreshIndicator({ isDisabled, isRefreshing, pullPosition }: Props) {
	return (
		<div
			style={{
				opacity: (isRefreshing || pullPosition > 0) && !isDisabled ? 1 : 0,
				transform: `translateY(${
					(isDisabled ? 0 : (isRefreshing ? DEFAULT_REFRESH_THRESHOLD : pullPosition) / 3) - 48
				}px)`
			}}
			className='fixed inset-x-1/2 top-0 z-[100] aspect-square size-8 -translate-x-1/2 rounded-full bg-slate-50 p-2 text-primary transition-[opacity,transform]'
		>
			<span className={cn('loading w-full', isRefreshing ? 'loading-spinner' : 'loading-infinity')} />
		</div>
	);
}
