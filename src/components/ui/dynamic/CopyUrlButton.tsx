import ClipboardIcon from '@root/assets/icons/solid/ClipboardIcon';
import type { ClassNameProps } from '@root/types/common/props';
import { convertUrlObject, onCopyToClipboard } from '@root/utils/common';
import { alertAtom } from '@root/utils/store';
import { useAtom } from 'jotai';
import type { UrlObject } from 'url';

type CopyUrlButtonProps = {
	label?: string;
	url: UrlObject;
} & ClassNameProps;

export default function CopyUrlButton({ className, label = 'Copy URL', url }: CopyUrlButtonProps) {
	const [, pushAlert] = useAtom(alertAtom);

	return (
		<button
			aria-label={label}
			className={`btn btn-square btn-primary btn-xs my-auto ${className}`}
			onClick={() =>
				onCopyToClipboard({
					input: convertUrlObject(url),
					onFailure: message => pushAlert({ isOpen: true, message }),
					onSuccess: () => pushAlert({ isOpen: true, message: 'Url copied to clipboard' }),
				})
			}
			role='button'
		>
			<ClipboardIcon className='aspect-square h-4' />
		</button>
	);
}
