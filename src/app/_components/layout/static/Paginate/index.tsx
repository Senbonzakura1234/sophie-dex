import ChevronDoubleLeftIcon from '@components/icons/solid/ChevronDoubleLeftIcon';
import ChevronDoubleRightIcon from '@components/icons/solid/ChevronDoubleRightIcon';
import ChevronLeftIcon from '@components/icons/solid/ChevronLeftIcon';
import ChevronRightIcon from '@components/icons/solid/ChevronRightIcon';

import QueryLink from '@components/common/dynamic/QueryLink';
import type { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { SearchQuery } from '@root/types/common/zod';
import GoToPageSelect from './GoToPageSelect';

type Props = Readonly<{ searchQuery: ReturnType<typeof useSearchQuery>['searchQuery']; totalPage: number }>;

const getPaginateProps = (curPage: SearchQuery['page'], totalPage: number) => {
	const page = curPage || 1;
	return { isPreviousDisable: page <= 1, isNextDisable: page >= totalPage, page };
};

export default function Paginate({ totalPage, searchQuery }: Props) {
	const { isNextDisable, isPreviousDisable, page } = getPaginateProps(searchQuery.page, totalPage);

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
