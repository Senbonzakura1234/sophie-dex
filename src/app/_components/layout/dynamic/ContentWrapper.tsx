'use client';

import useSelector from '@root/hooks/useSelector';
import type { ChildrenProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';

type ContentWrapperProps = ChildrenProps & { type: 'detail' | 'list' | 'about' };

export default function ContentWrapper({ children, type }: ContentWrapperProps) {
	const {
		contentData: { status },
	} = useSelector();

	return (
		<section
			className={cn(
				'container mx-auto grid grid-cols-1 gap-6 max-2xl:px-4',
				{ 'my-auto lg:max-w-3xl': type === 'detail' },
				{ 'lg:grid-cols-2': type === 'list' && status !== 'error' },
				{ ' my-auto': type === 'list' },
				{ 'm-auto max-w-6xl': type === 'about' },
			)}
		>
			{children}
		</section>
	);
}
