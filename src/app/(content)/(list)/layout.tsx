import BookmarkApiTrigger from '@components/layout/dynamic/BookmarkApiTrigger';
import ContentWrapper from '@components/layout/dynamic/ContentWrapper';
import PulsePlaceHolder from '@components/loading/PulsePlaceHolder';
import type { ChildrenProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';

const TopFilter = dynamic(() => import('@components/layout/dynamic/TopFilter'), {
	loading: () => <PulsePlaceHolder className='h-8 w-[133px] rounded-lg' />,
});
const BottomFilter = dynamic(() => import('@components/layout/dynamic/BottomFilter'));
const SearchInput = dynamic(() => import('@components/layout/dynamic/SearchInput'), {
	loading: () => <div className='h-8 w-full' />,
});

export default function ListLayout({ children }: ChildrenProps) {
	return (
		<>
			<BookmarkApiTrigger />

			<section className='container mx-auto max-2xl:px-4'>
				<div className='card ml-auto overflow-hidden bg-base-100 shadow-lg shadow-primary md:w-1/4 md:min-w-[300px]'>
					<div className='relative flex w-full flex-row gap-3 px-5 py-2'>
						<SearchInput />
					</div>
				</div>
			</section>

			<section className='container relative z-[31] mx-auto grid gap-3 max-2xl:px-4'>
				<TopFilter />
			</section>

			<ContentWrapper type='list'>{children}</ContentWrapper>

			<section className='container relative z-30 mx-auto grid gap-3 max-2xl:px-4'>
				<BottomFilter />
			</section>
		</>
	);
}
