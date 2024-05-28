import { Listbox, ListboxOptions, Transition } from '@headlessui/react';
import type { SelectOptionItem, SetSelectOptionItem } from '@root/types/common';
import type { ClassNameProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';
import type { ReactNode } from 'react';
import CustomListboxButton from './CustomListboxButton';
import CustomListboxOption from './CustomListboxOption';

type SelectOptionProps<V extends string | number> = {
	value: SelectOptionItem<V>;
	list: Array<SelectOptionItem<V>>;
	setValue: SetSelectOptionItem<V>;
	useCustomIcon?: boolean;
	isHideLabel?: boolean;
	customLabelText?: ReactNode;
	customLabelIcon?: ReactNode;
} & ClassNameProps;

export default function SelectOption<V extends string | number>({
	list,
	value,
	setValue,
	className,
	useCustomIcon,
	isHideLabel,
	customLabelText,
	customLabelIcon
}: SelectOptionProps<V>) {
	const isDisabled = list.length <= 1;

	return (
		<Listbox as='menu' className={cn('relative', className)} value={value} onChange={setValue} disabled={isDisabled}>
			<CustomListboxButton
				isDisabled={isDisabled}
				value={value}
				isHideLabel={isHideLabel}
				customLabelText={customLabelText}
				customLabelIcon={customLabelIcon}
			/>

			<Transition
				as='div'
				className='absolute z-10 w-full'
				enter='transition-[opacity,transform] duration-500'
				enterFrom='translate-y-5 opacity-0'
				enterTo='opacity-1 translate-y-1'
				leave='transition-[opacity,transform] duration-500'
				leaveFrom='opacity-1 translate-y-1'
				leaveTo='translate-y-5 opacity-0'
			>
				<ListboxOptions
					as='ul'
					className='legacy-scroll-area size-full max-h-52 overflow-auto rounded-md bg-base-100 py-1 shadow-lg shadow-base-content/30'
				>
					{list.map((item, key) => (
						<CustomListboxOption
							key={key}
							isHideLabel={isHideLabel}
							isSelected={item.value === value.value || (key === 0 && value.value == null)}
							optionValue={item}
							useCustomIcon={useCustomIcon}
						/>
					))}
				</ListboxOptions>
			</Transition>
		</Listbox>
	);
}
