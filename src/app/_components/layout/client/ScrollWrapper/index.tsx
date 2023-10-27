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

			<Root className='scroll-area-root h-[100dvh] w-[100dvw] bg-base-200 !antialiased' type='scroll'>
				<Viewport
					className='scroll-area-viewport scroll-wrapper scroll-wrapper-horizontal relative'
					ref={scrollableRef}
				>
					{children}
				</Viewport>

				<Scrollbar className='scroll-area-scrollbar' orientation='vertical'>
					<Thumb className='scroll-area-thumb' />
				</Scrollbar>

				<ScrollToTop isShow={isShowScrollTop} refObject={scrollableRef} />
			</Root>
		</>
	);
}
