import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
	const getMatches = (query: string) => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false);

	const [matches, setMatches] = useState<boolean>(getMatches(query));

	useEffect(() => {
		const matchMedia = window.matchMedia(query);
		const onMediaChange = () => setMatches(getMatches(query));

		matchMedia.addEventListener('change', onMediaChange, { passive: true });

		return () => {
			matchMedia.removeEventListener('change', onMediaChange);
		};
	}, [query]);

	return matches;
};
