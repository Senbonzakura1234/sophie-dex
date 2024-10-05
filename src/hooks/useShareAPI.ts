import type { InputData } from '@root/types/common';
import { trackEventClient } from '@root/utils/client';
import { getBaseUrl, tryCatchHandler, tryCatchHandlerSync } from '@root/utils/common';
import { useCallback, useMemo } from 'react';
import { useNotification } from './useNotification';

export const useShareAPI = (input: InputData) => {
	const [shareNotification, setShareNotification] = useNotification();

	const isCanCopy = useMemo(
		() =>
			Boolean(
				tryCatchHandlerSync(() => {
					if (!('clipboard' in globalThis.navigator)) return false;

					if (!('writeText' in globalThis.navigator.clipboard)) return false;

					if (typeof globalThis.navigator.clipboard.writeText !== 'function') return false;

					return true;
				}, 'useShareAPI.isCanCopy').data
			),
		[]
	);

	const isCanShare = useMemo(
		() =>
			Boolean(
				tryCatchHandlerSync(() => {
					if (typeof globalThis?.document === 'undefined') return false;

					if (!('navigator' in globalThis)) return false;

					if (!('share' in globalThis.navigator)) return false;

					if (!('canShare' in globalThis.navigator)) return false;

					if (typeof globalThis.navigator.share !== 'function') return false;

					if (typeof globalThis.navigator.canShare !== 'function') return false;

					return Boolean(globalThis.navigator.canShare(input));
				}, 'useShareAPI.isCanShare').data
			),
		[input]
	);

	const share = useCallback(async () => {
		trackEventClient('client.share', input, { flags: ['client.share'] });

		if (isCanShare) return void tryCatchHandler(globalThis.navigator.share(input), 'share.navigatorShare');

		// fallback to copy to clipboard
		if (!isCanCopy) return setShareNotification({ isOpen: true, message: 'Clipboard not supported', type: 'ERROR' });

		const { isSuccess } = await tryCatchHandler(
			globalThis.navigator.clipboard.writeText(`${getBaseUrl()}${input.url}`),
			'share.clipboardWriteText'
		);

		if (isSuccess) return setShareNotification({ isOpen: true, message: 'Url copied to clipboard', type: 'SUCCESS' });

		return setShareNotification({ isOpen: true, message: 'Copy to clipboard failed', type: 'ERROR' });
	}, [input, isCanCopy, isCanShare, setShareNotification]);

	return { shareNotification, share, isCanShare };
};
