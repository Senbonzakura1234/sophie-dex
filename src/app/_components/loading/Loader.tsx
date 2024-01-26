import type { ClassNameProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';

type LoaderProps = ClassNameProps;

export default function Loader({ className }: LoaderProps) {
	return <div className={cn('loading loading-ring', className)} />;
}
