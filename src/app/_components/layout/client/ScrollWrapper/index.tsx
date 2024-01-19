'use client';

import { Root, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import usePageSegment from '@root/hooks/usePageSegment';
import type { OnScroll } from '@root/hooks/useScroll';
import { useScroll } from '@root/hooks/useScroll';
import type { ChildrenProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

const PageRefresh = dynamic(() => import('@components/layout/client/PageRefresh'), { ssr: false });
const ScrollToTop = dynamic(() => import('./ScrollToTop'), { ssr: false });

type ScrollWrapperProps = ChildrenProps;

export default function ScrollWrapper({ children }: ScrollWrapperProps) {
	const scrollableRef = useRef<HTMLDivElement>(null);

	const searchParams = useSearchParams();
	const { isDetailPage, segment } = usePageSegment();

	const [isShowScrollTop, setIsShowScrollTop] = useState(false);
	const [isDisabledPullToRefresh, setIsDisabledPullToRefresh] = useState(false);

	const onScroll: OnScroll<HTMLDivElement> = useCallback(
		(scrollPosition, scrollElement) => {
			setIsDisabledPullToRefresh(scrollPosition > 0);

			if (scrollElement.scrollHeight < 2 * scrollElement.offsetHeight) return setIsShowScrollTop(false);
			if (scrollPosition > 0.6 && !isShowScrollTop) return setIsShowScrollTop(true);
			if (scrollPosition <= 0.6 && isShowScrollTop) return setIsShowScrollTop(false);
		},
		[isShowScrollTop],
	);

	useScroll({ scrollableRef, onScroll });

	useEffect(() => {
		if (scrollableRef?.current) scrollableRef.current.scrollTo({ top: 0, behavior: 'smooth' });
	}, [isDetailPage, segment, searchParams]);

	return (
		<>
			<PageRefresh isDisabled={isDisabledPullToRefresh} isDetailPage={isDetailPage} segment={segment} />

			<Root className='h-[100dvh] w-[100dvw] overflow-hidden bg-base-200 !antialiased' type='scroll'>
				<Viewport
					className='relative size-full [&>div]:!flex [&>div]:h-full [&>div]:flex-col [&>div]:gap-6'
					ref={scrollableRef}
				>
					{children}
				</Viewport>

				<Scrollbar
					className='group/scrollbar z-30 flex touch-none select-none bg-transparent p-0.5 data-[orientation=horizontal]:h-2 data-[orientation=vertical]:w-2 data-[orientation=horizontal]:flex-col'
					orientation='vertical'
				>
					<Thumb className='relative flex-[1] rounded bg-base-content opacity-50 transition-opacity group-hover/scrollbar:opacity-100' />
				</Scrollbar>

				<ScrollToTop isShow={isShowScrollTop} refObject={scrollableRef} />
			</Root>
		</>
	);
}
