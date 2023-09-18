import type { ClassNameProps } from '@root/types/common/props';

type LoaderProps = ClassNameProps;

export default function Loader({ className }: LoaderProps) {
	return <div className={`loading loading-ring ${className}`} />;
}
