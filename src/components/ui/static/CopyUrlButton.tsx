import ClipboardIcon from '@root/assets/icons/solid/ClipboardIcon';
import { alertAtom } from '@root/components/ScrollWrapper/Alert';
import type { ClassNameProps } from '@root/types/common/props';
import { convertUrlObject } from '@root/utils/common';
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
			onClick={() => {
				pushAlert({ isOpen: true, message: 'Url Copied' });
				return navigator.clipboard.writeText(convertUrlObject(url));
			}}
			role='button'
		>
			<ClipboardIcon className='aspect-square h-4' />
		</button>
	);
}
