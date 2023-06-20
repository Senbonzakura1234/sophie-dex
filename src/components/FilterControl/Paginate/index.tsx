import ChevronDoubleLeftIcon from '@root/assets/icons/solid/ChevronDoubleLeftIcon';
import ChevronDoubleRightIcon from '@root/assets/icons/solid/ChevronDoubleRightIcon';
import ChevronLeftIcon from '@root/assets/icons/solid/ChevronLeftIcon';
import ChevronRightIcon from '@root/assets/icons/solid/ChevronRightIcon';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { PageNameProps } from '@root/types/common/props';

import GoToPageSelect from './GoToPageSelect';

type PaginateProps = { page: number; totalPage: number } & PageNameProps;

export default function Paginate({ page, totalPage, pageName }: PaginateProps) {
	const { isRouterReady, updateQuery } = useSearchQuery();

	const isPreviousDisable = !isRouterReady || page <= 1;
	const isNextDisable = !isRouterReady || page >= totalPage;

	return (
		<div className='form-control'>
			<div className='flex gap-2'>
				<button
					role='navigation'
					disabled={isPreviousDisable}
					onClick={() => {
						if (isPreviousDisable) return;
						updateQuery({ page: 1 }, pageName);
					}}
					aria-label='Go To First Page'
					className='btn-primary btn-sm btn-circle btn my-auto text-slate-50'
				>
					<ChevronDoubleLeftIcon width={16} height={16} />
				</button>

				<button
					role='navigation'
					disabled={isPreviousDisable}
					onClick={() => {
						if (isPreviousDisable) return;
						updateQuery({ page: page - 1 }, pageName);
					}}
					aria-label='Go To Previous Page'
					className='btn-primary btn-sm btn-circle btn my-auto text-slate-50'
				>
					<ChevronLeftIcon width={16} height={16} />
				</button>

				<GoToPageSelect totalPage={totalPage} pageName={pageName} />

				<button
					role='navigation'
					disabled={isNextDisable}
					onClick={() => {
						if (isNextDisable) return;
						updateQuery({ page: page + 1 }, pageName);
					}}
					aria-label='Go To Next Page'
					className='btn-primary btn-sm btn-circle btn my-auto text-slate-50'
				>
					<ChevronRightIcon width={16} height={16} />
				</button>

				<button
					role='navigation'
					disabled={isNextDisable}
					onClick={() => {
						if (isNextDisable) return;
						updateQuery({ page: totalPage }, pageName);
					}}
					aria-label='Go To Last Page'
					className='btn-primary btn-sm btn-circle btn my-auto text-slate-50'
				>
					<ChevronDoubleRightIcon width={16} height={16} />
				</button>
			</div>
		</div>
	);
}
