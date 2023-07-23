import { Root, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import { PageRefresh } from '@root/components/ui/dynamic';
import ErrorModal from '@root/components/ui/static/ErrorModal';
import type { OnScroll } from '@root/hooks/useScroll';
import { useScroll } from '@root/hooks/useScroll';
import type { ChildrenProps, ClassNameProps, ErrorResultProps } from '@root/types/common/props';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import { observer, useObservable } from '@legendapp/state/react';

import dynamic from 'next/dynamic';
const ScrollToTop = dynamic(() => import('./ScrollToTop'));

type ScrollWrapperProps = ChildrenProps &
	ClassNameProps &
	ErrorResultProps & { enableScrollTop?: boolean; enablePageRefresh?: boolean };

function ScrollWrapper({
	children,
	className,
	enableScrollTop,
	enablePageRefresh,
	errorData,
	errorMessage,
	isError,
}: ScrollWrapperProps) {
	const scrollableRef = useRef<HTMLDivElement>(null);

	const { pathname, query } = useRouter();

	const isErrorModalOpen = useObservable(false);
	const isShowScrollTop = useObservable(false);
	const isDisabledPullToRefresh = useObservable(false);

	const onScroll: OnScroll<HTMLDivElement> = (scrollPosition, scrollElement) => {
		if (enablePageRefresh) isDisabledPullToRefresh.set(scrollPosition > 0);

		if (!enableScrollTop) return;

		if (scrollElement.scrollHeight < 2 * scrollElement.offsetHeight) return isShowScrollTop.set(false);
		if (scrollPosition > 0.6 && !isShowScrollTop.get()) return isShowScrollTop.set(true);
		if (scrollPosition <= 0.6 && isShowScrollTop.get()) return isShowScrollTop.set(false);
	};

	useScroll({ scrollableRef, onScroll });

	useEffect(() => {
		if (scrollableRef?.current && enableScrollTop) scrollableRef.current.scrollTo({ top: 0, behavior: 'smooth' });
	}, [enableScrollTop, pathname, query, scrollableRef]);

	return (
		<>
			{enableScrollTop ? <PageRefresh isDisabled={isDisabledPullToRefresh} /> : null}

			<Root className={`scroll-area-root ${className}`} type='scroll'>
				<Viewport
					className={`scroll-area-viewport scroll-wrapper scroll-wrapper-horizontal relative h-full w-full ${
						isError && isErrorModalOpen.get() && '!overflow-hidden'
					}`}
					ref={scrollableRef}
				>
					{children}
					<ErrorModal
						errorData={errorData}
						errorMessage={errorMessage}
						isShow={isError && isErrorModalOpen.get()}
						onClose={() => isErrorModalOpen.set(false)}
					/>
				</Viewport>

				<Scrollbar className='scroll-area-scrollbar' orientation='vertical'>
					<Thumb className='scroll-area-thumb' />
				</Scrollbar>

				{enableScrollTop ? <ScrollToTop isShow={isShowScrollTop.get()} refObject={scrollableRef} /> : null}
			</Root>
		</>
	);
}

export default observer(ScrollWrapper);
