'use client';

import { KEY_BINDING_DICTIONARY } from '@root/constants/common';
import usePageSegment from '@root/hooks/usePageSegment';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollTopTrigger() {
	const searchParams = useSearchParams();
	const { isDetailPage, segment } = usePageSegment();

	useEffect(() => {
		if (typeof window === 'undefined') return;
		const element = document.getElementById(KEY_BINDING_DICTIONARY.SCROLL_WRAPPER_ID);

		if (element) element.scrollTo({ top: 0, behavior: 'smooth' });
	}, [isDetailPage, segment, searchParams]);

	return null;
}
