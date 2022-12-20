import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

const SortControl: FC = () => {
	const { isReady, updateQuery, securedQuery } = useSearchQuery();

	const { sortBy, direction } = useMemo(
		() => ({
			sortBy: securedQuery.sortBy || 'index',
			direction: securedQuery.direction || 'asc',
		}),
		[securedQuery.direction, securedQuery.sortBy],
	);

	return (
		<div className='my-auto flex w-full flex-wrap gap-2 2xl:w-auto'>
			<div className='input-group w-auto'>
				<button role='none' className='btn btn-xs capitalize' disabled>
					Sort:
				</button>

				<button
					role='navigation'
					aria-label='Sort By Index'
					disabled={!isReady}
					onClick={() => {
						if (sortBy !== 'index') updateQuery({ sortBy: 'index', direction: 'asc' });
					}}
					className={clsx(
						{
							'btn-active btn-primary': sortBy === 'index',
							'btn-secondary': sortBy !== 'index',
						},
						'btn btn-xs capitalize',
					)}
				>
					Index
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
							'btn-active btn-primary': sortBy === 'name',
							'btn-secondary': sortBy !== 'name',
						},
						'btn btn-xs capitalize',
					)}
				>
					Name
				</button>
			</div>
			<div className='input-group w-auto'>
				<button role='none' className='btn btn-xs capitalize' disabled>
					Direction:
				</button>

				<button
					role='navigation'
					aria-label='Sort Ascending'
					disabled={!isReady}
					onClick={() => {
						if (direction !== 'asc') updateQuery({ direction: 'asc' });
					}}
					className={clsx(
						{
							'btn-active btn-primary': direction === 'asc',
							'btn-secondary': direction !== 'asc',
						},
						'btn btn-xs',
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
							'btn-active btn-primary': direction === 'desc',
							'btn-secondary': direction !== 'desc',
						},
						'btn btn-xs',
					)}
				>
					desc
				</button>
			</div>
		</div>
	);
};

export default SortControl;
