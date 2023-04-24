import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { IsBottomFilterProps, PageNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

type SortControlProps = PageNameProps & IsBottomFilterProps;

const SortControl: FC<SortControlProps> = ({ pageName, isBottomFilter: isBottomFilter }) => {
	const { isReady, updateQuery, securedQuery } = useSearchQuery();

	const { sortBy, direction } = useMemo(
		() => ({
			sortBy: securedQuery.sortBy || (pageName === 'Rumor' ? 'PRICE' : 'INDEX'),
			direction: securedQuery.direction || 'ASC',
		}),
		[pageName, securedQuery.direction, securedQuery.sortBy],
	);

	return (
		<>
			<div className={clsx({ hidden: isBottomFilter }, 'my-auto flex w-full flex-wrap gap-2 2xl:w-auto')}>
				<small className='my-auto text-sm font-bold'>Sort:</small>

				<div className='input-group w-auto'>
					<button
						role='navigation'
						aria-label='Sort By Index'
						disabled={!isReady || pageName === 'Rumor'}
						onClick={() => {
							if (sortBy !== 'INDEX') updateQuery({ sortBy: 'INDEX', direction: 'ASC' });
						}}
						className={clsx(
							{
								'btn-active btn-primary text-slate-50': sortBy === 'INDEX',
								'btn-ghost border-accent': sortBy !== 'INDEX',
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
							if (sortBy !== 'PRICE') updateQuery({ sortBy: 'PRICE', direction: 'ASC' });
						}}
						className={clsx(
							{
								'btn-active btn-primary text-slate-50': sortBy === 'PRICE',
								'btn-ghost border-accent': sortBy !== 'PRICE',
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
							if (sortBy !== 'LEVEL') updateQuery({ sortBy: 'LEVEL', direction: 'ASC' });
						}}
						className={clsx(
							{
								'btn-active btn-primary no-animation cursor-default text-slate-50': sortBy === 'LEVEL',
								'btn-ghost border-accent': sortBy !== 'LEVEL',
								hidden: pageName !== 'Item',
							},
							'btn btn-xs border-x-0 border-y-2 capitalize',
						)}
					>
						Level
					</button>

					<button
						role='navigation'
						aria-label='Sort By Name'
						disabled={!isReady}
						onClick={() => {
							if (sortBy !== 'NAME') updateQuery({ sortBy: 'NAME', direction: 'ASC' });
						}}
						className={clsx(
							{
								'btn-active btn-primary text-slate-50': sortBy === 'NAME',
								'btn-ghost border-accent': sortBy !== 'NAME',
							},
							'btn btn-xs border-y-2 border-l-0 capitalize',
						)}
					>
						Name
					</button>
				</div>
			</div>

			<div className={clsx({ hidden: isBottomFilter }, 'my-auto flex w-full flex-wrap gap-2 2xl:w-auto')}>
				<small className='my-auto text-sm font-bold'>Direction:</small>

				<div className='input-group w-auto'>
					<button
						role='navigation'
						aria-label='Sort Ascending'
						disabled={!isReady}
						onClick={() => {
							if (direction !== 'ASC') updateQuery({ direction: 'ASC' });
						}}
						className={clsx(
							{
								'btn-active btn-primary no-animation cursor-default text-slate-50': direction === 'ASC',
								'btn-ghost border-accent': direction !== 'ASC',
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
							if (direction !== 'DESC') updateQuery({ direction: 'DESC' });
						}}
						className={clsx(
							{
								'btn-active btn-primary text-slate-50': direction === 'DESC',
								'btn-ghost border-accent': direction !== 'DESC',
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
