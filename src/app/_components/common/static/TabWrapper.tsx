import type { ChildrenProps, ClassNameProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';

type TabWrapperProps = {
	selectedIndex: number;
	tabListLength: number;
	activeStyleType: 'background' | 'border';
} & ChildrenProps &
	ClassNameProps;

export default function TabWrapper({
	tabListLength,
	selectedIndex,
	children,
	className,
	activeStyleType
}: TabWrapperProps) {
	return (
		<nav className={cn('overflow-hidden bg-base-100 shadow-lg shadow-base-content/30', className)}>
			<div
				className='relative grid text-center text-sm'
				style={{ gridTemplateColumns: `repeat(${tabListLength}, minmax(0, 1fr))` }}
			>
				<div
					className={cn(
						'to absolute bottom-0 bg-primary transition-transform',
						{ 'top-0': activeStyleType === 'background' },
						{ 'top-[93%]': activeStyleType === 'border' }
					)}
					style={{
						transform: `translate(calc(${100 * selectedIndex}%))`,
						width: `calc(100%/${tabListLength})`
					}}
				/>
				{children}
			</div>
		</nav>
	);
}
