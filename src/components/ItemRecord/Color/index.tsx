import type { ColorProps } from '@root/types/common/props';
import type { FC } from 'react';

import BLUE from './BLUE';
import GREEN from './GREEN';
import NONE from './NONE';
import RED from './RED';
import WHITE from './WHITE';
import YELLOW from './YELLOW';

const Color: FC<ColorProps> = ({ color }) => {
	return (
		<div className='flex max-w-fit flex-wrap gap-2 [&>*]:shadow-md [&>*]:shadow-slate-600'>
			<div className='font-bold !shadow-none'>Color: </div>
			{color === 'RED' && <RED color={color} />}
			{color === 'BLUE' && <BLUE color={color} />}
			{color === 'GREEN' && <GREEN color={color} />}
			{color === 'YELLOW' && <YELLOW color={color} />}
			{color === 'WHITE' && <WHITE color={color} />}
			{color === 'NONE' && <NONE color={color} />}
		</div>
	);
};

export default Color;
