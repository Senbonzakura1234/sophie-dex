import ArrowUpOnSquareIcon from '@root/assets/icons/solid/ArrowUpOnSquareIcon';
import type { RefProps } from '@root/types/common/props';
import { useCallback } from 'react';

type ScrollToTopProps = { isShow: boolean } & RefProps<HTMLDivElement>;

export default function ScrollToTop({ isShow, refObject }: ScrollToTopProps) {
	const scrollToTop = useCallback(
		() => refObject?.current && isShow && refObject.current.scrollTo({ top: 0, behavior: 'smooth' }),
		[isShow, refObject],
	);

	return (
		<div
			className={`fixed right-6 z-30 flex place-content-center transition-[opacity,bottom] duration-500 ${
				isShow ? 'opacity-1 bottom-6' : 'bottom-0 opacity-0'
			}`}
		>
			<button
				className='btn btn-circle btn-primary text-white'
				aria-label='Back To Top'
				disabled={!isShow}
				onClick={scrollToTop}
			>
				<ArrowUpOnSquareIcon className='h4 h-4' />
			</button>
		</div>
	);
}
