import { Listbox } from '@headlessui/react';
import CheckIcon from '@root/assets/icons/solid/CheckIcon';
import ChevronUpDownIcon from '@root/assets/icons/solid/ChevronUpDownIcon';
import type { SelectOptionItem, SetSelectOptionItem } from '@root/types/common';
import type { ClassNameProps } from '@root/types/common/props';

type SelectOptionProps<V> = {
	value: SelectOptionItem<V>;
	list: SelectOptionItem<V>[];
	setValue: SetSelectOptionItem<V>;
	useCustomIcon?: boolean;
} & ClassNameProps;

export default function SelectOption<V extends string | number | null>({
	list,
	value,
	setValue,
	className,
	useCustomIcon = false,
}: SelectOptionProps<V>) {
	return (
		<menu className={className}>
			<Listbox value={value} onChange={setValue} disabled={list.length <= 1}>
				{({ open }) => (
					<div className='relative'>
						<Listbox.Button
							className={`relative w-full rounded-lg bg-base-100 px-4 py-2 text-left text-xs shadow-lg focus:outline-none focus-visible:border-primary-focus focus-visible:ring-2 focus-visible:ring-base-100/75 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-focus xl:text-sm ${
								list.length <= 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
							}`}
						>
							<span className='flex items-center gap-2 truncate font-bold'>
								{value.icon || (
									<ChevronUpDownIcon className='my-auto aspect-square h-4 xl:h-5' aria-hidden='true' />
								)}
								{value.label}
							</span>
						</Listbox.Button>
						<div
							className={`absolute z-10 w-full transition-[opacity,transform] duration-500 ${
								open ? 'opacity-1 translate-y-1' : 'translate-y-5 opacity-0'
							}`}
						>
							<Listbox.Options className='legacy-scroll-area h-full max-h-60 w-full overflow-auto rounded-md bg-base-100 py-1 shadow-lg ring-1 ring-slate-900/5 focus:outline-none'>
								{list.map((item, key) => {
									const isSelected = item.value === value.value || (key === 0 && value.value == null);

									return (
										<Listbox.Option
											key={key}
											className={`flex cursor-pointer select-none gap-2 px-4 py-2 ${
												isSelected ? 'bg-primary/10 font-bold text-primary' : ''
											}`}
											value={item}
										>
											<span className='flex items-center gap-2 truncate text-xs xl:text-sm'>
												{isSelected || useCustomIcon ? (
													<>
														{useCustomIcon ? (
															item.icon || (
																<span className='aspect-square h-4 xl:h-5' aria-hidden='true' />
															)
														) : (
															<CheckIcon className='aspect-square h-4 xl:h-5' aria-hidden='true' />
														)}
													</>
												) : (
													<span className='aspect-square h-4 xl:h-5' aria-hidden='true' />
												)}

												{item.label}
											</span>
										</Listbox.Option>
									);
								})}
							</Listbox.Options>
						</div>
					</div>
				)}
			</Listbox>
		</menu>
	);
}
