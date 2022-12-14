import {
	ArrowTopRightOnSquareIcon,
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from '@heroicons/react/24/solid';
import SelectOption from '@root/components/SelectOption';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { PaginateProps, SelectOptionItem } from '@root/types/common';
import type { FC } from 'react';
import { useMemo } from 'react';

const Paginate: FC<PaginateProps> = ({ page, totalPage, isCanGoToPage, goToPage, setGoToPage }) => {
	const { isReady, updateQuery } = useSearchQuery();

	const isPreviousDisable = useMemo(() => !isReady || page === 1, [isReady, page]);
	const isNextDisable = useMemo(() => !isReady || page === totalPage, [isReady, page, totalPage]);

	const pageList: SelectOptionItem<string>[] = useMemo(
		() =>
			Array(totalPage)
				.fill(0)
				.map((p, index) => ({ value: `${index + 1}`, label: `Page ${index + 1}` })),
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
						updateQuery({ page: '1' });
					}}
					aria-label='Go To First Page'
					className='btn btn-ghost btn-circle btn-sm my-auto'
				>
					<ChevronDoubleLeftIcon width={16} height={16} />
				</button>

				<button
					role='navigation'
					disabled={isPreviousDisable}
					onClick={() => {
						if (isPreviousDisable) return;
						updateQuery({ page: `${page - 1}` });
					}}
					aria-label='Go To Previous Page'
					className='btn btn-ghost btn-circle btn-sm my-auto'
				>
					<ChevronLeftIcon width={16} height={16} />
				</button>

				<SelectOption<string | null>
					list={pageList}
					setValue={setGoToPage}
					value={goToPage}
					className='my-auto w-32'
					withIcon
				/>

				<button
					role='navigation'
					className='btn btn-ghost btn-circle btn-sm my-auto hidden 2xl:inline-flex'
					disabled={!isCanGoToPage}
					onClick={() => {
						if (isCanGoToPage) updateQuery({ page: goToPage.value });
					}}
					aria-label='Jump To Page'
				>
					<ArrowTopRightOnSquareIcon width={16} height={16} />
				</button>

				<button
					role='navigation'
					disabled={isNextDisable}
					onClick={() => {
						if (isNextDisable) return;
						updateQuery({ page: `${page + 1}` });
					}}
					aria-label='Go To Next Page'
					className='btn btn-ghost btn-circle btn-sm my-auto'
				>
					<ChevronRightIcon width={16} height={16} />
				</button>

				<button
					role='navigation'
					disabled={isNextDisable}
					onClick={() => {
						if (isNextDisable) return;
						updateQuery({ page: `${totalPage}` });
					}}
					aria-label='Go To Last Page'
					className='btn btn-ghost btn-circle btn-sm my-auto'
				>
					<ChevronDoubleRightIcon width={16} height={16} />
				</button>
			</div>
		</div>
	);
};

export default Paginate;
