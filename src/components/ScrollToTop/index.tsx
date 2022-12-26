import { ArrowUpOnSquareIcon } from '@heroicons/react/24/solid';
import type { ScrollToTopProps } from '@root/types/common/props';
import type { FC } from 'react';
import { useCallback, useState } from 'react';

import FadeWrapper from '../Animations/FadeWrapper';

const ScrollToTop: FC<ScrollToTopProps> = ({ scrollableBottomReached, refObject: ref, scrollPosition }) => {
	const [isScrolling, setIsScrolling] = useState(false);

	const scrollToTop = useCallback(() => {
		if (!isScrolling && scrollableBottomReached) {
			let position = scrollPosition;
			setIsScrolling(() => true);
			const interval = setInterval(() => {
				position = position * 0.8;

				if (ref.current)
					ref.current.scrollTo({
						top: position,
						behavior: 'smooth',
					});

				if (position <= 1) {
					clearInterval(interval);
					setIsScrolling(() => false);
					if (ref.current && position > 0)
						ref.current.scrollTo({
							top: 0,
							behavior: 'smooth',
						});
				}
			}, 1);
		}
	}, [isScrolling, scrollPosition, scrollableBottomReached, ref]);

	return (
		<FadeWrapper show={scrollableBottomReached} isTransForm>
			<div className='fixed inset-x-1/2 bottom-3 z-30 flex -translate-x-1/2 place-content-center lg:left-auto lg:right-12 lg:bottom-6'>
				<button
					className='btn btn-primary btn-circle text-white'
					aria-label='Back To Top'
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
