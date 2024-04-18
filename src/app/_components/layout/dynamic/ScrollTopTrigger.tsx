'use client';

import usePageSegment from '@root/hooks/usePageSegment';
import useSelector from '@root/hooks/useSelector';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function ScrollTopTrigger() {
	const searchParams = useSearchParams();
	const { isDetailPage, segment } = usePageSegment();
	const {
		scrollWrapper: { ref },
	} = useSelector();

	useEffect(() => {
		if (ref?.current) ref.current.scrollTo({ top: 0, behavior: 'smooth' });
	}, [isDetailPage, segment, searchParams, ref]);

	return null;
}
