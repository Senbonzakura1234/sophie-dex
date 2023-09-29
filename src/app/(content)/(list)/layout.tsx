import BottomFilter from '@root/components/layout/client/BottomFilter';
import ContentWrapper from '@root/components/layout/client/ContentWrapper';
import SearchInput from '@root/components/layout/client/SearchInput';
import TopFilter from '@root/components/layout/client/TopFilter';
import type { ChildrenProps } from '@root/types/common/props';

export default function ListLayout({ children }: ChildrenProps) {
	return (
		<>
			<section className='container mx-auto max-2xl:px-4'>
				<div className='card ml-auto overflow-hidden bg-base-100 shadow-lg shadow-primary md:w-1/4 md:min-w-[300px]'>
					<div className='relative flex w-full flex-row gap-3 px-5 py-2'>
						<SearchInput />
					</div>
				</div>
			</section>

			<section className='container relative z-[31] mx-auto grid animate-fadeInView gap-3 animation-timeline-fadeInView max-2xl:px-4'>
				<TopFilter />
			</section>

			<ContentWrapper type='list'>{children}</ContentWrapper>

			<section className='container relative z-30 mx-auto grid animate-fadeInView gap-3 animation-timeline-fadeInView max-2xl:px-4'>
				<BottomFilter />
			</section>
		</>
	);
}
