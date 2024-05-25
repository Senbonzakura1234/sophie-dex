'use client';

import { KEY_BINDING_DICTIONARY } from '@root/constants/common';
import { usePageSegment } from '@root/hooks/usePageSegment';
import { useScroll } from '@root/hooks/useScroll';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollTopTrigger() {
	const searchParams = useSearchParams();

	const { isDetailPage, segment } = usePageSegment();

	const { scrollToTop } = useScroll({ scrollElementId: KEY_BINDING_DICTIONARY.ROOT_SCROLL_WRAPPER_ID });

	useEffect(() => {
		scrollToTop();
	}, [isDetailPage, segment, searchParams, scrollToTop]);

	return null;
}
