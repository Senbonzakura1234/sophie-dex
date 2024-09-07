import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import type { ClassNameProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';
import Link from 'next/link';
import type { ComponentProps, MouseEventHandler, ReactNode } from 'react';

export type Props = Readonly<{
	buttonLabel?: ReactNode;
	items: Array<
		(
			| { href: ComponentProps<typeof Link>['href']; type: 'link'; label: ReactNode }
			| { type: 'button'; onClick?: MouseEventHandler<HTMLButtonElement>; label: ReactNode }
			| { type: 'static'; label: ReactNode }
			| { type: 'separator' }
		) &
			ClassNameProps
	>;
	className?: { root?: string; menuBtn?: string; dropdown?: string; item?: string };
	anchor?: ComponentProps<typeof MenuItems>['anchor'];
}>;

export default function Dropdown({ buttonLabel: buttonText, className, items, anchor = 'left' }: Props) {
	return (
		<Menu as='menu' className={cn('relative z-50', className?.root)}>
			<MenuButton
				as='button'
				className={cn(
					'relative gap-2 flex h-8 xl:h-9 items-center w-full cursor-pointer rounded-lg bg-base-100 px-4 text-left text-xs font-bold shadow-lg shadow-base-content/20 focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-base-100/75 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary xl:text-sm',
					className?.menuBtn
				)}
			>
				{buttonText}
			</MenuButton>

			<Transition
				enter='transition-[opacity,transform] duration-500'
				enterFrom='translate-y-5 opacity-0'
				enterTo='opacity-1 translate-y-1'
				leave='transition-[opacity,transform] duration-500'
				leaveFrom='opacity-1 translate-y-1'
				leaveTo='translate-y-5 opacity-0'
			>
				<MenuItems
					anchor={anchor}
					className={cn(
						'legacy-scroll-area w-full z-50 max-h-52 overflow-auto rounded-md bg-base-100 py-1 shadow-lg shadow-base-content/30',
						className?.dropdown
					)}
				>
					{items.map((item, key) => {
						if (item.type === 'separator')
							return (
								<div className='px-4' key={key}>
									<div className='divider m-0' />
								</div>
							);

						if (item.type === 'static')
							return (
								<MenuItem
									as='div'
									key={key}
									className={cn(
										'w-full flex select-none gap-2 bg-base-100 px-4 py-2 transition-[background]',
										className?.item,
										item.className
									)}
								>
									{item.label}
								</MenuItem>
							);

						if (item.type === 'button')
							return (
								<MenuItem
									as='button'
									key={key}
									onClick={item.onClick}
									className={cn(
										'w-full flex cursor-pointer select-none gap-2 bg-base-100 px-4 py-2 transition-[background] data-[focus]:bg-primary/10 data-[focus]:font-bold data-[focus]:text-primary',
										className?.item,
										item.className
									)}
								>
									{item.label}
								</MenuItem>
							);

						return (
							<MenuItem
								as={Link}
								key={key}
								href={item.href}
								className={cn(
									'w-full flex cursor-pointer select-none gap-2 bg-base-100 px-4 py-2 transition-[background] data-[focus]:bg-primary/10 data-[focus]:font-bold data-[focus]:text-primary',
									className?.item,
									item.className
								)}
							>
								{item.label}
							</MenuItem>
						);
					})}
				</MenuItems>
			</Transition>
		</Menu>
	);
}
