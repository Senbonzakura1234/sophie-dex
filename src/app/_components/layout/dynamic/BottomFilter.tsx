'use client';

import Paginate from '@components/layout/static/Paginate';
import { useListQueryMeta } from '@root/hooks/useListQueryMeta';
import { useModuleId } from '@root/hooks/useModuleId';
import { useSearchQuery } from '@root/hooks/useSearchQuery';

export default function BottomFilter() {
	const { searchQuery } = useSearchQuery();

	const { moduleId = 'effect' } = useModuleId();

	const {
		meta: { totalPage }
	} = useListQueryMeta({ moduleId, searchQuery });

	return (
		<nav className='card select-none bg-base-100 shadow-lg shadow-primary'>
			<div className='flex w-full flex-row flex-wrap place-content-center gap-3 px-5 py-3'>
				<Paginate searchQuery={searchQuery} totalPage={totalPage} />
			</div>
		</nav>
	);
}
