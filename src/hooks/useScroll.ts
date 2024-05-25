import { useEffect } from 'react';

export type OnScroll = (scrollPosition: number, scrollElement: HTMLElement) => void;

type UseScrollProps = {
	onScroll: OnScroll;
	scrollElementId: string;
};

export const useScroll = ({ onScroll, scrollElementId }: UseScrollProps) =>
	useEffect(() => {
		if (typeof window === 'undefined') return;
		const scrollElement = document.getElementById(scrollElementId);

		if (!scrollElement) return;

		scrollElement.addEventListener(
			'scroll',
			() => {
				const scrollHeight = (scrollElement?.scrollHeight || 0) - (scrollElement?.offsetHeight || 0);

				onScroll((scrollElement?.scrollTop || 0) / (scrollHeight || 1), scrollElement);
			},
			{ passive: true },
		);

		return () =>
			scrollElement.removeEventListener('scroll', () => scrollElement.scrollTo({ top: 0, behavior: 'smooth' }));
	}, [onScroll, scrollElementId]);
