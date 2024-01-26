import type { ChildrenProps, ClassNameProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';

type CommonWrapperProps = ChildrenProps & ClassNameProps;

export default function CommonWrapper({ className, children }: CommonWrapperProps) {
	return (
		<article className={cn('card relative p-1.5', className)}>
			<div className='absolute inset-y-0 left-0 w-1/3 rounded-[inherit] bg-gradient-to-br from-accent to-primary shadow-lg shadow-primary' />

			<div className='absolute inset-y-0 right-0 w-1/3 rounded-[inherit] bg-gradient-to-tl from-accent to-primary shadow-lg shadow-primary' />

			<div className='card-body z-10 gap-3 rounded-[inherit] bg-base-100 p-[1.625rem] text-base-content shadow-inner shadow-base-content'>
				{children}
			</div>
		</article>
	);
}
