import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { IsPaginateOnlyProps, PageNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

type SortControlProps = PageNameProps & IsPaginateOnlyProps;

const SortControl: FC<SortControlProps> = ({ pageName, isPaginateOnly }) => {
	const { isReady, updateQuery, securedQuery } = useSearchQuery();

	const { sortBy, direction } = useMemo(
		() => ({
			sortBy: securedQuery.sortBy || (pageName === 'Rumor' ? 'price' : 'index'),
			direction: securedQuery.direction || 'asc',
		}),
		[pageName, securedQuery.direction, securedQuery.sortBy],
	);

	return (
		<>
			<div className={clsx({ hidden: isPaginateOnly }, 'my-auto flex w-full flex-wrap gap-2 2xl:w-auto')}>
				<small className='my-auto text-sm font-bold'>Sort:</small>

				<div className='input-group w-auto'>
					<button
						role='navigation'
						aria-label='Sort By Index'
						disabled={!isReady || pageName === 'Rumor'}
						onClick={() => {
							if (sortBy !== 'index') updateQuery({ sortBy: 'index', direction: 'asc' });
						}}
						className={clsx(
							{
								'btn-active btn-primary text-slate-50': sortBy === 'index',
								'btn-ghost border-accent': sortBy !== 'index',
								hidden: pageName === 'Rumor',
							},
							'btn btn-xs border-y-2 border-r-0 capitalize',
						)}
					>
						Index
					</button>

					<button
						role='navigation'
						aria-label='Sort By Price'
						disabled={!isReady || pageName !== 'Rumor'}
						onClick={() => {
							if (sortBy !== 'price') updateQuery({ sortBy: 'price', direction: 'asc' });
						}}
						className={clsx(
							{
								'btn-active btn-primary text-slate-50': sortBy === 'price',
								'btn-ghost border-accent': sortBy !== 'price',
								hidden: pageName !== 'Rumor',
							},
							'btn btn-xs rounded-l-md border-y-2 border-r-0 capitalize',
						)}
					>
						Price
					</button>

					<button
						role='navigation'
						aria-label='Sort By Level'
						disabled={!isReady || pageName !== 'Item'}
						onClick={() => {
							if (sortBy !== 'level') updateQuery({ sortBy: 'level', direction: 'asc' });
						}}
						className={clsx(
							{
								'btn-active btn-primary no-animation cursor-default text-slate-50': sortBy === 'level',
								'btn-ghost border-accent': sortBy !== 'level',
								hidden: pageName !== 'Item',
							},
							'btn btn-xs border-y-2 border-x-0 capitalize',
						)}
					>
						Level
					</button>

					<button
						role='navigation'
						aria-label='Sort By Name'
						disabled={!isReady}
						onClick={() => {
							if (sortBy !== 'name') updateQuery({ sortBy: 'name', direction: 'asc' });
						}}
						className={clsx(
							{
								'btn-active btn-primary text-slate-50': sortBy === 'name',
								'btn-ghost border-accent': sortBy !== 'name',
							},
							'btn btn-xs border-y-2 border-l-0 capitalize',
						)}
					>
						Name
					</button>
				</div>
			</div>

			<div className={clsx({ hidden: isPaginateOnly }, 'my-auto flex w-full flex-wrap gap-2 2xl:w-auto')}>
				<small className='my-auto text-sm font-bold'>Direction:</small>

				<div className='input-group w-auto'>
					<button
						role='navigation'
						aria-label='Sort Ascending'
						disabled={!isReady}
						onClick={() => {
							if (direction !== 'asc') updateQuery({ direction: 'asc' });
						}}
						className={clsx(
							{
								'btn-active btn-primary no-animation cursor-default text-slate-50': direction === 'asc',
								'btn-ghost border-accent': direction !== 'asc',
							},
							'btn btn-xs border-y-2 border-r-0',
						)}
					>
						asc
					</button>

					<button
						role='navigation'
						aria-label='Sort Descending'
						disabled={!isReady}
						onClick={() => {
							if (direction !== 'desc') updateQuery({ direction: 'desc' });
						}}
						className={clsx(
							{
								'btn-active btn-primary text-slate-50': direction === 'desc',
								'btn-ghost border-accent': direction !== 'desc',
							},
							'btn btn-xs border-y-2 border-l-0',
						)}
					>
						desc
					</button>
				</div>
			</div>
		</>
	);
};

export default SortControl;
