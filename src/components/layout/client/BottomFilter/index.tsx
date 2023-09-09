'use client';

import Paginate from '@root/components/layout/client/Paginate';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import useSelector from '@root/hooks/useSelector';

export default function BottomFilter() {
	const { searchQuery } = useSearchQuery();
	const page = searchQuery.page || 1;
	const {
		contentData: { totalPage },
	} = useSelector();

	return (
		<nav className='card select-none bg-base-100 shadow-lg shadow-primary'>
			<div className='flex w-full flex-row flex-wrap place-content-center gap-3 px-5 py-3'>
				<Paginate page={page} totalPage={totalPage} />
			</div>
		</nav>
	);
}
