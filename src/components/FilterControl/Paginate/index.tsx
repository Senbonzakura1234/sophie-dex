import ChevronDoubleLeftIcon from '@root/assets/icons/solid/ChevronDoubleLeftIcon';
import ChevronDoubleRightIcon from '@root/assets/icons/solid/ChevronDoubleRightIcon';
import ChevronLeftIcon from '@root/assets/icons/solid/ChevronLeftIcon';
import ChevronRightIcon from '@root/assets/icons/solid/ChevronRightIcon';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import type { ModuleIdProps } from '@root/types/common/props';

import GoToPageSelect from './GoToPageSelect';

type PaginateProps = { page: number; totalPage: number } & ModuleIdProps;

export default function Paginate({ page, totalPage, moduleId }: PaginateProps) {
	const { updateQuery } = useSecuredRouter();

	const isPreviousDisable = page <= 1;
	const isNextDisable = page >= totalPage;

	return (
		<div className='form-control'>
			<div className='flex gap-2'>
				<button
					role='navigation'
					disabled={isPreviousDisable}
					onClick={() => {
						if (isPreviousDisable) return;
						updateQuery({ page: 1 }, moduleId);
					}}
					aria-label='Go To First Page'
					className='btn btn-circle btn-primary btn-sm my-auto text-slate-50'
				>
					<ChevronDoubleLeftIcon className='aspect-square h-4' />
				</button>

				<button
					role='navigation'
					disabled={isPreviousDisable}
					onClick={() => {
						if (isPreviousDisable) return;
						updateQuery({ page: page - 1 }, moduleId);
					}}
					aria-label='Go To Previous Page'
					className='btn btn-circle btn-primary btn-sm my-auto text-slate-50'
				>
					<ChevronLeftIcon className='aspect-square h-4' />
				</button>

				<GoToPageSelect totalPage={totalPage} moduleId={moduleId} />

				<button
					role='navigation'
					disabled={isNextDisable}
					onClick={() => {
						if (isNextDisable) return;
						updateQuery({ page: page + 1 }, moduleId);
					}}
					aria-label='Go To Next Page'
					className='btn btn-circle btn-primary btn-sm my-auto text-slate-50'
				>
					<ChevronRightIcon className='aspect-square h-4' />
				</button>

				<button
					role='navigation'
					disabled={isNextDisable}
					onClick={() => {
						if (isNextDisable) return;
						updateQuery({ page: totalPage }, moduleId);
					}}
					aria-label='Go To Last Page'
					className='btn btn-circle btn-primary btn-sm my-auto text-slate-50'
				>
					<ChevronDoubleRightIcon className='aspect-square h-4' />
				</button>
			</div>
		</div>
	);
}
