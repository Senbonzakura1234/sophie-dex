'use client';

import useSelector from '@root/hooks/useSelector';
import type { ChildrenProps } from '@root/types/common/props';

type ContentWrapperProps = ChildrenProps & { type: 'detail' | 'list' | 'about' };

export default function ContentWrapper({ children, type }: ContentWrapperProps) {
	const {
		contentData: { status },
	} = useSelector();

	return (
		<section
			className={`container mx-auto grid grid-cols-1 gap-6 max-2xl:px-4
				${type === 'detail' ? 'my-auto lg:max-w-3xl' : ''}
				${type === 'list' && status !== 'error' ? 'lg:grid-cols-2' : ''}
				${type === 'list' ? ' my-auto' : ''}
				${type === 'about' ? 'm-auto max-w-6xl' : ''}
			`}
		>
			{children}
		</section>
	);
}
