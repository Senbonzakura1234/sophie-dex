import {
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from '@heroicons/react/24/solid';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { PaginateProps } from '@root/types/common/props';
import type { FC } from 'react';
import { useMemo } from 'react';

import GoToPageSelect from './GoToPageSelect';

const Paginate: FC<PaginateProps> = ({ page, totalPage }) => {
	const { isReady, updateQuery } = useSearchQuery();

	const isPreviousDisable = useMemo(() => !isReady || page <= 1, [isReady, page]);
	const isNextDisable = useMemo(() => !isReady || page >= totalPage, [isReady, page, totalPage]);

	return (
		<div className='form-control'>
			<div className='flex gap-2'>
				<button
					role='navigation'
					disabled={isPreviousDisable}
					onClick={() => {
						if (isPreviousDisable) return;
						updateQuery({ page: 1 });
					}}
					aria-label='Go To First Page'
					className='btn btn-primary btn-circle btn-sm my-auto text-slate-50'
				>
					<ChevronDoubleLeftIcon width={16} height={16} />
				</button>

				<button
					role='navigation'
					disabled={isPreviousDisable}
					onClick={() => {
						if (isPreviousDisable) return;
						updateQuery({ page: page - 1 });
					}}
					aria-label='Go To Previous Page'
					className='btn btn-primary btn-circle btn-sm my-auto text-slate-50'
				>
					<ChevronLeftIcon width={16} height={16} />
				</button>

				<GoToPageSelect totalPage={totalPage} />

				<button
					role='navigation'
					disabled={isNextDisable}
					onClick={() => {
						if (isNextDisable) return;
						updateQuery({ page: page + 1 });
					}}
					aria-label='Go To Next Page'
					className='btn btn-primary btn-circle btn-sm my-auto text-slate-50'
				>
					<ChevronRightIcon width={16} height={16} />
				</button>

				<button
					role='navigation'
					disabled={isNextDisable}
					onClick={() => {
						if (isNextDisable) return;
						updateQuery({ page: totalPage });
					}}
					aria-label='Go To Last Page'
					className='btn btn-primary btn-circle btn-sm my-auto text-slate-50'
				>
					<ChevronDoubleRightIcon width={16} height={16} />
				</button>
			</div>
		</div>
	);
};

export default Paginate;
