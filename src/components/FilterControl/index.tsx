import { defaultLimit } from '@root/constants';
import type { PageName } from '@root/types/common';
import type { PageControlProps } from '@root/types/common/props';

import type { TableEnum } from '@root/types/common/zod';

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

type FilterControlProps = PageControlProps & { isBottomFilter?: boolean } & { pageName: TableEnum };

export default function FilterControl({
	page = 1,
	totalPage = 0,
	totalRecord = 0,
	isBottomFilter,
	pageName,
}: FilterControlProps) {
	const from = (page - 1) * defaultLimit + 1;
	const to = page * defaultLimit > totalRecord ? totalRecord : page * defaultLimit;

	return (
		<section className={`container relative z-40 mx-auto max-2xl:px-4 ${isBottomFilter && '!z-30'}`}>
			<nav className='card bg-base-100 shadow-lg shadow-primary'>
				<div
					className={`flex w-full flex-row flex-wrap gap-3 px-5 py-3 ${
						isBottomFilter ? 'place-content-center' : '2xl:place-content-end'
					}`}
				>
					<h2 className={`hidden font-extrabold ${!isBottomFilter && 'max-2xl:block'}`}>Filter Control:</h2>

					{!isBottomFilter ? (
						<>
							<SortControl pageName={pageName} />

							<div className='flex flex-wrap gap-2'>
								{(['trait', 'item'] as PageName[]).includes(pageName) ? (
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

							<div className='my-auto text-xs font-semibold text-neutral'>
								{from} - {to} of {totalRecord} {pageName.toLocaleLowerCase()}s
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
