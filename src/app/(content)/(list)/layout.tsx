import BottomFilter from '@components/layout/dynamic/BottomFilter';
import ContentWrapper from '@components/layout/dynamic/ContentWrapper';
import TopFilter from '@components/layout/dynamic/TopFilter';
import TrpcProvider from '@components/layout/dynamic/TrpcProvider';
import PulsePlaceHolder from '@components/loading/PulsePlaceHolder';
import type { ChildrenProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const PageRefresh = dynamic(() => import('@components/layout/dynamic/PageRefresh'));

export default function ListLayout({ children }: ChildrenProps) {
	return (
		<TrpcProvider>
			<PageRefresh type='LIST' />

			<section className='container relative z-[31] mx-auto flex flex-wrap items-end gap-6 max-2xl:px-4 sm:gap-3'>
				<Suspense fallback={<PulsePlaceHolder className='h-8 w-[133px] rounded-lg' />}>
					<TopFilter />
				</Suspense>
			</section>

			<ContentWrapper type='list'>{children}</ContentWrapper>

			<section className='container relative z-30 mx-auto grid gap-3 max-2xl:px-4'>
				<Suspense>
					<BottomFilter />
				</Suspense>
			</section>
		</TrpcProvider>
	);
}
