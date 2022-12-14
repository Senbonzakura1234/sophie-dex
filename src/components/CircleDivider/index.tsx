import { CircleDivider } from '@root/types/common';
import clsx from 'clsx';
import type { FC } from 'react';

const CircleDivider: FC<CircleDivider> = ({ className }) => {
	return <div className={clsx(className, 'rounded-full')}></div>;
};

export default CircleDivider;
