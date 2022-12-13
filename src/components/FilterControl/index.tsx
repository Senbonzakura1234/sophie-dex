import { defaultLimit, defaultLimitInt } from '@root/constants';
import { useFilterControl } from '@root/hooks/useFilterControl';
import { useGoToPageControl } from '@root/hooks/useGoToPageControl';
import type { PageName } from '@root/types/common';
import dynamic from 'next/dynamic';
import type { FC } from 'react';
import { useMemo } from 'react';

import FadeWrapper from '../Animations/FadeWrapper';
import ApplyFilter from './ApplyFilter';
import ColorFilter from './ColorFilter';
import ItemCategoryFilter from './ItemCategoryFilter';
import Paginate from './Paginate';
import ResetFilter from './ResetFilter';
import SortControl from './SortControl';

const TraitCategoryFilter = dynamic(() => import('./TraitCategoryFilter'), {
	ssr: false,
});

const FilterControl: FC<{
	page: string;
	totalPage: number;
	limit: string;
	totalRecord: number;
	pageName: PageName;
}> = ({ limit = defaultLimit, page = '1', totalPage = 0, totalRecord = 0, pageName }) => {
	const { limitInt, pageInt } = useMemo(
		() => ({ limitInt: parseInt(limit) || defaultLimitInt, pageInt: parseInt(page) || 1 }),
		[limit, page],
	);

	const { from, to } = useMemo(
		() => ({
			from: (pageInt - 1) * limitInt + 1,
			to: pageInt * limitInt > totalRecord ? totalRecord : pageInt * limitInt,
		}),
		[limitInt, pageInt, totalRecord],
	);

	const { filterData, setFilterData, isCanApplyFilter } = useFilterControl();
	const { goToPage, setGoToPage, isCanGoToPage } = useGoToPageControl();

	return (
		<FadeWrapper show={true} appear={true}>
			<section className='container mx-auto mt-3 p-3'>
				<nav className='card bg-base-100 flex w-full flex-row flex-wrap gap-3 py-3 px-5 shadow-2xl xl:place-content-end'>
					<SortControl />
					<div className='flex flex-wrap gap-2'>
						{pageName === 'Trait' ? (
							<TraitCategoryFilter filterData={filterData} setFilterData={setFilterData} />
						) : null}
						{pageName === 'Item' ? (
							<>
								<ColorFilter filterData={filterData} setFilterData={setFilterData} />
								<ItemCategoryFilter filterData={filterData} setFilterData={setFilterData} />
							</>
						) : null}

						<ApplyFilter filterData={filterData} isCanApplyFilter={isCanApplyFilter} />
					</div>

					<div className='text-secondary-content my-auto text-xs font-semibold'>
						{from} - {to} of {totalRecord} records
					</div>

					<Paginate
						page={pageInt}
						totalPage={totalPage}
						goToPage={goToPage}
						setGoToPage={setGoToPage}
						isCanGoToPage={isCanGoToPage}
					/>

					<ResetFilter setFilterData={setFilterData} setGoToPage={setGoToPage} />
				</nav>
			</section>
		</FadeWrapper>
	);
};

export default FilterControl;
