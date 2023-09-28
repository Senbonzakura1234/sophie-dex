'use client';

import useSelector from '@root/hooks/useSelector';
import type { ChildrenProps } from '@root/types/common/props';

type ContentWrapperProps = ChildrenProps & { type: 'detail' | 'list' | 'about' };

export default function ContentWrapper({ children, type }: ContentWrapperProps) {
	const {
		contentData: { isError },
	} = useSelector();

	return (
		<section
			className={`container m-auto grid grid-cols-1 gap-6 max-2xl:px-4
				${type === 'detail' ? 'lg:max-w-3xl' : ''}
				${type === 'list' && !isError ? 'lg:grid-cols-2' : ''}
				${type === 'about' ? 'lg:grid-cols-about' : ''}
			`}
		>
			{children}
		</section>
	);
}
