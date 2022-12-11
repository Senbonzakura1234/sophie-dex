import { ArrowUpOnSquareIcon } from '@heroicons/react/24/solid';
import type { FC, RefObject } from 'react';
import { useCallback, useState } from 'react';

import FadeWrapper from '../Animations/FadeWrapper';

const ScrollToTop: FC<{
	scrollableBottomReached: boolean;
	scrollableRef: RefObject<HTMLDivElement>;
	scrollPosition: number;
}> = ({ scrollableBottomReached, scrollableRef, scrollPosition }) => {
	const [isScrolling, setIsScrolling] = useState(false);

	const scrollToTop = useCallback(() => {
		if (!isScrolling && scrollableBottomReached) {
			let position = scrollPosition;
			setIsScrolling(() => true);
			const interval = setInterval(() => {
				position = position - 30;
				if (scrollableRef.current) scrollableRef.current.scrollTo({ top: position, behavior: 'smooth' });
				if (position <= 0) {
					clearInterval(interval);
					setIsScrolling(() => false);
				}
			}, 1);
		}
	}, [isScrolling, scrollPosition, scrollableBottomReached, scrollableRef]);

	return (
		<FadeWrapper show={scrollableBottomReached} isTransForm={true}>
			<div className='fixed inset-x-1/2 bottom-3 z-30 flex -translate-x-1/2 place-content-center lg:left-auto lg:right-6 lg:bottom-6'>
				<button
					className='btn btn-circle shadow-xl'
					disabled={isScrolling || !scrollableBottomReached}
					onClick={scrollToTop}
				>
					<ArrowUpOnSquareIcon className='h4 h-4' />
				</button>
			</div>
		</FadeWrapper>
	);
};

export default ScrollToTop;
