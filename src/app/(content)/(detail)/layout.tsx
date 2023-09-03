import ContentWrapper from '@root/components/layout/client/ContentWrapper';
import type { ChildrenProps } from '@root/types/common/props';
import { Suspense } from 'react';

export default function DetailLayout({ children }: ChildrenProps) {
	return (
		<Suspense fallback={<div className='container m-auto grid grid-cols-1 gap-6 max-2xl:px-4' />}>
			<ContentWrapper type='detail'>{children}</ContentWrapper>
		</Suspense>
	);
}
