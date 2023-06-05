import type { ClassNameProps } from '@root/types/common/props';

type CircleDividerProps = ClassNameProps;

export default function CircleDivider({ className }: CircleDividerProps) {
	return <div className={`rounded-full ${className}`} />;
}
