import { sortByMap } from '@root/constants';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { IsBottomFilterProps } from '@root/types/common/props';
import type { TableEnum } from '@root/types/common/zod';
import { useMemo } from 'react';
import SortBtn from './SortBtn';

type SortControlProps = IsBottomFilterProps & { pageName: TableEnum };

export default function SortControl({ pageName, isBottomFilter: isBottomFilter }: SortControlProps) {
	const { isRouterReady, updateQuery, securedQuery } = useSearchQuery();

	const { sortBy, direction } = useMemo(
		() => ({
			sortBy: securedQuery.sortBy || (pageName === 'rumor' ? 'price' : 'index'),
			direction: securedQuery.direction || 'asc',
		}),
		[pageName, securedQuery.direction, securedQuery.sortBy],
	);

	const sortFieldList = useMemo(() => sortByMap[pageName], [pageName]);

	return (
		<>
			<div className={`my-auto flex w-full flex-wrap gap-2 2xl:w-auto ${isBottomFilter && 'hidden'}`}>
				<small className='my-auto text-sm font-bold'>Sort:</small>

				<div className='input-group w-auto'>
					{sortFieldList.map(sortField => (
						<SortBtn
							key={sortField}
							isActive={sortBy === sortField}
							disabled={!isRouterReady}
							value={sortField}
							onUpdateQuery={value => updateQuery({ sortBy: value, direction: 'asc' })}
						/>
					))}
				</div>
			</div>

			<div className={`my-auto flex w-full flex-wrap gap-2 2xl:w-auto ${isBottomFilter && 'hidden'}`}>
				<small className='my-auto text-sm font-bold'>Direction:</small>

				<div className='input-group w-auto'>
					{(['asc', 'desc'] as const).map(dir => (
						<SortBtn
							key={dir}
							isActive={dir === direction}
							disabled={!isRouterReady}
							value={dir}
							onUpdateQuery={value => updateQuery({ direction: value })}
						/>
					))}
				</div>
			</div>
		</>
	);
}
