import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { ApplyFilterProps } from '@root/types/common/props';
import type { FC } from 'react';

const ApplyFilter: FC<ApplyFilterProps> = ({
	isCanApplyFilter,
	filterData: { colorSelected, cateSelected, relatedCateSelected },
}) => {
	const { updateQuery } = useSearchQuery();

	return (
		<div className='my-auto grow 2xl:grow-0'>
			<button
				role='navigation'
				onClick={() => {
					if (isCanApplyFilter)
						updateQuery({
							page: 1,
							category: cateSelected.value,
							color: colorSelected.value,
							relatedCategory: relatedCateSelected.value,
						});
				}}
				aria-label='Apply Filter'
				disabled={!isCanApplyFilter}
				className='btn btn-xs btn-primary gap-1 capitalize text-slate-50'
			>
				<span className='hide 2xl:inline'>Apply</span>Filter
			</button>
		</div>
	);
};

export default ApplyFilter;
