import type { LevelProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';

const Level: FC<LevelProps> = ({ level, color }) => (
	<div
		className={clsx(
			{
				'bg-blue-500 text-slate-50': color === 'BLUE',
				'bg-green-500 text-slate-50': color === 'GREEN',
				'bg-red-500 text-slate-50': color === 'RED',
				'bg-slate-300 text-slate-900': color === 'WHITE',
				'bg-yellow-400 text-slate-50': color === 'YELLOW',
			},
			'absolute -right-36 -top-20 flex aspect-square h-40 w-80 rotate-[50deg] text-center shadow-inner',
		)}
	>
		<div className='grid h-full w-full -rotate-[50deg] place-content-center gap-1'>
			<div className='relative top-7 right-7 text-sm font-extrabold leading-[0.5]'>Lv. {level}</div>
		</div>
	</div>
);

export default Level;
