import { getFramerFadeUp } from '@root/animations';
import { defaultLimit } from '@root/constants';
import { useFilterControl } from '@root/hooks/useFilterControl';
import { useGoToPageControl } from '@root/hooks/useGoToPageControl';
import { useSearchInput } from '@root/hooks/useSearchInput';
import type { FilterControlProps } from '@root/types/common/props';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useMemo } from 'react';

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
	isPaginateOnly,
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
	const { goToPage, setGoToPage } = useGoToPageControl();
	const { performSearch, searchInput, setSearchValue, isSearchValueValid, resetSearch } = useSearchInput();

	return (
		<>
			<motion.section
				{...getFramerFadeUp(0, 10, 0.1)}
				className={clsx({ hidden: isPaginateOnly }, 'container mx-auto max-2xl:px-4')}
			>
				<SearchInput
					performSearch={performSearch}
					searchInput={searchInput}
					setSearchValue={setSearchValue}
					resetSearch={resetSearch}
					isSearchValueValid={isSearchValueValid}
				/>
			</motion.section>

			<motion.section
				{...getFramerFadeUp(0, 10, 0.1)}
				className={clsx({ '!z-30': isPaginateOnly }, 'container relative z-40 mx-auto max-2xl:px-4')}
			>
				<nav
					className={clsx(
						{
							'2xl:place-content-end': !isPaginateOnly,
							'place-content-center': isPaginateOnly,
						},
						'card bg-base-100 shadow-primary flex w-full flex-row flex-wrap gap-3 py-3 px-5 shadow-lg',
					)}
				>
					<h2
						className={clsx(
							{
								'max-2xl:block': !isPaginateOnly,
							},
							'hidden font-extrabold',
						)}
					>
						Filter Control:
					</h2>

					<SortControl pageName={pageName} isPaginateOnly={isPaginateOnly} />

					<div className={clsx({ hidden: isPaginateOnly }, 'flex flex-wrap gap-2')}>
						<ColorFilter filterData={filterData} setFilterData={setFilterData} pageName={pageName} />
						<CategoryFilter filterData={filterData} setFilterData={setFilterData} pageName={pageName} />

						<ApplyFilter filterData={filterData} isCanApplyFilter={isCanApplyFilter} />
					</div>

					<div className={clsx({ hidden: isPaginateOnly }, 'text-neutral my-auto text-xs font-semibold')}>
						{from} - {to} of {totalRecord} {pageName.toLocaleLowerCase()}s
					</div>

					<Paginate page={page} totalPage={totalPage} goToPage={goToPage} setGoToPage={setGoToPage} />

					<ResetFilter
						setFilterData={setFilterData}
						setGoToPage={setGoToPage}
						setSearchValue={setSearchValue}
						isPaginateOnly={isPaginateOnly}
					/>
				</nav>
			</motion.section>
		</>
	);
};

export default FilterControl;
