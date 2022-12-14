import { getFramerFadeUp } from '@root/animations';
import { defaultLimit } from '@root/constants';
import type { FilterControlProps } from '@root/types/common/props';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useMemo } from 'react';

import CategoryFilter from './CategoryFilter';
import ColorFilter from './ColorFilter';
import Paginate from './Paginate';
import RecipeTypeFilter from './RecipeTypeFilter';
import ResetFilter from './ResetFilter';
import SearchInput from './SearchInput';
import SortControl from './SortControl';

const FilterControl: FC<FilterControlProps> = ({
	page = 1,
	totalPage = 0,
	totalRecord = 0,
	isPaginateOnly,
	pageName,
}) => {
	const { from, to } = useMemo(
		() => ({
			from: (page - 1) * defaultLimit + 1,
			to: page * defaultLimit > totalRecord ? totalRecord : page * defaultLimit,
		}),
		[page, totalRecord],
	);

	return (
		<>
			<motion.section
				{...getFramerFadeUp(0, 10, 0.1)}
				className={clsx({ hidden: isPaginateOnly }, 'container mx-auto max-2xl:px-4')}
			>
				<SearchInput />
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
						<RecipeTypeFilter pageName={pageName} />
						<ColorFilter pageName={pageName} />
						<CategoryFilter pageName={pageName} />
					</div>

					<div className={clsx({ hidden: isPaginateOnly }, 'text-neutral my-auto text-xs font-semibold')}>
						{from} - {to} of {totalRecord} {pageName.toLocaleLowerCase()}s
					</div>

					<Paginate page={page} totalPage={totalPage} />

					<ResetFilter isPaginateOnly={isPaginateOnly} />
				</nav>
			</motion.section>
		</>
	);
};

export default FilterControl;
