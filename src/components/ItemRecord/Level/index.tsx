import type { FC } from 'react';

type LevelProps = { level: number };

const Level: FC<LevelProps> = ({ level }) => (
	<div className='absolute right-10 top-9 grid w-10 place-content-center gap-1 text-center font-extrabold leading-[0.5] text-slate-50'>
		<div className='text-center text-xs md:text-lg'>Lv</div>
		<div className='text-lg md:text-4xl'>{level}</div>
	</div>
);

export default Level;
