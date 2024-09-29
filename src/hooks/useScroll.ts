import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

export type OnScroll = (scrollInput: {
	scrollPosition: number;
	scrollElement: HTMLElement;
	isShowScrollTop: boolean;
	setIsShowScrollTop: Dispatch<SetStateAction<boolean>>;
}) => void;

type Props = Readonly<{ onScroll?: OnScroll; scrollElementId: string }>;

export const useScroll = ({ onScroll, scrollElementId }: Props) => {
	const [isShowScrollTop, setIsShowScrollTop] = useState(false);

	useEffect(() => {
		if (typeof globalThis?.document === 'undefined' || !onScroll) return;
		const scrollElement = globalThis.document.getElementById(scrollElementId);

		if (!scrollElement) return;

		const ac = new AbortController();
		const options = {
			passive: true,
			signal: ac.signal
		};

		scrollElement.addEventListener(
			'scroll',
			() => {
				const scrollHeight = (scrollElement?.scrollHeight || 0) - (scrollElement?.offsetHeight || 0);
				const scrollPosition = (scrollElement?.scrollTop || 0) / (scrollHeight || 1);

				onScroll({ scrollElement, isShowScrollTop, setIsShowScrollTop, scrollPosition });
			},
			options
		);

		return () => void ac.abort();
	}, [isShowScrollTop, onScroll, scrollElementId]);

	const scrollToTop = () => {
		if (typeof globalThis?.document === 'undefined' || !isShowScrollTop) return;

		const scrollElement = globalThis.document.getElementById(scrollElementId);

		if (scrollElement) scrollElement.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return { scrollToTop, isShowScrollTop };
};
