import type { COLOR } from '@prisma/client';
import type { FC } from 'react';

import BLUE from './BLUE';
import GREEN from './GREEN';
import NONE from './NONE';
import RED from './RED';
import WHITE from './WHITE';
import YELLOW from './YELLOW';

const Color: FC<{ color: COLOR }> = ({ color }) => {
	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold'>Color: </div>
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
