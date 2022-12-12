import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { FilterData } from '@root/types/common';
import type { FC } from 'react';

const ApplyFilter: FC<{ filterData: FilterData; isCanApplyFilter: boolean }> = ({
	isCanApplyFilter,
	filterData: { goToPage, colorSelected, traitCateSelected, itemCateSelected },
}) => {
	const { updateQuery } = useSearchQuery();

	return (
		<div className='my-auto grow xl:grow-0'>
			<button
				role='navigation'
				onClick={() => {
					if (isCanApplyFilter)
						updateQuery({
							page: goToPage.value,
							traitCategory: traitCateSelected.value,
							color: colorSelected.value,
							itemCategory: itemCateSelected.value,
						});
				}}
				aria-label='Apply Filter'
				disabled={!isCanApplyFilter}
				className='btn btn-xs btn-primary gap-1 capitalize'
			>
				<span className='hide xl:inline'>Apply</span>Filter
			</button>
		</div>
	);
};

export default ApplyFilter;
