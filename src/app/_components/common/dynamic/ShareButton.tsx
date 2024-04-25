'use client';

import ClipboardIcon from '@components/icons/solid/ClipboardIcon';
import ShareSquareIcon from '@components/icons/solid/ShareSquareIcon';
import usePushAlert from '@root/hooks/usePushAlert';
import type { ImprovedOmit } from '@root/types/common';
import type { ChildrenProps, ClassNamesProps } from '@root/types/common/props';
import { cn, tryCatchHandler } from '@root/utils/common';

type InputData = ImprovedOmit<Required<ShareData>, 'files'>;

type OnShareParams = { input: InputData; onSuccess: () => void; onFailure: (message: string, error?: unknown) => void };

const isCanShare = (input: InputData) => Boolean(navigator?.canShare(input));

const onShare = async ({ input, onFailure, onSuccess }: OnShareParams) => {
	if (isCanShare(input)) return tryCatchHandler(navigator.share(input));

	// fallback to copy to clipboard
	if (!navigator?.clipboard) return onFailure('Clipboard not supported');

	const { error, isSuccess } = await tryCatchHandler(navigator.clipboard.writeText(input.url));

	return isSuccess ? onSuccess() : onFailure('Copy to clipboard failed', error);
};

type ShareButtonProps = { input: InputData } & ClassNamesProps<'wrapper' | 'icon'> & ChildrenProps;

export default function ShareButton({ classNames, input, children }: ShareButtonProps) {
	const { pushAlert } = usePushAlert();

	const canShare = isCanShare(input);

	const IconComponent = canShare ? ShareSquareIcon : ClipboardIcon;

	return (
		<button
			aria-label={`Share ${input.title}`}
			className={cn('btn btn-primary btn-xs my-auto', classNames?.wrapper)}
			onClick={() =>
				onShare({
					input,
					onFailure: message => pushAlert({ isOpen: true, message, type: 'ERROR' }),
					onSuccess: () => pushAlert({ isOpen: true, message: 'Url copied to clipboard', type: 'SUCCESS' }),
				})
			}
			role='button'
		>
			<IconComponent className={cn('size-4', classNames?.icon)} />

			<span>{children}</span>
		</button>
	);
}
