import ChevronUpDownIcon from '@components/icons/solid/ChevronUpDownIcon';
import { ListboxButton } from '@headlessui/react';
import type { SelectOptionItem } from '@root/types/common';
import { cn, convertCode } from '@root/utils/common';
import type { ReactNode } from 'react';

type Props<V extends string | number> = Readonly<{
	isDisabled: boolean;
	isHideLabel?: boolean;
	customLabelText?: ReactNode;
	customLabelIcon?: ReactNode;
	value: SelectOptionItem<V>;
}>;

export default function CustomListboxButton<V extends string | number>({
	isDisabled,
	value: { icon, label, value },
	isHideLabel,
	customLabelText,
	customLabelIcon
}: Props<V>) {
	return (
		<ListboxButton
			className={cn(
				'relative w-full rounded-lg bg-base-100 px-4 py-2 text-left text-xs shadow-md shadow-base-content focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-base-100/75 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary xl:text-sm',
				isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
			)}
		>
			<span className='flex items-center gap-2 truncate font-bold'>
				{customLabelIcon || icon || <ChevronUpDownIcon className='my-auto aspect-square h-4 xl:h-5' aria-hidden />}

				{!isHideLabel ? (
					<span className='capitalize'>{customLabelText || convertCode(`${label ?? (value || '')}`)}</span>
				) : null}
			</span>
		</ListboxButton>
	);
}
