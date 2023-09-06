import BottomFilter from '@root/components/layout/client/BottomFilter';
import ContentWrapper from '@root/components/layout/client/ContentWrapper';
import TopFilter from '@root/components/layout/client/TopFilter';
import SearchControl from '@root/components/layout/server/SearchControl';
import type { ChildrenProps } from '@root/types/common/props';

export default function ListLayout({ children }: ChildrenProps) {
	return (
		<>
			<SearchControl />

			<section className='container relative z-40 mx-auto grid gap-3 max-2xl:px-4'>
				<TopFilter />
			</section>

			<ContentWrapper type='list'>{children}</ContentWrapper>

			<section className='container relative z-40 mx-auto grid gap-3 max-2xl:px-4'>
				<BottomFilter />
			</section>
		</>
	);
}
