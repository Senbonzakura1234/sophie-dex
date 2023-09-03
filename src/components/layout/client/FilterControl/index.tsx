'use client';

import FilterIcon from '@root/assets/icons/outline/FilterIcon';
import { defaultLimit } from '@root/constants';
import { useMediaQuery } from '@root/hooks/useMediaQuery';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { improvedInclude, parseQuery } from '@root/utils/common';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import useSelector from '@root/hooks/useSelector';
import CategoryFilter from './CategoryFilter';
import ColorFilter from './ColorFilter';
import Paginate from './Paginate';
import RecipeTypeFilter from './RecipeTypeFilter';
import RumorTypeFilter from './RumorTypeFilter';
import SortControl from './SortControl';

type FilterControlProps = { isBottomFilter?: boolean };

const formatRecordCount = new Intl.NumberFormat('en-US', { minimumIntegerDigits: 3 }).format;

export default function FilterControl({ isBottomFilter }: FilterControlProps) {
	const { moduleId, searchQuery } = useSearchQuery();

	const {
		listMeta: { totalRecord, totalPage },
	} = useSelector();

	const page = searchQuery.page || 1;
	const isQueryEmpty = Object.keys(parseQuery(searchQuery)).length === 0;

	const fromFormatted = formatRecordCount((page - 1) * defaultLimit + 1);
	const toFormatted = formatRecordCount(page * defaultLimit > totalRecord ? totalRecord : page * defaultLimit);
	const totalRecordFormatted = formatRecordCount(totalRecord);

	const is2XLScreen = useMediaQuery('(min-width: 1536px)');

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isQueryEmpty || is2XLScreen || isBottomFilter) return setIsOpen(true);
	}, [is2XLScreen, isBottomFilter, isQueryEmpty]);

	return (
		<>
			<div className={`z-10 ${isBottomFilter ? 'hidden' : '2xl:hidden'}`}>
				<button onClick={() => setIsOpen(prev => !prev)} className='btn btn-primary btn-sm capitalize'>
					<FilterIcon className='aspect-square h-5' /> More filter
				</button>
			</div>

			<nav className={`card bg-base-100 shadow-lg shadow-primary ${isOpen ? '' : 'hidden'}`}>
				<div
					className={`flex w-full flex-row flex-wrap gap-3 px-5 py-3 ${
						isBottomFilter ? 'place-content-center' : '2xl:place-content-end'
					}`}
				>
					<h2 className={`hidden w-full font-extrabold ${!isBottomFilter ? 'max-2xl:block' : ''}`}>
						Filter Control
					</h2>

					{!isBottomFilter ? (
						<>
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
						</>
					) : null}

					<Paginate page={page} totalPage={totalPage} />

					{!isBottomFilter ? (
						<Link
							aria-label='Reset Filter'
							className='btn btn-xs my-auto gap-1 capitalize'
							href={`/${moduleId}`}
							role='navigation'
						>
							Reset
						</Link>
					) : null}
				</div>
			</nav>
		</>
	);
}
