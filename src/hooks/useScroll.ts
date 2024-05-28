import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

export type OnScroll = (scrollInput: {
	scrollPosition: number;
	scrollElement: HTMLElement;
	isShowScrollTop: boolean;
	setIsShowScrollTop: Dispatch<SetStateAction<boolean>>;
}) => void;

type UseScrollProps = {
	onScroll?: OnScroll;
	scrollElementId: string;
};

export const useScroll = ({ onScroll, scrollElementId }: UseScrollProps) => {
	const [isShowScrollTop, setIsShowScrollTop] = useState(false);

	useEffect(() => {
		if (typeof window === 'undefined' || !onScroll) return;
		const scrollElement = window.document.getElementById(scrollElementId);

		if (!scrollElement) return;

		scrollElement.addEventListener(
			'scroll',
			() => {
				const scrollHeight = (scrollElement?.scrollHeight || 0) - (scrollElement?.offsetHeight || 0);
				const scrollPosition = (scrollElement?.scrollTop || 0) / (scrollHeight || 1);

				onScroll({ scrollElement, isShowScrollTop, setIsShowScrollTop, scrollPosition });
			},
			{ passive: true }
		);

		return () =>
			scrollElement.removeEventListener('scroll', () => scrollElement.scrollTo({ top: 0, behavior: 'smooth' }));
	}, [isShowScrollTop, onScroll, scrollElementId]);

	const scrollToTop = () => {
		if (typeof window === 'undefined' || !isShowScrollTop) return;

		const scrollElement = window.document.getElementById(scrollElementId);

		if (scrollElement) scrollElement.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return { scrollToTop, isShowScrollTop };
};
