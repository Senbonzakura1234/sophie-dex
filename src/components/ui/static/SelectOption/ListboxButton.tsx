import { Listbox } from '@headlessui/react';
import ChevronUpDownIcon from '@root/assets/icons/solid/ChevronUpDownIcon';
import type { SelectOptionItem } from '@root/types/common';
import { convertCode } from '@root/utils/common';

type ListboxButtonProps<V extends string | number | null> = {
	isDisabled: boolean;
	value: SelectOptionItem<V>;
};

export default function ListboxButton<V extends string | number | null>({
	isDisabled,
	value: { icon, label, value },
}: ListboxButtonProps<V>) {
	return (
		<Listbox.Button
			className={`relative w-full rounded-lg bg-base-100 px-4 py-2 text-left text-xs shadow-lg focus:outline-none focus-visible:border-primary-focus focus-visible:ring-2 focus-visible:ring-base-100/75 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-focus xl:text-sm ${
				isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
			}`}
		>
			<span className='flex items-center gap-2 truncate font-bold'>
				{icon || <ChevronUpDownIcon className='my-auto aspect-square h-4 xl:h-5' aria-hidden />}

				<span className='capitalize'>{convertCode(label ?? value)}</span>
			</span>
		</Listbox.Button>
	);
}
