import { getFramerFadeUp } from '@root/animations';
import type { RecordWrapperProps } from '@root/types/common/props';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const RecordWrapper: FC<RecordWrapperProps> = ({ children, className }) => (
	<motion.article
		{...getFramerFadeUp(0, 10, 0.1)}
		className={clsx(
			className,
			'card bg-base-100 shadow-primary relative grid w-full grow-0 overflow-hidden shadow-lg',
		)}
	>
		<div className='card-body'>{children}</div>
	</motion.article>
);

export default RecordWrapper;
