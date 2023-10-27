import ArrowUpOnSquareIcon from '@components/icons/solid/ArrowUpOnSquareIcon';
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
			className={`fixed bottom-0 right-6 z-30 flex place-content-center transition-[opacity,transform] duration-500 ${
				isShow ? 'opacity-1 -translate-y-6' : '-translate-y-0 opacity-0'
			}`}
		>
			<button
				aria-label='Back To Top'
				className='btn btn-circle btn-primary text-slate-50 shadow-lg shadow-base-content/30'
				disabled={!isShow}
				onClick={scrollToTop}
			>
				<ArrowUpOnSquareIcon className='h4 h-4' />
			</button>
		</div>
	);
}
