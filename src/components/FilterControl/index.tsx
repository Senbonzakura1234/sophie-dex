import { defaultLimit } from '@root/configs';
import { useFilterControl } from '@root/hooks/useFilterControl';
import { useGoToPageControl } from '@root/hooks/useGoToPageControl';
import { useSearchInput } from '@root/hooks/useSearchInput';
import type { FilterControlProps } from '@root/types/common/props';
import type { FC } from 'react';
import { useMemo } from 'react';

import FadeWrapper from '../Animations/FadeWrapper';
import CircleDivider from '../CircleDivider';
import ApplyFilter from './ApplyFilter';
import CategoryFilter from './CategoryFilter';
import ColorFilter from './ColorFilter';
import Paginate from './Paginate';
import ResetFilter from './ResetFilter';
import SearchInput from './SearchInput';
import SortControl from './SortControl';

const FilterControl: FC<FilterControlProps> = ({
	limit = defaultLimit,
	page = 1,
	totalPage = 0,
	totalRecord = 0,
	pageName,
}) => {
	const { from, to } = useMemo(
		() => ({
			from: (page - 1) * limit + 1,
			to: page * limit > totalRecord ? totalRecord : page * limit,
		}),
		[limit, page, totalRecord],
	);

	const { filterData, setFilterData, isCanApplyFilter } = useFilterControl();
	const { goToPage, setGoToPage, isCanGoToPage } = useGoToPageControl();
	const { performSearch, searchInput, setSearchValue, isSearchValueValid, resetSearch } = useSearchInput();

	return (
		<>
			<FadeWrapper show={true} appear={true}>
				<section className='container mx-auto px-3 pt-6 pb-3'>
					<SearchInput
						performSearch={performSearch}
						searchInput={searchInput}
						setSearchValue={setSearchValue}
						resetSearch={resetSearch}
						isSearchValueValid={isSearchValueValid}
					/>
				</section>
			</FadeWrapper>

			<FadeWrapper show={true} appear={true}>
				<section className='container mx-auto p-3'>
					<nav className='card bg-base-100 flex w-full flex-row flex-wrap gap-3 py-3 px-5 shadow-2xl 2xl:place-content-end'>
						<SortControl />

						<CircleDivider className='bg-base-300 my-auto hidden h-2 w-2 2xl:block' />

						<div className='flex flex-wrap gap-2'>
							<ColorFilter filterData={filterData} setFilterData={setFilterData} pageName={pageName} />
							<CategoryFilter filterData={filterData} setFilterData={setFilterData} pageName={pageName} />

							<ApplyFilter filterData={filterData} isCanApplyFilter={isCanApplyFilter} />
						</div>

						<CircleDivider className='bg-base-300 my-auto hidden h-2 w-2 2xl:block' />

						<div className='text-secondary-content my-auto text-xs font-semibold'>
							{from} - {to} of {totalRecord} records
						</div>

						<Paginate
							page={page}
							totalPage={totalPage}
							goToPage={goToPage}
							setGoToPage={setGoToPage}
							isCanGoToPage={isCanGoToPage}
						/>

						<CircleDivider className='bg-base-300 my-auto hidden h-2 w-2 2xl:block' />

						<ResetFilter
							setFilterData={setFilterData}
							setGoToPage={setGoToPage}
							setSearchValue={setSearchValue}
						/>
					</nav>
				</section>
			</FadeWrapper>
		</>
	);
};

export default FilterControl;
