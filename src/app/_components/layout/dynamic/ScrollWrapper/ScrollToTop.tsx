'use client';

import ArrowUpOnSquareIcon from '@components/icons/solid/ArrowUpOnSquareIcon';
import { KEY_BINDING_DICTIONARY } from '@root/constants/common';
import type { OnScroll } from '@root/hooks/useScroll';
import { useScroll } from '@root/hooks/useScroll';
import { cn } from '@root/utils/common';

export default function ScrollToTop() {
	const onScroll: OnScroll = ({ scrollPosition, scrollElement, isShowScrollTop, setIsShowScrollTop }) => {
		if (scrollElement.scrollHeight < 2 * scrollElement.offsetHeight) return setIsShowScrollTop(false);
		if (scrollPosition > 0.6 && !isShowScrollTop) return setIsShowScrollTop(true);
		if (scrollPosition <= 0.6 && isShowScrollTop) return setIsShowScrollTop(false);
	};

	const { isShowScrollTop, scrollToTop } = useScroll({
		onScroll,
		scrollElementId: KEY_BINDING_DICTIONARY.ROOT_SCROLL_WRAPPER_ID
	});

	return (
		<div
			className={cn(
				'fixed bottom-0 right-6 z-30 flex place-content-center transition-[opacity,transform] duration-500',
				isShowScrollTop ? 'opacity-1 -translate-y-6' : '-translate-y-0 opacity-0'
			)}
		>
			<button
				aria-label='Back To Top'
				className='btn btn-circle btn-primary text-slate-50 shadow-lg shadow-base-content/30'
				disabled={!isShowScrollTop}
				onClick={scrollToTop}
			>
				<ArrowUpOnSquareIcon className='h4 h-4' />
			</button>
		</div>
	);
}
