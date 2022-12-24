import { framerFadeUp } from '@root/constants/animations';
import type { RecordWrapperProps } from '@root/types/common/props';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const RecordWrapper: FC<RecordWrapperProps> = ({ children, className }) => {
	return (
		<motion.article {...framerFadeUp} className={clsx(className, 'card bg-base-100 grid w-full grow-0 shadow-2xl')}>
			<div className='card-body'>{children}</div>
		</motion.article>
	);
};

export default RecordWrapper;
