'use client';

import ClipboardIcon from '@components/icons/solid/ClipboardIcon';
import ShareSquareIcon from '@components/icons/solid/ShareSquareIcon';
import useDispatch from '@root/hooks/useDispatch';
import type { ImprovedOmit } from '@root/types/common';
import type { ClassNameProps } from '@root/types/common/props';
import type { AlertContextState } from '@root/utils/client/context';
import { tryCatchHandler } from '@root/utils/common';

type InputData = ImprovedOmit<Required<ShareData>, 'files'>;

type OnShareParams = {
	input: InputData;
	onSuccess: () => void;
	onFailure: (message: string, error?: unknown) => void;
};

const isCanShare = (input: InputData) => Boolean(navigator?.canShare(input));

const onShare = async ({ input, onFailure, onSuccess }: OnShareParams) => {
	if (isCanShare(input)) return tryCatchHandler(navigator.share(input));

	// fallback to copy to clipboard
	if (!navigator?.clipboard) return onFailure('Clipboard not supported');

	const { error, isSuccess } = await tryCatchHandler(navigator.clipboard.writeText(input.url));

	return isSuccess ? onSuccess() : onFailure('Copy to clipboard failed', error);
};

type ShareButtonProps = { input: InputData } & ClassNameProps;

export default function ShareButton({ className, input }: ShareButtonProps) {
	const dispatch = useDispatch();

	const pushAlert = (data: AlertContextState['alert']) => dispatch({ type: 'UPDATE_ALERT', data });

	const canShare = isCanShare(input);

	return (
		<button
			aria-label={`Share ${input.title}`}
			className={`btn btn-square btn-primary btn-xs my-auto ${canShare ? 'border-none' : ''} ${className}`}
			onClick={() =>
				onShare({
					input,
					onFailure: message => pushAlert({ isOpen: true, message, type: 'ERROR' }),
					onSuccess: () => pushAlert({ isOpen: true, message: 'Url copied to clipboard', type: 'SUCCESS' }),
				})
			}
			role='button'
		>
			{canShare ? (
				<ShareSquareIcon className='aspect-square h-4' />
			) : (
				<ClipboardIcon className='aspect-square h-4' />
			)}
		</button>
	);
}
