import { getFramerInViewFadeUp } from '@root/animations';
import { m as motion } from 'framer-motion';

export function RecordPlaceholder() {
	return (
		<motion.div {...getFramerInViewFadeUp()} className='card-body flex h-60 animate-pulse gap-3'>
			<div className='flex flex-row items-center gap-3'>
				<div className='h-4 w-4 rounded-full bg-slate-300'></div>
				<div className='h-5 w-60 rounded bg-slate-300'></div>
			</div>

			<div className='h-[14px] w-16 rounded bg-slate-300' />

			<div className='grid gap-[10px]'>
				<div className='grid grid-cols-3 gap-4'>
					<div className='col-span-2 h-[18px] rounded bg-slate-300'></div>
					<div className='col-span-1 h-[18px] rounded bg-slate-300'></div>
				</div>
				<div className='h-[18px] w-full rounded bg-slate-300' />
				<div className='grid grid-cols-2 gap-4'>
					<div className='col-span-1 h-[18px] rounded bg-slate-300'></div>
					<div className='col-span-1 h-[18px] rounded bg-slate-300'></div>
				</div>
			</div>
		</motion.div>
	);
}
