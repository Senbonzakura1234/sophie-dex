import ContentWrapper from '@root/components/layout/client/ContentWrapper';
import FilterControl from '@root/components/layout/client/FilterControl';
import SearchControl from '@root/components/layout/server/SearchControl';
import type { ChildrenProps } from '@root/types/common/props';
import { Suspense } from 'react';

export default function ListLayout({ children }: ChildrenProps) {
	return (
		<>
			<SearchControl />

			<section className='container relative z-40 mx-auto grid gap-3 max-2xl:px-4'>
				<FilterControl key='topFilter' />
			</section>

			<Suspense fallback={<div className='container mx-auto mb-auto grid grid-cols-1 gap-6 max-2xl:px-4' />}>
				<ContentWrapper type='list'>{children}</ContentWrapper>
			</Suspense>

			<section className='container relative z-40 mx-auto grid gap-3 max-2xl:px-4'>
				<FilterControl key='bottomFilter' isBottomFilter />
			</section>
		</>
	);
}
