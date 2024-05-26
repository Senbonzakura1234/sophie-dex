import type { InputData } from '@root/types/common';
import { tryCatchHandler, tryCatchHandlerSync } from '@root/utils/common';
import { useCallback, useMemo } from 'react';
import { useNotification } from './useNotification';

export const useShareAPI = (input: InputData) => {
	const [shareNotification, setShareNotification] = useNotification();

	const isCanCopy = useMemo(
		() =>
			Boolean(
				tryCatchHandlerSync(() => {
					if (!('clipboard' in window.navigator)) return false;

					if (!('writeText' in window.navigator.clipboard)) return false;

					if (typeof window.navigator.clipboard.writeText !== 'function') return false;

					return true;
				}).data,
			),
		[],
	);

	const isCanShare = useMemo(
		() =>
			Boolean(
				tryCatchHandlerSync(() => {
					if (typeof window === 'undefined') return false;

					if (!('navigator' in window)) return false;

					if (!('share' in window.navigator)) return false;

					if (!('canShare' in window.navigator)) return false;

					if (typeof window.navigator.share !== 'function') return false;

					if (typeof window.navigator.canShare !== 'function') return false;

					return Boolean(window.navigator.canShare(input));
				}).data,
			),
		[input],
	);

	const onCopy = useCallback(
		async () => tryCatchHandler(window.navigator.clipboard.writeText(input.url)),
		[input.url],
	);

	const onShare = useCallback(async () => tryCatchHandler(window.navigator.share(input)), [input]);

	const share = useCallback(async () => {
		if (isCanShare && (await onShare()).isSuccess) return;

		// fallback to copy to clipboard
		if (!isCanCopy) return setShareNotification({ isOpen: true, message: 'Clipboard not supported', type: 'ERROR' });

		const { isSuccess } = await onCopy();

		if (isSuccess) return setShareNotification({ isOpen: true, message: 'Url copied to clipboard', type: 'SUCCESS' });

		return setShareNotification({ isOpen: true, message: 'Copy to clipboard failed', type: 'ERROR' });
	}, [isCanCopy, isCanShare, onCopy, onShare, setShareNotification]);

	return { shareNotification, share, isCanShare };
};
