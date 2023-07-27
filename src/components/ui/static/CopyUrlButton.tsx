import ClipboardIcon from '@root/assets/icons/outline/ClipboardIcon';
import type { ClassNameProps } from '@root/types/common/props';
import { convertUrlObject } from '@root/utils/common';
import type { UrlObject } from 'url';

type CopyUrlButtonProps = {
	label?: string;
	url: UrlObject;
	isGroup?: boolean;
} & ClassNameProps;

export default function CopyUrlButton({ className, label = 'Copy URL', url, isGroup }: CopyUrlButtonProps) {
	return (
		<div className={`flex lg:tooltip lg:tooltip-bottom ${className}`} data-tip={label}>
			<button
				aria-label={label}
				className={`btn btn-primary btn-xs my-auto border-2 ${isGroup ? 'join-item' : ''}`}
				onClick={() => navigator.clipboard.writeText(convertUrlObject(url))}
				role='button'
			>
				<ClipboardIcon className='aspect-square h-4' />
			</button>
		</div>
	);
}
