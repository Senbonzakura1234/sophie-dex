import { defaultLimit, defaultLimitInt } from '@root/constants';
import { useFilterControl } from '@root/hooks/useFilterControl';
import { useGoToPageControl } from '@root/hooks/useGoToPageControl';
import type { FilterControlProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';
import type { FC } from 'react';
import { useMemo } from 'react';

import FadeWrapper from '../Animations/FadeWrapper';
import CircleDivider from '../CircleDivider';
import ApplyFilter from './ApplyFilter';
import ColorFilter from './ColorFilter';
import ItemCategoryFilter from './ItemCategoryFilter';
import Paginate from './Paginate';
import ResetFilter from './ResetFilter';
import SortControl from './SortControl';

const TraitCategoryFilter = dynamic(() => import('./TraitCategoryFilter'), {
	ssr: false,
});

const FilterControl: FC<FilterControlProps> = ({
	limit = defaultLimit,
	page = '1',
	totalPage = 0,
	totalRecord = 0,
	pageName,
}) => {
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
			<section className='container mx-auto px-3 pt-6 pb-3'>
				<nav className='card bg-base-100 flex w-full flex-row flex-wrap gap-3 py-3 px-5 shadow-2xl 2xl:place-content-end'>
					<SortControl />

					<CircleDivider className='bg-base-300 my-auto hidden h-2 w-2 2xl:block' />

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

					<CircleDivider className='bg-base-300 my-auto hidden h-2 w-2 2xl:block' />

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

					<CircleDivider className='bg-base-300 my-auto hidden h-2 w-2 2xl:block' />

					<ResetFilter setFilterData={setFilterData} setGoToPage={setGoToPage} />
				</nav>
			</section>
		</FadeWrapper>
	);
};

export default FilterControl;
