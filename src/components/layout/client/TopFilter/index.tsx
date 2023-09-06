'use client';

import FilterIcon from '@root/components/common/server/icons/outline/FilterIcon';
import Paginate from '@root/components/layout/client/Paginate';
import { defaultLimit } from '@root/constants';
import { useMediaQuery } from '@root/hooks/useMediaQuery';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import useSelector from '@root/hooks/useSelector';
import { improvedInclude, parseQuery } from '@root/utils/common';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import CategoryFilter from './CategoryFilter';
import ColorFilter from './ColorFilter';
import RecipeTypeFilter from './RecipeTypeFilter';
import RumorTypeFilter from './RumorTypeFilter';
import SortControl from './SortControl';

const TransitionWrapper = dynamic(() => import('@root/components/common/client/TransitionWrapper'), { ssr: false });

const formatRecordCount = new Intl.NumberFormat('en-US', { minimumIntegerDigits: 3 }).format;

export default function TopFilter() {
	const { moduleId, searchQuery } = useSearchQuery();
	const page = searchQuery.page || 1;
	const {
		listMeta: { totalRecord, totalPage },
	} = useSelector();

	const fromFormatted = formatRecordCount((page - 1) * defaultLimit + 1);
	const toFormatted = formatRecordCount(page * defaultLimit > totalRecord ? totalRecord : page * defaultLimit);
	const totalRecordFormatted = formatRecordCount(totalRecord);

	const isQueryEmpty = Object.keys(parseQuery(searchQuery)).length === 0;
	const is2XLScreen = useMediaQuery('(min-width: 1536px)');

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isQueryEmpty || is2XLScreen) return setIsOpen(true);
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
					<h2 className='hidden w-full font-extrabold max-2xl:block'>Filter Control</h2>

					<SortControl />

					{moduleId !== 'effect' ? (
						<div className='flex flex-wrap gap-2'>
							{improvedInclude(['trait', 'item'], moduleId) ? <CategoryFilter /> : null}

							{moduleId === 'item' ? (
								<>
									<ColorFilter />
									<RecipeTypeFilter />
								</>
							) : null}

							{moduleId === 'rumor' ? <RumorTypeFilter /> : null}
						</div>
					) : null}

					<div className='my-auto min-w-[145px] gap-1 text-xs font-semibold text-base-content/70'>
						{fromFormatted} - {toFormatted} of {totalRecordFormatted} {moduleId}s
					</div>

					<Paginate page={page} totalPage={totalPage} />

					<Link
						aria-label='Reset Filter'
						className='btn btn-xs my-auto gap-1 capitalize'
						href={`/${moduleId}`}
						role='navigation'
					>
						Reset
					</Link>
				</div>
			</TransitionWrapper>
		</>
	);
}