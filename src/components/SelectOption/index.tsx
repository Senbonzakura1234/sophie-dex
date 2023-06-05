import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { getFramerFadeUp } from '@root/animations';
import AnimationWrapper from '@root/components/AnimationWrapper';
import type { SelectOptionItem, SetSelectOptionItem } from '@root/types/common';
import type { ClassNameProps } from '@root/types/common/props';
import { LazyMotion, domAnimation } from 'framer-motion';

type SelectOptionProps<V> = {
	value: SelectOptionItem<V>;
	list: SelectOptionItem<V>[];
	setValue: SetSelectOptionItem<V>;
	withIcon?: boolean;
	useCustomIcon?: boolean;
	useAtelierFont?: boolean;
} & ClassNameProps;

export default function SelectOption<V extends string | number | null>({
	list,
	value,
	setValue,
	className,
	withIcon = false,
	useCustomIcon = false,
	useAtelierFont = false,
}: SelectOptionProps<V>) {
	return (
		<menu className={className}>
			<Listbox value={value} onChange={setValue} disabled={list.length <= 1}>
				{({ open }) => (
					<div className='relative'>
						<Listbox.Button
							className={`relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left text-xs shadow-lg focus:outline-none focus-visible:border-primary-focus focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary-focus 2xl:text-sm ${
								list.length <= 1 && 'cursor-not-allowed opacity-50'
							}`}
						>
							<span className='flex gap-2 truncate pl-1 font-bold'>
								<span className={useAtelierFont ? 'font-atelier' : ''}>{withIcon && value.icon}</span>
								{value.label}
							</span>
							<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
								<ChevronUpDownIcon className='h-4 w-4 2xl:h-5 2xl:w-5' aria-hidden='true' />
							</span>
						</Listbox.Button>
						<LazyMotion features={domAnimation} strict>
							<AnimationWrapper
								options={getFramerFadeUp(0, 20)}
								className='absolute z-10 mt-1 w-full'
								show={open}
							>
								<Listbox.Options className='legacy-scroll-area h-full max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
									{list.map((item, key) => {
										const isSelected = item.value === value.value || (key === 0 && value.value == null);

										return (
											<Listbox.Option
												key={key}
												className={({ active }) =>
													`relative cursor-default select-none py-2 pr-4 ${
														active && 'bg-primary/10 text-primary'
													} ${withIcon || useCustomIcon ? 'pl-10' : 'pl-4'}`
												}
												value={item}
											>
												<span className={`2xl:text-md block truncate text-sm ${isSelected && 'font-bold'}`}>
													{item.label}
												</span>
												{(isSelected && withIcon) || useCustomIcon ? (
													<span
														className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
															useAtelierFont && 'font-atelier'
														} ${!useCustomIcon && 'text-primary'}`}
													>
														{useCustomIcon ? (
															item.icon
														) : (
															<CheckIcon className='h-4 w-4 2xl:h-5 2xl:w-5' aria-hidden='true' />
														)}
													</span>
												) : null}
											</Listbox.Option>
										);
									})}
								</Listbox.Options>
							</AnimationWrapper>
						</LazyMotion>
					</div>
				)}
			</Listbox>
		</menu>
	);
}
