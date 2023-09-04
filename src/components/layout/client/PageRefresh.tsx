'use client';

import ArrowSmallLeft from '@root/components/common/server/icons/solid/ArrowSmallLeft';
import ArrowSmallRight from '@root/components/common/server/icons/solid/ArrowSmallRight';
import { usePullToNavigate } from '@root/hooks/usePullToNavigate';
import type { PullDirectionEnum } from '@root/types/common';
import { useRouter } from 'next/navigation';
import type { CSSProperties } from 'react';
import { useCallback } from 'react';

type PageRefreshProps = { isDisabled?: boolean };

export default function PageRefresh({ isDisabled = false }: PageRefreshProps) {
	const { forward, back } = useRouter();

	const { isLoading, pullPosition, pullDirection } = usePullToNavigate({
		onReload: () => location.reload(),
		onBackward: back,
		onForward: forward,
		isDisabled,
	});

	const getStyle = useCallback(
		(direction: PullDirectionEnum): CSSProperties | undefined => {
			if (!direction) return;
			return {
				opacity: (isLoading || pullPosition > 0) && !isDisabled && pullDirection === direction ? 1 : 0,
				transform: `translate${direction === 'reload' ? 'Y' : 'X'}(${direction === 'forward' ? '-' : ''}${
					isDisabled || pullDirection !== direction
						? 0
						: (isLoading ? window.screen[direction === 'reload' ? 'height' : 'width'] * 0.3 : pullPosition) / 3
				}px)`,
			};
		},
		[isDisabled, isLoading, pullDirection, pullPosition],
	);

	return (
		<>
			<div
				style={getStyle('reload')}
				className='fixed inset-x-1/2 top-0 z-[100] aspect-square h-8 w-8 -translate-x-1/2 rounded-full bg-slate-50 p-2 text-primary transition-[opacity,transform]'
			>
				<span className={`loading w-full  ${isLoading ? 'loading-spinner' : 'loading-infinity'}`} />
			</div>

			<div
				style={getStyle('backward')}
				className='fixed inset-y-1/2 left-0 z-[100] aspect-square h-8 w-8 -translate-x-1/2 rounded-full bg-slate-50 p-2 text-primary transition-[opacity,transform]'
			>
				<ArrowSmallLeft className='aspect-square w-full' />
			</div>

			<div
				style={getStyle('forward')}
				className='fixed inset-y-1/2 right-0 z-[100] aspect-square h-8 w-8 -translate-x-1/2 rounded-full bg-slate-50 p-2 text-primary transition-[opacity,transform]'
			>
				<ArrowSmallRight className='aspect-square w-full' />
			</div>
		</>
	);
}
