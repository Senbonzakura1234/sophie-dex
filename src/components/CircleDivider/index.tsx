import type { CircleDividerProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';

const CircleDivider: FC<CircleDividerProps> = ({ className }) => {
	return <div className={clsx(className, 'rounded-full')}></div>;
};

export default CircleDivider;
