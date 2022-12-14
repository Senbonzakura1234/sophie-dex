import clsx from 'clsx';
import type { FC } from 'react';

const CircleDivider: FC<{ className?: string }> = ({ className }) => {
	return <div className={clsx(className, 'rounded-full')}></div>;
};

export default CircleDivider;
