import ChevronDoubleLeftIcon from '@root/components/common/server/icons/solid/ChevronDoubleLeftIcon';
import ChevronDoubleRightIcon from '@root/components/common/server/icons/solid/ChevronDoubleRightIcon';
import ChevronLeftIcon from '@root/components/common/server/icons/solid/ChevronLeftIcon';
import ChevronRightIcon from '@root/components/common/server/icons/solid/ChevronRightIcon';

import QueryLink from '@root/components/common/client/QueryLink';
import type { useSearchQuery } from '@root/hooks/useSearchQuery';
import { useMemo } from 'react';
import GoToPageSelect from './GoToPageSelect';

type PaginateProps = { searchQuery: ReturnType<typeof useSearchQuery>['searchQuery']; totalPage: number };

export default function Paginate({ totalPage, searchQuery }: PaginateProps) {
	const { isNextDisable, isPreviousDisable, page } = useMemo(() => {
		const page = searchQuery.page || 1;
		return { isPreviousDisable: page <= 1, isNextDisable: page >= totalPage, page };
	}, [searchQuery.page, totalPage]);

	return (
		<div className='flex flex-wrap gap-2'>
			<QueryLink
				aria-label='Go To First Page'
				className='btn btn-circle btn-primary btn-sm my-auto !border-none shadow-lg shadow-current !transition-opacity'
				disabled={isPreviousDisable}
				href={{ query: {} }}
				isActive={isPreviousDisable}
				searchQuery={searchQuery}
				resetPage
			>
				<ChevronDoubleLeftIcon className='aspect-square h-4' />
			</QueryLink>

			<QueryLink
				aria-label='Go To Previous Page'
				className='btn btn-circle btn-primary btn-sm my-auto !border-none shadow-lg shadow-current !transition-opacity'
				disabled={isPreviousDisable}
				href={{ query: { page: page - 1 } }}
				isActive={isPreviousDisable}
				searchQuery={searchQuery}
			>
				<ChevronLeftIcon className='aspect-square h-4' />
			</QueryLink>

			<GoToPageSelect totalPage={totalPage} />

			<QueryLink
				aria-label='Go To Next Page'
				className='btn btn-circle btn-primary btn-sm my-auto !border-none shadow-lg shadow-current !transition-opacity'
				disabled={isNextDisable}
				href={{ query: { page: page + 1 } }}
				isActive={isNextDisable}
				searchQuery={searchQuery}
			>
				<ChevronRightIcon className='aspect-square h-4' />
			</QueryLink>

			<QueryLink
				aria-label='Go To Next Page'
				className='btn btn-circle btn-primary btn-sm my-auto !border-none shadow-lg shadow-current !transition-opacity'
				disabled={isNextDisable}
				href={{ query: { page: totalPage } }}
				isActive={isNextDisable}
				searchQuery={searchQuery}
			>
				<ChevronDoubleRightIcon className='aspect-square h-4' />
			</QueryLink>
		</div>
	);
}
