import type { InputData } from '@root/types/common';
import { tryCatchHandler } from '@root/utils/common';
import { useEffect, useState } from 'react';
import { useNotification } from './useNotification';

export const useShare = (input: InputData) => {
	const [shareNotification, setShareNotification] = useNotification();
	const [isCanShare, setIsCanShare] = useState(false);

	useEffect(() => {
		if (typeof window === 'undefined' || !('navigator' in window)) return setIsCanShare(false);
		if (!('share' in window.navigator) || !('canShare' in window.navigator)) return setIsCanShare(false);
		if (typeof window.navigator.share !== 'function' || typeof window.navigator.canShare !== 'function')
			return setIsCanShare(false);

		return setIsCanShare(Boolean(window.navigator.canShare(input)));
	}, [input]);

	const onShare = async () => {
		if (isCanShare) return tryCatchHandler(window.navigator.share(input));

		// fallback to copy to clipboard
		if (
			!('clipboard' in window.navigator) ||
			!('writeText' in window.navigator.clipboard) ||
			typeof window.navigator.clipboard.writeText !== 'function'
		)
			return setShareNotification({ isOpen: true, message: 'Clipboard not supported', type: 'ERROR' });

		const { isSuccess } = await tryCatchHandler(window.navigator.clipboard.writeText(input.url));

		if (isSuccess) return setShareNotification({ isOpen: true, message: 'Url copied to clipboard', type: 'SUCCESS' });

		return setShareNotification({ isOpen: true, message: 'Copy to clipboard failed', type: 'ERROR' });
	};

	return { shareNotification, onShare, isCanShare };
};
