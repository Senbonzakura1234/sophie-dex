import CheckIcon from '@components/icons/solid/CheckIcon';
import { ListboxOption } from '@headlessui/react';
import type { SelectOptionItem } from '@root/types/common';
import { cn, convertCode } from '@root/utils/common';

type ListboxOptionProps<V extends string | number> = {
	isHideLabel?: boolean;
	isSelected: boolean;
	optionValue: SelectOptionItem<V>;
	useCustomIcon?: boolean;
};

export default function CustomListboxOption<V extends string | number>({
	isSelected,
	isHideLabel,
	optionValue,
	useCustomIcon,
}: ListboxOptionProps<V>) {
	return (
		<ListboxOption<'li', SelectOptionItem<V>>
			as='li'
			className={cn(
				'flex cursor-pointer select-none gap-2 bg-base-100 px-4 py-2 transition-[background]',
				isSelected ? 'bg-primary/10 font-bold text-primary' : 'hover:bg-secondary/10',
			)}
			value={optionValue}
		>
			<span className='flex items-center gap-2 truncate text-xs xl:text-sm'>
				{isSelected || useCustomIcon ? (
					<>
						{useCustomIcon ? (
							optionValue.icon || <span className='aspect-square h-4 xl:h-5' aria-hidden />
						) : (
							<CheckIcon className='aspect-square h-4 xl:h-5' aria-hidden />
						)}
					</>
				) : (
					<span className='aspect-square h-4 xl:h-5' aria-hidden />
				)}

				{!isHideLabel ? (
					<span className='capitalize'>{convertCode(`${optionValue.label ?? (optionValue.value || '')}`)}</span>
				) : null}
			</span>
		</ListboxOption>
	);
}
