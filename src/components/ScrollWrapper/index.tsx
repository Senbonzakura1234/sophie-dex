import { Root, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import { PageRefresh } from '@root/components/ui/dynamic';
import ErrorModal from '@root/components/ui/static/ErrorModal';
import type { OnScroll } from '@root/hooks/useScroll';
import { useScroll } from '@root/hooks/useScroll';
import type { ChildrenProps, ClassNameProps, ErrorResultProps } from '@root/types/common/props';
import { atom, useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import dynamic from 'next/dynamic';
import Alert from './Alert';
const ScrollToTop = dynamic(() => import('./ScrollToTop'));

const errorModalOpenAtom = atom<boolean>(false);
const showScrollTopAtom = atom<boolean>(false);
const disabledPullToRefreshAtom = atom<boolean>(false);

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

	const { events } = useRouter();
	const [isErrorModalOpen, setIsErrorModalOpen] = useAtom(errorModalOpenAtom);
	const [isShowScrollTop, setIsShowScrollTop] = useAtom(showScrollTopAtom);
	const [isDisabledPullToRefresh, setIsDisabledPullToRefresh] = useAtom(disabledPullToRefreshAtom);

	const onScroll: OnScroll<HTMLDivElement> = (scrollPosition, scrollElement) => {
		if (enablePageRefresh) setIsDisabledPullToRefresh(scrollPosition > 0);

		if (!enableScrollTop) return;

		if (scrollElement.scrollHeight < 2 * scrollElement.offsetHeight) return setIsShowScrollTop(false);
		if (scrollPosition > 0.6 && !isShowScrollTop) return setIsShowScrollTop(true);
		if (scrollPosition <= 0.6 && isShowScrollTop) return setIsShowScrollTop(false);
	};

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

	useEffect(() => {
		if (isError) setIsErrorModalOpen(true);
	}, [isError, setIsErrorModalOpen]);

	return (
		<>
			{enableScrollTop ? <PageRefresh isDisabled={isDisabledPullToRefresh} /> : null}

			<Root className={`scroll-area-root ${className}`} type='scroll'>
				<Viewport
					className={`scroll-area-viewport scroll-wrapper scroll-wrapper-horizontal relative h-full w-full ${
						isError && isErrorModalOpen ? '!overflow-hidden' : ''
					}`}
					ref={scrollableRef}
				>
					{children}
					<ErrorModal
						errorData={errorData}
						errorMessage={errorMessage}
						isShow={isError && isErrorModalOpen}
						onClose={() => setIsErrorModalOpen(false)}
					/>

					<Alert />
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
