import { Root, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import { PageRefresh } from '@root/components/ui/dynamic';
import ErrorModal from '@root/components/ui/static/ErrorModal';
import type { OnScroll } from '@root/hooks/useScroll';
import { useScroll } from '@root/hooks/useScroll';
import type { ChildrenProps, ClassNameProps, ErrorResultProps } from '@root/types/common/props';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';

import dynamic from 'next/dynamic';
const ScrollToTop = dynamic(() => import('./ScrollToTop'));

type ScrollWrapperProps = ChildrenProps &
	ClassNameProps &
	ErrorResultProps & { enableScrollTop?: boolean; enablePageRefresh?: boolean };

export default function ScrollWrapper({
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

	const [isErrorModalOpen, setIsErrorModalOpen] = useState(true);
	const [isShowScrollTop, setIsShowScrollTop] = useState(false);
	const [isDisabledPullToRefresh, setIsDisabledPullToRefresh] = useState(false);

	const onScroll: OnScroll<HTMLDivElement> = useCallback(
		(scrollPosition, scrollElement) => {
			if (enablePageRefresh) {
				if (scrollPosition === 0) setIsDisabledPullToRefresh(false);
				if (scrollPosition > 0) setIsDisabledPullToRefresh(true);
			}

			if (!enableScrollTop) return;

			if (scrollElement.scrollHeight < 2 * scrollElement.offsetHeight) return setIsShowScrollTop(false);
			if (scrollPosition > 0.6 && !isShowScrollTop) return setIsShowScrollTop(true);
			if (scrollPosition <= 0.6 && isShowScrollTop) return setIsShowScrollTop(false);
		},
		[enablePageRefresh, enableScrollTop, isShowScrollTop],
	);

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
						isError && isErrorModalOpen && '!overflow-hidden'
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
				</Viewport>

				<Scrollbar className='scroll-area-scrollbar' orientation='vertical'>
					<Thumb className='scroll-area-thumb' />
				</Scrollbar>

				{enableScrollTop ? <ScrollToTop isShow={isShowScrollTop} refObject={scrollableRef} /> : null}
			</Root>
		</>
	);
}
