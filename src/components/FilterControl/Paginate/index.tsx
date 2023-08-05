import ChevronDoubleLeftIcon from '@root/assets/icons/solid/ChevronDoubleLeftIcon';
import ChevronDoubleRightIcon from '@root/assets/icons/solid/ChevronDoubleRightIcon';
import ChevronLeftIcon from '@root/assets/icons/solid/ChevronLeftIcon';
import ChevronRightIcon from '@root/assets/icons/solid/ChevronRightIcon';
import QueryLink from '@root/components/ui/static/QueryLink';

import GoToPageSelect from './GoToPageSelect';

type PaginateProps = { page: number; totalPage: number };

export default function Paginate({ page, totalPage }: PaginateProps) {
	const isPreviousDisable = page <= 1;
	const isNextDisable = page >= totalPage;

	return (
		<div className='flex gap-2'>
			<QueryLink
				aria-label='Go To First Page'
				className='btn btn-circle btn-primary btn-sm my-auto !border-none text-slate-50 !transition-opacity'
				disabled={isPreviousDisable}
				href={{ query: {} }}
				isActive={isPreviousDisable}
				resetPage
			>
				<ChevronDoubleLeftIcon className='aspect-square h-4' />
			</QueryLink>

			<QueryLink
				aria-label='Go To Previous Page'
				className='btn btn-circle btn-primary btn-sm my-auto !border-none text-slate-50 !transition-opacity'
				disabled={isPreviousDisable}
				href={{ query: { page: page - 1 } }}
				isActive={isPreviousDisable}
			>
				<ChevronLeftIcon className='aspect-square h-4' />
			</QueryLink>

			<GoToPageSelect totalPage={totalPage} />

			<QueryLink
				aria-label='Go To Next Page'
				className='btn btn-circle btn-primary btn-sm my-auto !border-none text-slate-50 !transition-opacity'
				disabled={isNextDisable}
				href={{ query: { page: page + 1 } }}
				isActive={isNextDisable}
			>
				<ChevronRightIcon className='aspect-square h-4' />
			</QueryLink>

			<QueryLink
				aria-label='Go To Next Page'
				className='btn btn-circle btn-primary btn-sm my-auto border-none text-slate-50 !transition-opacity'
				disabled={isNextDisable}
				href={{ query: { page: totalPage } }}
				isActive={isNextDisable}
			>
				<ChevronDoubleRightIcon className='aspect-square h-4' />
			</QueryLink>
		</div>
	);
}
