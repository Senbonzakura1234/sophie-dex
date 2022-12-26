import { getFramerFadeUp } from '@root/animations';
import type { RecordWrapperProps } from '@root/types/common/props';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';

const RecordWrapper: FC<RecordWrapperProps> = ({ children, className }) => {
	return (
		<motion.article
			{...getFramerFadeUp(0, 10, 0.1)}
			className={clsx(className, 'card bg-base-100 shadow-primary grid w-full grow-0 shadow-lg')}
		>
			<div className='card-body'>{children}</div>
		</motion.article>
	);
};

export default RecordWrapper;
