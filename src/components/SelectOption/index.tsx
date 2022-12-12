import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import type { SelectOptionItem } from '@root/types/common';
import clsx from 'clsx';
import type { Dispatch, SetStateAction } from 'react';
import { Fragment } from 'react';

export default function SelectOption<V extends string | number | null>({
	list,
	value,
	setValue,
	className,
	withIcon = false,
	useCustomIcon = false,
	useAtelierFont = false,
}: {
	value: SelectOptionItem<V>;
	list: SelectOptionItem<V>[];
	setValue: Dispatch<SetStateAction<SelectOptionItem<V>>>;
	className?: string;
	withIcon?: boolean;
	useCustomIcon?: boolean;
	useAtelierFont?: boolean;
}) {
	return (
		<menu className={className}>
			<Listbox value={value} onChange={setValue} disabled={list.length === 1}>
				<div className='relative'>
					<Listbox.Button
						className={clsx(
							{
								'cursor-not-allowed opacity-50': list.length === 1,
							},
							'focus-visible:border-primary-focus focus-visible:ring-offset-secondary-focus relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left text-xs shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 xl:text-sm',
						)}
					>
						<span className='flex gap-2 truncate pl-1 font-bold'>
							<span className={clsx({ 'font-atelier': useAtelierFont })}>{withIcon && value.icon}</span>
							{value.label}
						</span>
						<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
							<ChevronUpDownIcon className='h-4 w-4 xl:h-5 xl:w-5' aria-hidden='true' />
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave='transition ease-in duration-100'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<Listbox.Options className='legacy-scroll-area absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
							{list.map((item, index) => (
								<Listbox.Option
									key={index}
									className={({ active }) =>
										clsx(
											{
												'bg-primary/10 text-primary': active,
												'pl-10': withIcon || useCustomIcon,
												'pl-4': !withIcon && !useCustomIcon,
											},
											'relative cursor-default select-none py-2  pr-4',
										)
									}
									value={item}
								>
									<span
										className={clsx(
											{
												'font-bold': item.value === value.value,
											},
											'xl:text-md block truncate text-sm',
										)}
									>
										{item.label}
									</span>
									{(item.value === value.value && withIcon) || useCustomIcon ? (
										<span
											className={clsx(
												{ 'font-atelier': useAtelierFont },
												{ 'text-primary': !useCustomIcon },
												' absolute inset-y-0 left-0 flex items-center pl-3',
											)}
										>
											{useCustomIcon ? (
												item.icon
											) : (
												<CheckIcon className='h-4 w-4 xl:h-5 xl:w-5' aria-hidden='true' />
											)}
										</span>
									) : null}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</menu>
	);
}
