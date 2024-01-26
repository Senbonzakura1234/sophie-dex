import type { ClassNameProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';

type PulsePlaceHolderProps = ClassNameProps;

export default function PulsePlaceHolder({ className }: PulsePlaceHolderProps) {
	return <div className={cn('animate-pulse bg-base-content/20 ', className)} />;
}
