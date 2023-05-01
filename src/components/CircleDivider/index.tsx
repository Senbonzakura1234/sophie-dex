import type { ClassNameProps } from '@root/types/common/props';
import clsx from 'clsx';

type CircleDividerProps = ClassNameProps;

export default function CircleDivider({ className }: CircleDividerProps) {
	return <div className={clsx(className, 'rounded-full')} />;
}
