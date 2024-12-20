import { useNotification } from '@root/hooks/useNotification';
import type { InputData } from '@root/types/common';
import { getBaseUrl, tryCatchHandler, tryCatchHandlerSync } from '@root/utils/common';
import { useCallback, useMemo } from 'react';

export const useShareAPI = (input: InputData) => {
	const [shareNotification, setShareNotification] = useNotification();

	const isCanCopy = useMemo(
		() =>
			Boolean(
				tryCatchHandlerSync(
					() => {
						if (!('clipboard' in globalThis.navigator)) return false;

						if (!('writeText' in globalThis.navigator.clipboard)) return false;

						if (typeof globalThis.navigator.clipboard.writeText !== 'function') return false;

						return true;
					},
					{ operationCode: 'useShareAPI.isCanCopy', suppressLog: true }
				).data
			),
		[]
	);

	const isCanShare = useMemo(
		() =>
			Boolean(
				tryCatchHandlerSync(
					() => {
						if (typeof globalThis?.document === 'undefined') return false;

						if (!('navigator' in globalThis)) return false;

						if (!('share' in globalThis.navigator)) return false;

						if (!('canShare' in globalThis.navigator)) return false;

						if (typeof globalThis.navigator.share !== 'function') return false;

						if (typeof globalThis.navigator.canShare !== 'function') return false;

						return Boolean(globalThis.navigator.canShare(input));
					},
					{ operationCode: 'useShareAPI.isCanShare', suppressLog: true }
				).data
			),
		[input]
	);

	const share = useCallback(async () => {
		if (isCanShare)
			return void tryCatchHandler(globalThis.navigator.share(input), {
				operationCode: 'share.navigatorShare',
				suppressLog: true
			});

		// fallback to copy to clipboard
		if (!isCanCopy) return setShareNotification({ isOpen: true, message: 'Clipboard not supported', type: 'ERROR' });

		const { isSuccess } = await tryCatchHandler(
			globalThis.navigator.clipboard.writeText(`${getBaseUrl()}${input.url}`),
			{ operationCode: 'share.clipboardWriteText' }
		);

		if (isSuccess) return setShareNotification({ isOpen: true, message: 'Url copied to clipboard', type: 'SUCCESS' });

		return setShareNotification({ isOpen: true, message: 'Copy to clipboard failed', type: 'ERROR' });
	}, [input, isCanCopy, isCanShare, setShareNotification]);

	return { shareNotification, share, isCanShare };
};
