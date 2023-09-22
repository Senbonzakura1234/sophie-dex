'use client';

import useSelector from '@root/hooks/useSelector';
import type { ChildrenProps } from '@root/types/common/props';

type ContentWrapperProps = ChildrenProps & { type: 'detail' | 'list' };

export default function ContentWrapper({ children, type }: ContentWrapperProps) {
	const {
		contentData: { isError },
	} = useSelector();

	return (
		<section
			className={`container m-auto grid grid-cols-1 gap-6 max-2xl:px-4 ${
				type === 'detail' ? 'lg:max-w-3xl' : isError ? '' : 'xl:grid-cols-2'
			}`}
		>
			{children}
		</section>
	);
}
