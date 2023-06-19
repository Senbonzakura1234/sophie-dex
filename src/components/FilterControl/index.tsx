import { defaultLimit } from '@root/constants';
import type { PageControlProps, PageNameProps } from '@root/types/common/props';

import { formatRecordCount, improvedInclude } from '@root/utils/common';

import dynamic from 'next/dynamic';

const CategoryFilter = dynamic(() => import('./CategoryFilter'), {
	loading: () => <div className='h-8 w-40 animate-pulse rounded 2xl:h-9' />,
});
const ColorFilter = dynamic(() => import('./ColorFilter'), {
	loading: () => <div className='h-8 w-40 animate-pulse rounded 2xl:h-9' />,
});
const Paginate = dynamic(() => import('./Paginate'), {
	loading: () => <div className='h-8 w-[280px] animate-pulse rounded 2xl:h-9' />,
});
const RecipeTypeFilter = dynamic(() => import('./RecipeTypeFilter'), {
	loading: () => <div className='h-8 w-40 animate-pulse rounded 2xl:h-9' />,
});
const ResetFilter = dynamic(() => import('./ResetFilter'), {
	loading: () => <div className='my-auto h-6 w-[52px] animate-pulse rounded' />,
});
const RumorTypeFilter = dynamic(() => import('./RumorTypeFilter'), {
	loading: () => <div className='h-8 w-40 animate-pulse rounded 2xl:h-9' />,
});
const SortControl = dynamic(() => import('./SortControl'), {
	loading: () => <div className='w- my-auto h-6 animate-pulse rounded' />,
});

type FilterControlProps = PageControlProps & PageNameProps & { isBottomFilter?: boolean };

export default function FilterControl({
	page = 1,
	totalPage = 0,
	totalRecord = 0,
	isBottomFilter,
	pageName,
}: FilterControlProps) {
	const fromFormatted = formatRecordCount((page - 1) * defaultLimit + 1);
	const toFormatted = formatRecordCount(page * defaultLimit > totalRecord ? totalRecord : page * defaultLimit);
	const totalRecordFormatted = formatRecordCount(totalRecord);

	return (
		<section className={`container relative z-40 mx-auto max-2xl:px-4 ${isBottomFilter && '!z-30'}`}>
			<nav className='card bg-base-100 shadow-lg shadow-primary'>
				<div
					className={`flex w-full flex-row flex-wrap gap-3 px-5 py-3 ${
						isBottomFilter ? 'place-content-center' : '2xl:place-content-end'
					}`}
				>
					<h2 className={`hidden w-full font-extrabold ${!isBottomFilter && 'max-2xl:block'}`}>Filter Control:</h2>

					{!isBottomFilter ? (
						<>
							<SortControl pageName={pageName} />

							{pageName !== 'effect' ? (
								<div className='flex flex-wrap gap-2'>
									{improvedInclude(['trait', 'item'], pageName) ? (
										<CategoryFilter pageName={pageName} />
									) : null}

									{pageName === 'item' ? (
										<>
											<ColorFilter />
											<RecipeTypeFilter />
										</>
									) : null}

									{pageName === 'rumor' ? <RumorTypeFilter /> : null}
								</div>
							) : null}

							<div className='my-auto min-w-[145px] gap-1 text-xs font-semibold text-neutral'>
								{fromFormatted} - {toFormatted} of {totalRecordFormatted} {pageName.toLocaleLowerCase()}s
							</div>
						</>
					) : null}

					<Paginate page={page} totalPage={totalPage} />

					{!isBottomFilter ? <ResetFilter /> : null}
				</div>
			</nav>
		</section>
	);
}
