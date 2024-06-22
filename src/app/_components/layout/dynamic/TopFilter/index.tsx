'use client';

import QueryLink from '@components/common/dynamic/QueryLink';
import RefetchButton from '@components/common/dynamic/RefetchButton';
import FilterIcon from '@components/icons/outline/FilterIcon';
import Paginate from '@components/layout/static/Paginate';
import { Transition } from '@headlessui/react';
import { DEFAULT_LIMIT } from '@root/constants/common';
import { useListQueryMeta } from '@root/hooks/useListQueryMeta';
import { useModuleId } from '@root/hooks/useModuleId';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { SearchQuery } from '@root/types/common/zod';
import { arrayInclude, queryToParamsString } from '@root/utils/common';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import BookmarkFilter from './BookmarkFilter';
import CategoryFilter from './CategoryFilter';
import ColorFilter from './ColorFilter';
import RecipeTypeFilter from './RecipeTypeFilter';
import RumorTypeFilter from './RumorTypeFilter';
import SortControl from './SortControl';

const SearchInput = dynamic(() => import('@components/layout/dynamic/TopFilter/SearchInput'), {
	loading: () => <div className='h-8 w-full' />
});

const formatRecordCount = new Intl.NumberFormat('en-US', { minimumIntegerDigits: 3 }).format;

const getPaginateInfo = (
	curPage: SearchQuery['page'],
	totalRecord: number,
	moduleId: NonNullable<ReturnType<typeof useModuleId>['moduleId']>
) => {
	const page = curPage || 1;

	const fromFormatted = totalRecord > 0 ? formatRecordCount((page - 1) * DEFAULT_LIMIT + 1) : '000';
	const toFormatted = formatRecordCount(page * DEFAULT_LIMIT > totalRecord ? totalRecord : page * DEFAULT_LIMIT);
	const totalRecordFormatted = formatRecordCount(totalRecord);

	return `${fromFormatted} - ${toFormatted} of ${totalRecordFormatted} ${moduleId}s`;
};

export default function TopFilter() {
	const { moduleId = 'effect' } = useModuleId();
	const { searchQuery } = useSearchQuery();

	const { totalPage, totalRecord } = useListQueryMeta({ moduleId, searchQuery });

	const paginateInfo = getPaginateInfo(searchQuery.page, totalRecord, moduleId);

	const isQueryEmpty = !Boolean(queryToParamsString(searchQuery));

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isQueryEmpty) setIsOpen(true);
	}, [isQueryEmpty]);

	return (
		<>
			<button
				onClick={() => setIsOpen(prev => !prev)}
				className='btn btn-outline btn-primary btn-sm z-10 order-2 w-fit select-none bg-base-100 capitalize text-base-content shadow-lg shadow-primary sm:order-1'
			>
				<FilterIcon className='aspect-square h-5' /> More filter
			</button>

			<div className='card relative order-1 ml-auto flex w-full flex-row gap-3 overflow-hidden bg-base-100 px-5 py-2 shadow-lg shadow-primary sm:order-2 sm:w-fit md:w-1/4 md:min-w-[300px]'>
				<SearchInput />
			</div>

			<Transition
				show={isOpen}
				as='nav'
				className='card order-3 flex w-full select-none flex-row flex-wrap gap-3 bg-base-100 px-5 py-3 shadow-lg shadow-primary'
				enter='transition-[opacity,transform] duration-300'
				enterFrom='opacity-0 -translate-y-3'
				enterTo='opacity-100 translate-y-0'
				leave='transition-[opacity,transform] duration-300'
				leaveFrom='opacity-100 translate-y-0'
				leaveTo='opacity-0 -translate-y-3'
			>
				<h2 className='w-full font-bold'>Filter Control</h2>

				<div className='my-auto flex flex-wrap gap-3'>
					<SortControl moduleId={moduleId} searchQuery={searchQuery} />
					<BookmarkFilter moduleId={moduleId} />
				</div>

				{moduleId !== 'effect' ? (
					<div className='flex flex-wrap gap-3'>
						{arrayInclude(['trait', 'item'], moduleId) ? <CategoryFilter /> : null}

						{moduleId === 'item' ? (
							<>
								<ColorFilter />
								<RecipeTypeFilter />
							</>
						) : null}

						{moduleId === 'rumor' ? <RumorTypeFilter /> : null}
					</div>
				) : null}

				<div className='my-auto flex flex-wrap gap-3'>
					<div className='my-auto min-w-[145px] gap-1 text-xs font-bold text-base-content/70'>{paginateInfo}</div>

					<Paginate searchQuery={searchQuery} totalPage={totalPage} />

					<QueryLink
						disabled={isQueryEmpty}
						aria-label='Reset Filter'
						className='btn btn-xs my-auto gap-1 capitalize shadow-md !shadow-current'
						href={{ query: {} }}
						isOverridden
						searchQuery={searchQuery}
					>
						Reset
					</QueryLink>

					<RefetchButton moduleId={moduleId} />
				</div>
			</Transition>
		</>
	);
}
