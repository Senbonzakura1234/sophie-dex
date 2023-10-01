import type { ChildrenProps, ClassNameProps } from '@root/types/common/props';

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
	activeStyleType,
}: TabWrapperProps) {
	return (
		<nav className={`overflow-hidden bg-base-100 shadow-lg shadow-base-content/30 ${className}`}>
			<div
				className='relative grid text-center text-sm'
				style={{ gridTemplateColumns: `repeat(${tabListLength}, minmax(0, 1fr))` }}
			>
				<div
					className={`to absolute bottom-0 bg-primary transition-transform
						${activeStyleType === 'background' ? 'top-0' : ''}
						${activeStyleType === 'border' ? 'top-[93%]' : ''}
					`}
					style={{
						transform: `translate(calc(${100 * selectedIndex}%))`,
						width: `calc(100%/${tabListLength})`,
					}}
				/>

				{children}
			</div>
		</nav>
	);
}
