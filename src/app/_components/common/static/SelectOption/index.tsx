import { Listbox, ListboxOptions } from '@headlessui/react';
import type { SelectOptionItem, SetSelectOptionItem } from '@root/types/common';
import type { ClassNameProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';
import type { ReactNode } from 'react';
import CustomListboxButton from './CustomListboxButton';
import CustomListboxOption from './CustomListboxOption';

type Props<V extends string | number> = Readonly<
	{
		value: SelectOptionItem<V>;
		filterList: Array<SelectOptionItem<V>>;
		setValue: SetSelectOptionItem<V>;
		useCustomIcon?: boolean;
		isHideLabel?: boolean;
		customLabelText?: ReactNode;
		customLabelIcon?: ReactNode;
	} & ClassNameProps
>;

export default function SelectOption<V extends string | number>({
	filterList,
	value,
	setValue,
	className,
	useCustomIcon,
	isHideLabel,
	customLabelText,
	customLabelIcon
}: Props<V>) {
	const isDisabled = filterList.length <= 1;

	return (
		<Listbox as='menu' className={cn('relative', className)} value={value} onChange={setValue} disabled={isDisabled}>
			<CustomListboxButton
				isDisabled={isDisabled}
				value={value}
				isHideLabel={isHideLabel}
				customLabelText={customLabelText}
				customLabelIcon={customLabelIcon}
			/>

			<ListboxOptions
				anchor={{ gap: '0.25rem', padding: '0.25rem', to: 'bottom' }}
				as='ul'
				className={cn(
					'legacy-scroll-area !max-h-52 z-50 overflow-auto rounded-md bg-base-100 py-1 shadow-lg shadow-base-content/30',
					'transition duration-500 ease-out',
					'data-[closed]:translate-y-5 data-[closed]:opacity-0'
				)}
				portal={false}
				transition
			>
				{filterList.map((item, key) => (
					<CustomListboxOption
						key={key}
						isHideLabel={isHideLabel}
						isSelected={item.value === value.value || (key === 0 && value.value == null)}
						optionValue={item}
						useCustomIcon={useCustomIcon}
					/>
				))}
			</ListboxOptions>
		</Listbox>
	);
}
