import { Root, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import { PageRefresh } from '@root/components/ui/dynamic';
import type { OnScroll } from '@root/hooks/useScroll';
import { useScroll } from '@root/hooks/useScroll';
import type { ChildrenProps, ClassNameProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';

const ScrollToTop = dynamic(() => import('./ScrollToTop'));

type ScrollWrapperProps = ChildrenProps & ClassNameProps & { enableScrollTop?: boolean; enablePageRefresh?: boolean };

function ScrollWrapper({ children, className, enableScrollTop, enablePageRefresh }: ScrollWrapperProps) {
	const scrollableRef = useRef<HTMLDivElement>(null);

	const { events } = useRouter();
	const [isShowScrollTop, setIsShowScrollTop] = useState(false);
	const [isDisabledPullToRefresh, setIsDisabledPullToRefresh] = useState(false);

	const onScroll: OnScroll<HTMLDivElement> = useCallback(
		(scrollPosition, scrollElement) => {
			if (enablePageRefresh) setIsDisabledPullToRefresh(scrollPosition > 0);

			if (!enableScrollTop) return;

			if (scrollElement.scrollHeight < 2 * scrollElement.offsetHeight) return setIsShowScrollTop(false);
			if (scrollPosition > 0.6 && !isShowScrollTop) return setIsShowScrollTop(true);
			if (scrollPosition <= 0.6 && isShowScrollTop) return setIsShowScrollTop(false);
		},
		[enablePageRefresh, enableScrollTop, isShowScrollTop],
	);

	useScroll({ scrollableRef, onScroll });

	useEffect(() => {
		const onScrollToTop = () => {
			if (scrollableRef?.current && enableScrollTop) scrollableRef.current.scrollTo({ top: 0, behavior: 'smooth' });
		};

		events.on('routeChangeComplete', onScrollToTop);

		return () => {
			events.off('routeChangeComplete', onScrollToTop);
		};
	}, [enableScrollTop, events]);

	return (
		<>
			{enableScrollTop ? <PageRefresh isDisabled={isDisabledPullToRefresh} /> : null}

			<Root className={`scroll-area-root ${className}`} type='scroll'>
				<Viewport
					className='scroll-area-viewport scroll-wrapper scroll-wrapper-horizontal relative'
					ref={scrollableRef}
				>
					{children}
				</Viewport>

				<Scrollbar className='scroll-area-scrollbar' orientation='vertical'>
					<Thumb className='scroll-area-thumb' />
				</Scrollbar>

				{enableScrollTop ? <ScrollToTop isShow={isShowScrollTop} refObject={scrollableRef} /> : null}
			</Root>
		</>
	);
}

export default ScrollWrapper;
