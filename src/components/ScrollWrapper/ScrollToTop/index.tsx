import { ArrowUpOnSquareIcon } from '@heroicons/react/24/solid';
import { getFramerFadeUp } from '@root/animations';
import AnimationWrapper from '@root/components/AnimationWrapper';
import type { RefProps } from '@root/types/common/props';
import { useCallback } from 'react';

type ScrollToTopProps = { isShow: boolean } & RefProps<HTMLDivElement>;

export default function ScrollToTop({ isShow, refObject }: ScrollToTopProps) {
	const scrollToTop = useCallback(
		() => refObject?.current && isShow && refObject.current.scrollTo({ top: 0, behavior: 'smooth' }),
		[isShow, refObject],
	);

	return (
		<AnimationWrapper
			initial={false}
			options={getFramerFadeUp(0.2, 24)}
			show={isShow}
			className='fixed inset-x-1/2 bottom-6 z-30 flex -translate-x-1/2 place-content-center lg:bottom-6 lg:left-auto lg:right-12'
		>
			<button
				className='btn btn-primary btn-circle text-white'
				aria-label='Back To Top'
				disabled={!isShow}
				onClick={scrollToTop}
			>
				<ArrowUpOnSquareIcon className='h4 h-4' />
			</button>
		</AnimationWrapper>
	);
}
