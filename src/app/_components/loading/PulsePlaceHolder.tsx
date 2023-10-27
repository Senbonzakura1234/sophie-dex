import type { ClassNameProps } from '@root/types/common/props';

type PulsePlaceHolderProps = ClassNameProps;

export default function PulsePlaceHolder({ className }: PulsePlaceHolderProps) {
	return <div className={`animate-pulse bg-base-content/20 ${className}`} />;
}
