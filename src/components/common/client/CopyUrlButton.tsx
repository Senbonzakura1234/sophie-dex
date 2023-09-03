'use client';

import ClipboardIcon from '@root/assets/icons/solid/ClipboardIcon';
import useDispatch from '@root/hooks/useDispatch';
import type { ClassNameProps } from '@root/types/common/props';
import { onCopyToClipboard } from '@root/utils/client';
import { getBaseUrl } from '@root/utils/common';
import type { AlertContextState } from '@root/utils/context';

type CopyUrlButtonProps = {
	label?: string;
	url: string;
} & ClassNameProps;

export default function CopyUrlButton({ className, label = 'Copy URL', url }: CopyUrlButtonProps) {
	const dispatch = useDispatch();

	const pushAlert = (alert: AlertContextState['alert']) => dispatch({ type: 'UPDATE_ALERT', alert });

	return (
		<button
			aria-label={label}
			className={`btn btn-square btn-primary btn-xs my-auto ${className}`}
			onClick={() =>
				onCopyToClipboard({
					input: `${getBaseUrl(true)}${url}`,
					onFailure: message => pushAlert({ isOpen: true, message, type: 'ERROR' }),
					onSuccess: () => pushAlert({ isOpen: true, message: 'Url copied to clipboard', type: 'SUCCESS' }),
				})
			}
			role='button'
		>
			<ClipboardIcon className='aspect-square h-4' />
		</button>
	);
}
