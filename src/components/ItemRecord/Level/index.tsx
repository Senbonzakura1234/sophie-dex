import type { LevelProps } from '@root/types/common/props';
import type { FC } from 'react';

const Level: FC<LevelProps> = ({ level }) => {
	return (
		<div className='absolute -right-20 -top-20 flex aspect-square h-40 w-40 rotate-45 bg-gradient-to-br from-[#ceb69c] to-[#7e6018]'>
			<div className='m-auto h-[81%] w-[81%] bg-[#7b604d] text-center text-[#cca667] shadow-inner shadow-slate-700'>
				<div className='grid h-full w-full -rotate-45 place-content-center gap-1'>
					<div className='relative top-7 right-7 text-sm font-extrabold leading-[0.5]'>Lv. {level}</div>
				</div>
			</div>
		</div>
	);
};

export default Level;
