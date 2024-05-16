import ContentWrapper from '@components/layout/dynamic/ContentWrapper';
import PulsePlaceHolder from '@components/loading/PulsePlaceHolder';
import type { ChildrenProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';

const TopFilter = dynamic(() => import('@components/layout/dynamic/TopFilter'), {
	loading: () => <PulsePlaceHolder className='h-8 w-[133px] rounded-lg' />,
});
const BottomFilter = dynamic(() => import('@components/layout/dynamic/BottomFilter'));

export default function ListLayout({ children }: ChildrenProps) {
	return (
		<>
			<section className='container relative z-[31] mx-auto flex flex-wrap items-end gap-6 max-2xl:px-4 sm:gap-3'>
				<TopFilter />
			</section>

			<ContentWrapper type='list'>{children}</ContentWrapper>

			<section className='container relative z-30 mx-auto grid gap-3 max-2xl:px-4'>
				<BottomFilter />
			</section>
		</>
	);
}
