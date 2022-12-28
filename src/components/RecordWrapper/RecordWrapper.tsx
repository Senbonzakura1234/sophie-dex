import { getFramerFadeUp } from '@root/animations';
import type { RecordWrapperProps } from '@root/types/common/props';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const RecordWrapper: FC<RecordWrapperProps> = ({ children, className, color }) => (
	<motion.article
		{...getFramerFadeUp(0, 10, 0.1)}
		className={clsx(
			{
				'shadow-primary to-base-100': !color,
				'to-blue-500 shadow-blue-500': color === 'BLUE',
				'to-green-500 shadow-green-500': color === 'GREEN',
				'to-red-500 shadow-red-500': color === 'RED',
				'to-slate-500 shadow-slate-500': color === 'WHITE',
				'to-yellow-400 shadow-yellow-400': color === 'YELLOW',
			},
			className,
			'card from-base-100 via-base-100 relative grid w-full grow-0 bg-gradient-to-r shadow-lg',
		)}
	>
		<div className='card-body'>{children}</div>
	</motion.article>
);

export default RecordWrapper;
