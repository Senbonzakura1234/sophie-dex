import { defaultLimit } from '@root/constants';
import { useModuleId } from '@root/hooks/useModuleId';
import type { PageControlProps } from '@root/types/common/props';
import { formatRecordCount, improvedInclude } from '@root/utils/common';
import dynamic from 'next/dynamic';
import Link from 'next/link';

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
const RumorTypeFilter = dynamic(() => import('./RumorTypeFilter'), {
	loading: () => <div className='h-8 w-40 animate-pulse rounded 2xl:h-9' />,
});
const SortControl = dynamic(() => import('./SortControl'), {
	loading: () => <div className='w- my-auto h-6 animate-pulse rounded' />,
});

type FilterControlProps = PageControlProps & { isBottomFilter?: boolean };

export default function FilterControl({
	page = 1,
	totalPage = 0,
	totalRecord = 0,
	isBottomFilter,
}: FilterControlProps) {
	const fromFormatted = formatRecordCount((page - 1) * defaultLimit + 1);
	const toFormatted = formatRecordCount(page * defaultLimit > totalRecord ? totalRecord : page * defaultLimit);
	const totalRecordFormatted = formatRecordCount(totalRecord);

	const moduleId = useModuleId();

	return (
		<section className={`container relative z-40 mx-auto max-2xl:px-4 ${isBottomFilter ? '!z-30' : ''}`}>
			<nav className='card bg-base-100 shadow-lg shadow-primary'>
				<div
					className={`flex w-full flex-row flex-wrap gap-3 px-5 py-3 ${
						isBottomFilter ? 'place-content-center' : '2xl:place-content-end'
					}`}
				>
					<h2 className={`hidden w-full font-extrabold ${!isBottomFilter ? 'max-2xl:block' : ''}`}>
						Filter Control:
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

							<div className='my-auto min-w-[145px] gap-1 text-xs font-semibold text-neutral'>
								{fromFormatted} - {toFormatted} of {totalRecordFormatted} {moduleId?.toLocaleLowerCase()}s
							</div>
						</>
					) : null}

					<Paginate page={page} totalPage={totalPage} />

					{!isBottomFilter ? (
						<Link
							aria-label='Reset Filter'
							className='btn btn-xs my-auto gap-1 capitalize'
							href={{ query: {} }}
							role='navigation'
						>
							Reset
						</Link>
					) : null}
				</div>
			</nav>
		</section>
	);
}
