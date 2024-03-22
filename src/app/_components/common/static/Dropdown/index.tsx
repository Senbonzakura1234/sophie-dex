'use client';

import { Menu } from '@headlessui/react';
import { cn } from '@root/utils/common';
import Link from 'next/link';
import type { ComponentProps, MouseEventHandler, ReactNode } from 'react';

export type DropdownProps = {
	buttonLabel?: ReactNode;
	items: Array<
		| { href: ComponentProps<typeof Link>['href']; type: 'link'; label: ReactNode }
		| { type: 'button'; onClick?: MouseEventHandler<HTMLButtonElement>; label: ReactNode }
		| { type: 'static'; label: ReactNode }
		| { type: 'separator' }
	>;
	className?: {
		root?: string | undefined;
		menuBtn?: string | undefined;
		dropdown?: string | undefined;
		item?: string | undefined;
	};
	anchor?: 'left' | 'right';
};

export default function Dropdown({ buttonLabel: buttonText, className, items, anchor = 'left' }: DropdownProps) {
	return (
		<menu className={className?.root}>
			<Menu>
				{({ open }) => (
					<div className='relative'>
						<Menu.Button
							className={cn(
								'relative gap-2 flex h-8 xl:h-9 items-center w-full cursor-pointer rounded-lg bg-base-100 px-4 text-left text-xs font-bold shadow-lg shadow-base-content/20 focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-base-100/75 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary xl:text-sm',
								className?.menuBtn,
							)}
						>
							{buttonText}
						</Menu.Button>

						<div
							className={cn(
								'absolute z-10 transition-[opacity,transform] duration-500',
								anchor === 'left' ? 'left-0' : 'right-0',
								open ? 'opacity-1 translate-y-1' : 'translate-y-5 opacity-0',
							)}
						>
							<Menu.Items
								className={cn(
									'legacy-scroll-area max-h-52 overflow-auto rounded-md bg-base-100 py-1 shadow-lg shadow-base-content/30',
									className?.dropdown,
								)}
							>
								{items.map((item, key) => (
									<Menu.Item key={key}>
										{({ active }) => {
											if (item.type === 'separator')
												return (
													<div className='px-4'>
														<div className='divider m-0' />
													</div>
												);
											if (item.type === 'static')
												return (
													<div
														className={cn(
															'w-full flex select-none gap-2 bg-base-100 px-4 py-2 transition-[background]',
															className?.item,
														)}
													>
														{item.label}
													</div>
												);

											if (item.type === 'button')
												return (
													<button
														onClick={item.onClick}
														className={cn(
															'w-full flex cursor-pointer select-none gap-2 bg-base-100 px-4 py-2 transition-[background]',
															active ? 'bg-primary/10 font-bold text-primary' : '',
															className?.item,
														)}
													>
														{item.label}
													</button>
												);

											return (
												<Link
													href={item.href}
													className={cn(
														'w-full flex cursor-pointer select-none gap-2 bg-base-100 px-4 py-2 transition-[background]',
														active ? 'bg-primary/10 font-bold text-primary' : '',
														className?.item,
													)}
												>
													{item.label}
												</Link>
											);
										}}
									</Menu.Item>
								))}
							</Menu.Items>
						</div>
					</div>
				)}
			</Menu>
		</menu>
	);
}
