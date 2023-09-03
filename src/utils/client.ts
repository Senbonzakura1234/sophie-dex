'use-client';

import { tryCatchHandler } from './common';

type OnCopyToClipboardParams = {
	input: string;
	onSuccess: () => void;
	onFailure: (message: string, error?: unknown) => void;
};

export const onCopyToClipboard = async ({ input, onFailure, onSuccess }: OnCopyToClipboardParams) => {
	if (!navigator?.clipboard) return onFailure('Clipboard not supported');

	const { error, isSuccess } = await tryCatchHandler(navigator.clipboard.writeText(input));

	return isSuccess ? onSuccess() : onFailure('Copy to clipboard failed', error);
};
