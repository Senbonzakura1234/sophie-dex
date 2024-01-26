import type { ClassNameProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';
import PulsePlaceHolder from './PulsePlaceHolder';

type RecordPlaceholderProps = ClassNameProps;

export default function RecordPlaceholder({ className }: RecordPlaceholderProps) {
	return (
		<article className={cn('card relative my-auto h-full p-1.5', className)}>
			<div className='absolute inset-y-0 left-0 w-1/3 rounded-[inherit] bg-gradient-to-br from-accent to-primary shadow-lg shadow-primary' />

			<div className='absolute inset-y-0 right-0 w-1/3 rounded-[inherit] bg-gradient-to-l  from-accent to-primary shadow-lg shadow-primary' />

			<div className='card-body z-10 h-60 gap-3 overflow-hidden rounded-[inherit] bg-base-100 p-0 shadow-inner shadow-base-content'>
				<PulsePlaceHolder className='size-full' />
			</div>
		</article>
	);
}
