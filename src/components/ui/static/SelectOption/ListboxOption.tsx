import { Listbox } from '@headlessui/react';
import CheckIcon from '@root/assets/icons/solid/CheckIcon';
import type { SelectOptionItem } from '@root/types/common';
import { convertCode } from '@root/utils/common';

type ListboxOptionProps<V extends string | number | null> = {
	isSelected: boolean;
	optionValue: SelectOptionItem<V>;
	useCustomIcon?: boolean;
};

export default function ListboxOption<V extends string | number | null>({
	isSelected,
	optionValue,
	useCustomIcon,
}: ListboxOptionProps<V>) {
	return (
		<Listbox.Option
			className={`flex cursor-pointer select-none gap-2 bg-base-100 px-4 py-2 transition-[background] ${
				isSelected ? 'bg-primary/10 font-bold text-primary' : 'hover:bg-secondary/10'
			}`}
			value={optionValue}
		>
			<span className='flex items-center gap-2 truncate text-xs xl:text-sm'>
				{isSelected || useCustomIcon ? (
					<>
						{useCustomIcon ? (
							optionValue.icon || <span className='aspect-square h-4 xl:h-5' aria-hidden='true' />
						) : (
							<CheckIcon className='aspect-square h-4 xl:h-5' aria-hidden='true' />
						)}
					</>
				) : (
					<span className='aspect-square h-4 xl:h-5' aria-hidden='true' />
				)}

				<span className='capitalize'>{convertCode(optionValue.label ?? optionValue.value)}</span>
			</span>
		</Listbox.Option>
	);
}
