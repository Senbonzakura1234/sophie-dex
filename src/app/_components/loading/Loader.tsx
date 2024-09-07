import type { ClassNameProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';

type Props = Readonly<ClassNameProps>;

export default function Loader({ className }: Props) {
	return <div className={cn('loading loading-ring', className)} />;
}
