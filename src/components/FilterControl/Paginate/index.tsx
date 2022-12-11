import {
	ArrowTopRightOnSquareIcon,
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from '@heroicons/react/24/solid';
import SelectOption from '@root/components/SelectOption';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { FilterData, SelectOptionItem, SetFilterData } from '@root/types/common';
import type { FC } from 'react';
import { useMemo } from 'react';

const Paginate: FC<{
	page: number;
	totalPage: number;
	filterData: FilterData;
	setFilterData: SetFilterData;
}> = ({ page, totalPage, setFilterData: { setGoToPage }, filterData: { goToPage, traitCateSelected } }) => {
	const { isReady, updateQuery } = useSearchQuery();

	const isPreviousDisable = useMemo(() => !isReady || page === 1, [isReady, page]);
	const isNextDisable = useMemo(() => !isReady || page === totalPage, [isReady, page, totalPage]);
	const isJumpToDisable = useMemo(() => !isReady || goToPage.value === `${page}`, [goToPage, isReady, page]);

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
					disabled={isPreviousDisable}
					onClick={() => {
						if (isPreviousDisable) return;
						updateQuery({ page: '1' });
					}}
					className='btn btn-ghost btn-circle btn-sm my-auto'
				>
					<ChevronDoubleLeftIcon width={16} height={16} />
				</button>
				<button
					disabled={isPreviousDisable}
					onClick={() => {
						if (isPreviousDisable) return;
						updateQuery({ page: `${page - 1}` });
					}}
					className='btn btn-ghost btn-circle btn-sm my-auto'
				>
					<ChevronLeftIcon width={16} height={16} />
				</button>

				<SelectOption list={pageList} setValue={setGoToPage} value={goToPage} className='my-auto w-32' withIcon />

				<button
					className='btn btn-ghost btn-circle btn-sm my-auto'
					onClick={() => {
						if (isJumpToDisable) return;
						updateQuery({ traitCategory: traitCateSelected.value, page: goToPage.value });
					}}
				>
					<ArrowTopRightOnSquareIcon width={16} height={16} />
				</button>

				<button
					disabled={isNextDisable}
					onClick={() => {
						if (isNextDisable) return;
						updateQuery({ page: `${page + 1}` });
					}}
					className='btn btn-ghost btn-circle btn-sm my-auto'
				>
					<ChevronRightIcon width={16} height={16} />
				</button>

				<button
					disabled={isNextDisable}
					onClick={() => {
						if (isNextDisable) return;
						updateQuery({ page: `${totalPage}` });
					}}
					className='btn btn-ghost btn-circle btn-sm my-auto'
				>
					<ChevronDoubleRightIcon width={16} height={16} />
				</button>
			</div>
		</div>
	);
};

export default Paginate;
