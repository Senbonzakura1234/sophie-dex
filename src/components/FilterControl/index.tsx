import { useFilterControl } from '@root/hooks/useFilterControl';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { PageName } from '@root/types/common';
import type { FC } from 'react';
import { useMemo } from 'react';

import ApplyFilter from './ApplyFilter';
import Paginate from './Paginate';
import ResetFilter from './ResetFilter';
import SortControl from './SortControl';
import TraitCategoryFilter from './TraitCategoryFilter';

const FilterControl: FC<{
	page: string;
	totalPage: number;
	limit: string;
	totalRecord: number;
	pageName: PageName;
}> = ({ limit = '10', page = '1', totalPage = 0, totalRecord = 0, pageName }) => {
	const { securedQuery, isReady, updateQuery } = useSearchQuery();

	const { limitInt, pageInt } = useMemo(
		() => ({ limitInt: parseInt(limit) || 10, pageInt: parseInt(page) || 1 }),
		[limit, page],
	);

	const { from, to } = useMemo(
		() => ({
			from: (pageInt - 1) * limitInt + 1,
			to: pageInt * limitInt > totalRecord ? totalRecord : pageInt * limitInt,
		}),
		[limitInt, pageInt, totalRecord],
	);

	const { filterData, setFilterData } = useFilterControl({
		page,
		traitCategory: securedQuery.traitCategory,
	});

	return (
		<section className='container mx-auto p-3'>
			<div className='card bg-base-100 flex w-full flex-row flex-wrap gap-3 py-3 px-5 shadow-2xl xl:place-content-end'>
				<SortControl />
				<div className='flex gap-2'>
					{pageName === 'Trait' ? (
						<TraitCategoryFilter filterData={filterData} setFilterData={setFilterData} />
					) : null}

					<ApplyFilter filterData={filterData} />
				</div>
				<div className='text-secondary-content my-auto text-xs font-bold'>
					{from} - {to} of {totalRecord} records
				</div>
				<Paginate page={pageInt} totalPage={totalPage} filterData={filterData} setFilterData={setFilterData} />
				<ResetFilter setFilterData={setFilterData} />
			</div>
		</section>
	);
};

export default FilterControl;
