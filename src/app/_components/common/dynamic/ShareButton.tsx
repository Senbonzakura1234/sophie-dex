'use client';

import ClipboardIcon from '@components/icons/solid/ClipboardIcon';
import ShareSquareIcon from '@components/icons/solid/ShareSquareIcon';
import useNotification from '@root/hooks/useNotification';
import type { ImprovedOmit } from '@root/types/common';
import type { ChildrenProps, ClassNamesProps } from '@root/types/common/props';
import { cn, tryCatchHandler } from '@root/utils/common';
import dynamic from 'next/dynamic';

const Notification = dynamic(() => import('@components/layout/dynamic/Notification'), { ssr: false });

type InputData = ImprovedOmit<Required<ShareData>, 'files'>;

type OnShareParams = { input: InputData; onSuccess: () => void; onFailure: (message: string, error?: unknown) => void };

const isCanShare = (input: InputData) => {
	if (typeof window === 'undefined' || !('navigator' in window)) return false;
	if (!('share' in window.navigator) || !('canShare' in window.navigator)) return false;
	if (typeof window.navigator.share !== 'function' || typeof window.navigator.canShare !== 'function') return false;

	return Boolean(window.navigator.canShare(input));
};

const onShare = async ({ input, onFailure, onSuccess }: OnShareParams) => {
	if (isCanShare(input)) return tryCatchHandler(window.navigator.share(input));

	// fallback to copy to clipboard
	if (!('clipboard' in window.navigator)) return onFailure('Clipboard not supported');
	if (!('writeText' in window.navigator.clipboard)) return onFailure('Clipboard not supported');
	if (typeof window.navigator.clipboard.writeText !== 'function') return onFailure('Clipboard not supported');

	const { error, isSuccess } = await tryCatchHandler(window.navigator.clipboard.writeText(input.url));

	return isSuccess ? onSuccess() : onFailure('Copy to clipboard failed', error);
};

type ShareButtonProps = { input: InputData } & ClassNamesProps<'wrapper' | 'icon'> & ChildrenProps;

export default function ShareButton({ classNames, input, children }: ShareButtonProps) {
	const [shareNotification, setShareNotification] = useNotification();

	const canShare = isCanShare(input);

	const IconComponent = canShare ? ShareSquareIcon : ClipboardIcon;

	return (
		<>
			<button
				aria-label={`Share ${input.title}`}
				className={cn('btn btn-primary btn-xs my-auto', classNames?.wrapper)}
				onClick={async () => {
					const { isSuccess } = await tryCatchHandler(
						onShare({
							input,
							onFailure: message => setShareNotification({ isOpen: true, message, type: 'ERROR' }),
							onSuccess: () =>
								setShareNotification({ isOpen: true, message: 'Url copied to clipboard', type: 'SUCCESS' }),
						}),
					);

					if (!isSuccess)
						return setShareNotification({
							isOpen: true,
							message: 'Share and Clipboard not supported',
							type: 'ERROR',
						});
				}}
				role='button'
			>
				<IconComponent className={cn('size-4', classNames?.icon)} />

				{children ? <span>{children}</span> : null}
			</button>

			{canShare ? null : <Notification {...shareNotification} />}
		</>
	);
}
