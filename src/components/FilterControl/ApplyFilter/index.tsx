import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { FilterData } from '@root/types/common';
import type { FC } from 'react';

const ApplyFilter: FC<{ filterData: FilterData }> = ({ filterData }) => {
	const { securedQuery, isReady, updateQuery } = useSearchQuery();

	return (
		<button
			onClick={() => {
				if (
					isReady &&
					(securedQuery.traitCategory !== filterData.traitCateSelected.value ||
						securedQuery.page !== filterData.goToPage.value)
				)
					updateQuery({
						page: filterData.goToPage.value,
						traitCategory: filterData.traitCateSelected.value,
					});
			}}
			className='btn btn-xs btn-primary my-auto'
		>
			Filter
		</button>
	);
};

export default ApplyFilter;
