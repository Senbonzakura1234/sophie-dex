import { Listbox } from '@headlessui/react';
import type { SelectOptionItem, SetSelectOptionItem } from '@root/types/common';
import type { ClassNameProps } from '@root/types/common/props';
import ListboxButton from './ListboxButton';
import ListboxOption from './ListboxOption';

type SelectOptionProps<V> = {
	value: SelectOptionItem<V>;
	list: SelectOptionItem<V>[];
	setValue: SetSelectOptionItem<V>;
	useCustomIcon?: boolean;
} & ClassNameProps;

export default function SelectOption<V extends string | number>({
	list,
	value,
	setValue,
	className,
	useCustomIcon = false,
}: SelectOptionProps<V>) {
	const isDisabled = list.length <= 1;

	return (
		<menu className={className}>
			<Listbox value={value} onChange={setValue} disabled={isDisabled}>
				{({ open }) => (
					<div className='relative'>
						<ListboxButton isDisabled={isDisabled} value={value} />

						<div
							className={`absolute z-10 w-full transition-[opacity,transform] duration-500 ${
								open ? 'opacity-1 translate-y-1' : 'translate-y-5 opacity-0'
							}`}
						>
							<Listbox.Options className='legacy-scroll-area h-full max-h-60 w-full overflow-auto rounded-md bg-base-100 py-1 shadow-lg ring-1 ring-slate-900/5 focus:outline-none'>
								{list.map((item, key) => (
									<ListboxOption
										key={key}
										isSelected={item.value === value.value || (key === 0 && value.value == null)}
										optionValue={item}
										useCustomIcon={useCustomIcon}
									/>
								))}
							</Listbox.Options>
						</div>
					</div>
				)}
			</Listbox>
		</menu>
	);
}
