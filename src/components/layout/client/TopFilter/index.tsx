'use client';

import QueryLink from '@root/components/common/client/QueryLink';
import RefetchButton from '@root/components/common/client/RefetchButton';
import FilterIcon from '@root/components/icons/outline/FilterIcon';
import ArrowPathIcon from '@root/components/icons/solid/ArrowPathIcon';
import Paginate from '@root/components/layout/client/Paginate';
import { DEFAULT_LIMIT } from '@root/constants/common';
import { useMediaQuery } from '@root/hooks/useMediaQuery';
import { useModuleId } from '@root/hooks/useModuleId';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import useSelector from '@root/hooks/useSelector';
import { arrayInclude, queryToParamsString } from '@root/utils/common';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import type { ModuleIdEnum, SearchQuery } from '@root/types/common/zod';
import CategoryFilter from './CategoryFilter';
import ColorFilter from './ColorFilter';
import RecipeTypeFilter from './RecipeTypeFilter';
import RumorTypeFilter from './RumorTypeFilter';
import SortControl from './SortControl';

const TransitionWrapper = dynamic(() => import('@root/components/dynamic/TransitionWrapper'), { ssr: false });

const formatRecordCount = new Intl.NumberFormat('en-US', { minimumIntegerDigits: 3 }).format;

const getPaginateInfo = (curPage: SearchQuery['page'], totalRecord: number, moduleId: ModuleIdEnum) => {
	const page = curPage || 1;

	const fromFormatted = formatRecordCount((page - 1) * DEFAULT_LIMIT + 1);
	const toFormatted = formatRecordCount(page * DEFAULT_LIMIT > totalRecord ? totalRecord : page * DEFAULT_LIMIT);
	const totalRecordFormatted = formatRecordCount(totalRecord);

	return `${fromFormatted} - ${toFormatted} of ${totalRecordFormatted} ${moduleId}s`;
};

export default function TopFilter() {
	const { moduleId = 'effect' } = useModuleId();
	const { searchQuery } = useSearchQuery();

	const {
		contentData: { totalRecord, totalPage },
	} = useSelector();

	const paginateInfo = getPaginateInfo(searchQuery.page, totalRecord, moduleId);

	const isQueryEmpty = !Boolean(queryToParamsString(searchQuery));

	const is2XLScreen = useMediaQuery('(min-width: 1536px)');

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isQueryEmpty || is2XLScreen) setIsOpen(true);
	}, [is2XLScreen, isQueryEmpty]);

	return (
		<>
			<div className='z-10 select-none 2xl:hidden'>
				<button onClick={() => setIsOpen(prev => !prev)} className='btn btn-primary btn-sm capitalize'>
					<FilterIcon className='aspect-square h-5' /> More filter
				</button>
			</div>

			<TransitionWrapper
				show={isOpen}
				as='nav'
				className='card select-none bg-base-100 shadow-lg shadow-primary'
				enter='transition-[opacity,transform] duration-300 transform'
				enterFrom='opacity-0 -translate-y-3'
				enterTo='opacity-100 translate-y-0'
				leave='transition-[opacity,transform] duration-300 transform'
				leaveFrom='opacity-100 translate-y-0'
				leaveTo='opacity-0 -translate-y-3'
			>
				<div className='flex w-full flex-row flex-wrap gap-3 px-5 py-3 2xl:place-content-end'>
					<h2 className='hidden w-full font-bold max-2xl:block'>Filter Control</h2>

					<SortControl moduleId={moduleId} searchQuery={searchQuery} />

					{moduleId !== 'effect' ? (
						<div className='flex flex-wrap gap-2'>
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

					<div className='my-auto min-w-[145px] gap-1 text-xs font-bold text-base-content/70'>{paginateInfo}</div>

					<Paginate searchQuery={searchQuery} totalPage={totalPage} />

					<QueryLink
						disabled={isQueryEmpty}
						aria-label='Reset Filter'
						className='btn btn-xs my-auto gap-1 capitalize !shadow-current dark:shadow'
						href={{ query: {} }}
						isOverridden
						searchQuery={searchQuery}
						role='navigation'
					>
						Reset
					</QueryLink>

					<RefetchButton className='btn btn-circle btn-primary btn-sm my-auto !border-none shadow-lg shadow-current !transition-opacity'>
						<ArrowPathIcon className='aspect-square h-4' />
					</RefetchButton>
				</div>
			</TransitionWrapper>
		</>
	);
}
