import type { ChildrenProps, ClassNamesProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';

type Props = Readonly<ChildrenProps & ClassNamesProps>;

export default function CommonWrapper({ classNames, children }: Props) {
	return (
		<article className={cn('card relative p-1.5', classNames?.wrapper)}>
			<div className='absolute inset-y-0 left-0 w-1/3 rounded-[inherit] bg-gradient-to-br from-accent to-primary shadow-lg shadow-primary' />

			<div className='absolute inset-y-0 right-0 w-1/3 rounded-[inherit] bg-gradient-to-tl from-accent to-primary shadow-lg shadow-primary' />

			<div
				className={cn(
					'card-body z-10 gap-3 rounded-[inherit] bg-base-100 p-[1.625rem] text-base-content shadow-inner shadow-base-content',
					classNames?.content
				)}
			>
				{children}
			</div>
		</article>
	);
}
