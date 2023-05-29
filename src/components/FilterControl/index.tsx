import { getFramerFadeUp, getFramerInViewFadeUp } from '@root/animations';
import AnimationWrapper from '@root/components/AnimationWrapper';
import { defaultLimit } from '@root/constants';
import type { IsBottomFilterProps, IsDataReadyProps, PageControlProps, PageNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import { useMemo } from 'react';

import CategoryFilter from './CategoryFilter';
import ColorFilter from './ColorFilter';
import Paginate from './Paginate';
import RecipeTypeFilter from './RecipeTypeFilter';
import ResetFilter from './ResetFilter';
import RumorTypeFilter from './RumorTypeFilter';
import SortControl from './SortControl';

type FilterControlProps = PageControlProps & PageNameProps & IsBottomFilterProps & IsDataReadyProps;

export default function FilterControl({
	page = 1,
	totalPage = 0,
	totalRecord = 0,
	isBottomFilter,
	isDataReady,
	pageName,
}: FilterControlProps) {
	const { from, to } = useMemo(
		() => ({
			from: (page - 1) * defaultLimit + 1,
			to: page * defaultLimit > totalRecord ? totalRecord : page * defaultLimit,
		}),
		[page, totalRecord],
	);

	return (
		<section className={clsx({ '!z-30': isBottomFilter }, 'container relative z-40 mx-auto max-2xl:px-4')}>
			<LazyMotion features={domAnimation} strict>
				<motion.nav {...getFramerInViewFadeUp()} className='card bg-base-100 shadow-lg shadow-primary'>
					<AnimationWrapper
						show={isDataReady}
						options={getFramerFadeUp(0, 10)}
						className={clsx(
							{
								'2xl:place-content-end': !isBottomFilter,
								'place-content-center': isBottomFilter,
							},
							'flex w-full flex-row flex-wrap gap-3 px-5 py-3',
						)}
						placeholder={<motion.div {...getFramerFadeUp(0, 10)} className='h-[60px] w-full animate-pulse' />}
					>
						<h2
							className={clsx(
								{
									'max-2xl:block': !isBottomFilter,
								},
								'hidden font-extrabold',
							)}
						>
							Filter Control:
						</h2>

						<SortControl pageName={pageName} isBottomFilter={isBottomFilter} />

						<div className={clsx({ hidden: isBottomFilter }, 'flex flex-wrap gap-2')}>
							<RecipeTypeFilter pageName={pageName} />
							<ColorFilter pageName={pageName} />
							<CategoryFilter pageName={pageName} />
							<RumorTypeFilter pageName={pageName} />
						</div>

						<div className={clsx({ hidden: isBottomFilter }, 'my-auto text-xs font-semibold text-neutral')}>
							{from} - {to} of {totalRecord} {pageName.toLocaleLowerCase()}s
						</div>

						<Paginate page={page} totalPage={totalPage} />

						<ResetFilter isBottomFilter={isBottomFilter} />
					</AnimationWrapper>
				</motion.nav>
			</LazyMotion>
		</section>
	);
}
