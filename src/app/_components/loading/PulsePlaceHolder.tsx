import type { ClassNameProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';

type Props = Readonly<ClassNameProps>;

export default function PulsePlaceHolder({ className }: Props) {
	return <div className={cn('animate-pulse bg-base-content/20 ', className)} />;
}
