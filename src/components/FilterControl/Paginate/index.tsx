import {
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from '@heroicons/react/24/solid';
import SelectOption from '@root/components/SelectOption';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { GoToPage } from '@root/types/common';
import type { PaginateProps } from '@root/types/common/props';
import type { FC } from 'react';
import { useMemo } from 'react';

const Paginate: FC<PaginateProps> = ({ page, totalPage, goToPage, setGoToPage }) => {
	const { isReady, updateQuery } = useSearchQuery();

	const isPreviousDisable = useMemo(() => !isReady || page <= 1, [isReady, page]);
	const isNextDisable = useMemo(() => !isReady || page >= totalPage, [isReady, page, totalPage]);

	const pageList: GoToPage[] = useMemo(
		() =>
			Array(totalPage)
				.fill(0)
				.map((_, i) => ({ value: i + 1, label: `Page ${i + 1}` })),
		[totalPage],
	);

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

				<SelectOption<number | null>
					list={pageList}
					setValue={setGoToPage}
					value={goToPage}
					className='my-auto w-[7.5rem]'
					withIcon
				/>

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
