import type { ClassNameProps } from '@root/types/common/props';

type BasePlaceHolderProps = ClassNameProps;

export default function BasePlaceHolder({ className }: BasePlaceHolderProps) {
	return <div className={`animate-pulse bg-base-content/30 ${className}`} />;
}
