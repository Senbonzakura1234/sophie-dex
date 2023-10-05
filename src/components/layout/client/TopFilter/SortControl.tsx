import QueryLink from '@root/components/common/client/QueryLink';
import { sortByMap } from '@root/constants/common';
import type { useModuleId } from '@root/hooks/useModuleId';
import type { useSearchQuery } from '@root/hooks/useSearchQuery';
import { improvedIndexOf } from '@root/utils/common';

import TabWrapper from '@root/components/common/server/TabWrapper';

type SortControlProps = {
	moduleId: NonNullable<ReturnType<typeof useModuleId>['moduleId']>;
	searchQuery: ReturnType<typeof useSearchQuery>['searchQuery'];
};

export default function SortControl({ moduleId, searchQuery }: SortControlProps) {
	const currentSortBy = searchQuery.sortBy || (moduleId === 'rumor' ? 'price' : 'index');
	const currentDirection = searchQuery.direction || 'asc';

	const sortByList = sortByMap[moduleId];

	const directionList = ['asc', 'desc'] as const;

	return (
		<>
			<div className='my-auto flex flex-wrap gap-2'>
				<small className='my-auto text-sm font-bold'>Sort:</small>

				<TabWrapper
					activeStyleType='background'
					className='border-y-2 border-accent-focus'
					selectedIndex={improvedIndexOf(sortByList, currentSortBy, 0)}
					tabListLength={sortByList.length}
				>
					{sortByList.map(sortField => (
						<QueryLink
							aria-label={`Sort By ${sortField}`}
							key={sortField}
							className={`btn btn-ghost no-animation btn-xs z-10 rounded-none border-0 font-bold capitalize
								${currentSortBy === sortField ? 'text-primary-content' : ''}
							`}
							href={{ query: { sortBy: sortField, direction: 'asc' } }}
							isActive={currentSortBy === sortField}
							resetPage
							searchQuery={searchQuery}
						>
							{sortField}
						</QueryLink>
					))}
				</TabWrapper>
			</div>

			<div className='my-auto flex flex-wrap gap-2'>
				<small className='my-auto text-sm font-bold'>Direction:</small>

				<TabWrapper
					activeStyleType='background'
					className='border-y-2 border-accent-focus'
					selectedIndex={improvedIndexOf(directionList, currentDirection, 0)}
					tabListLength={directionList.length}
				>
					{directionList.map(dir => (
						<QueryLink
							aria-label={`Sort ${dir}`}
							key={dir}
							className={`btn btn-ghost no-animation btn-xs z-10 rounded-none border-0 font-bold capitalize ${
								dir === currentDirection ? 'text-primary-content' : ''
							}`}
							href={{ query: { direction: dir } }}
							isActive={dir === currentDirection}
							resetPage
							searchQuery={searchQuery}
						>
							{dir}
						</QueryLink>
					))}
				</TabWrapper>
			</div>
		</>
	);
}
