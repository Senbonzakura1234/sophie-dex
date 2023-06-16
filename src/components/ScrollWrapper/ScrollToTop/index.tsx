import { getFramerFadeUp } from '@root/animations';
import ArrowUpOnSquareIcon from '@root/assets/icons/solid/ArrowUpOnSquareIcon';
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
			className='fixed bottom-6 right-6 z-30 flex place-content-center'
		>
			<button
				className='btn-primary btn-circle btn text-white'
				aria-label='Back To Top'
				disabled={!isShow}
				onClick={scrollToTop}
			>
				<ArrowUpOnSquareIcon className='h4 h-4' />
			</button>
		</AnimationWrapper>
	);
}
