import type { ClassNameProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';
import { getVersion } from '@root/utils/server/fetch';

export default async function AppVersion({ className }: Readonly<ClassNameProps>) {
	const { result } = await getVersion();

	return (
		<div
			className={cn(
				'rounded-full bg-primary px-3 py-1 text-xs font-bold leading-none text-primary-content shadow-lg shadow-base-content/30',
				className
			)}
		>
			v{result?.version}
		</div>
	);
}
