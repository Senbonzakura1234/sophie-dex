import type { RefObject } from 'react';
import { useEffect } from 'react';

export type OnScroll<T extends HTMLElement> = (scrollPosition: number, scrollElement: T) => void;

type UseScrollProps<T extends HTMLElement> = {
	scrollableRef: RefObject<T>;
	onScroll: OnScroll<T>;
};

export const useScroll = <T extends HTMLElement>({ onScroll, scrollableRef }: UseScrollProps<T>) => {
	useEffect(() => {
		if (!scrollableRef.current) return;

		const current = scrollableRef.current;

		current.addEventListener('scroll', () => {
			const scrollHeight = (current?.scrollHeight || 0) - (current?.offsetHeight || 0);

			onScroll((current?.scrollTop || 0) / (scrollHeight || 1), current);
		});

		return () => current.removeEventListener('scroll', () => current.scrollTo({ top: 0, behavior: 'smooth' }));
	}, [onScroll, scrollableRef]);
};
