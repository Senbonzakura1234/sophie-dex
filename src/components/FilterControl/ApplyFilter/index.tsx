import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { ApplyFilterProps } from '@root/types/common';
import type { FC } from 'react';

const ApplyFilter: FC<ApplyFilterProps> = ({
	isCanApplyFilter,
	filterData: { colorSelected, traitCateSelected, itemCateSelected },
}) => {
	const { updateQuery } = useSearchQuery();

	return (
		<div className='my-auto grow 2xl:grow-0'>
			<button
				role='navigation'
				onClick={() => {
					if (isCanApplyFilter)
						updateQuery({
							page: '1',
							traitCategory: traitCateSelected.value,
							color: colorSelected.value,
							itemCategory: itemCateSelected.value,
						});
				}}
				aria-label='Apply Filter'
				disabled={!isCanApplyFilter}
				className='btn btn-xs btn-primary gap-1 capitalize'
			>
				<span className='hide 2xl:inline'>Apply</span>Filter
			</button>
		</div>
	);
};

export default ApplyFilter;
