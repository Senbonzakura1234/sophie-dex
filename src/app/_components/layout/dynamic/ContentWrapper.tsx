import type { ChildrenProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';

type ContentWrapperProps = ChildrenProps & { type: 'detail' | 'list' | 'about' | 'profile' };

export default function ContentWrapper({ children, type }: ContentWrapperProps) {
	return (
		<section
			className={cn(
				'container mx-auto grid grid-cols-1 gap-6 max-2xl:px-4',
				{ 'my-auto lg:max-w-3xl': type === 'detail' },
				{ 'lg:grid-cols-2': type === 'list' },
				{ ' my-auto': type === 'list' },
				{ 'm-auto max-w-6xl': type === 'about' },
				{ 'm-auto max-w-6xl': type === 'profile' },
			)}
		>
			{children}
		</section>
	);
}
