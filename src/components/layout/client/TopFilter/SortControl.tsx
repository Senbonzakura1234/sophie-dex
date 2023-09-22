import QueryLink from '@root/components/common/client/QueryLink';
import { sortByMap } from '@root/constants';
import type { useModuleId } from '@root/hooks/useModuleId';
import type { useSearchQuery } from '@root/hooks/useSearchQuery';
import { useMemo } from 'react';

type SortControlProps = {
	moduleId: ReturnType<typeof useModuleId>['moduleId'];
	searchQuery: ReturnType<typeof useSearchQuery>['searchQuery'];
};

export default function SortControl({ moduleId, searchQuery }: SortControlProps) {
	const sortBy = useMemo(
		() => searchQuery.sortBy || (moduleId === 'rumor' ? 'price' : 'index'),
		[moduleId, searchQuery.sortBy],
	);
	const direction = useMemo(() => searchQuery.direction || 'asc', [searchQuery.direction]);
	const sortFieldList = useMemo(() => sortByMap[moduleId || 'effect'], [moduleId]);

	return (
		<>
			<div className='my-auto flex flex-wrap gap-2'>
				<small className='my-auto text-sm font-bold'>Sort:</small>

				<div className='join w-auto shadow-lg shadow-base-content/30'>
					{sortFieldList.map(sortField => (
						<QueryLink
							aria-label={`Sort By ${sortField}`}
							key={sortField}
							className={`btn join-item btn-xs border-y-2 capitalize ${
								sortBy === sortField ? 'btn-primary btn-active' : 'btn-ghost border-accent'
							}`}
							href={{ query: { sortBy: sortField, direction: 'asc' } }}
							isActive={sortBy === sortField}
							resetPage
							searchQuery={searchQuery}
						>
							{sortField}
						</QueryLink>
					))}
				</div>
			</div>

			<div className='my-auto flex flex-wrap gap-2'>
				<small className='my-auto text-sm font-bold'>Direction:</small>

				<div className='join w-auto shadow-lg shadow-base-content/30'>
					{(['asc', 'desc'] as const).map(dir => (
						<QueryLink
							aria-label={`Sort ${dir}`}
							key={dir}
							className={`btn join-item btn-xs border-y-2 capitalize ${
								dir === direction ? 'btn-primary btn-active' : 'btn-ghost border-accent'
							}`}
							href={{ query: { direction: dir } }}
							isActive={dir === direction}
							resetPage
							searchQuery={searchQuery}
						>
							{dir}
						</QueryLink>
					))}
				</div>
			</div>
		</>
	);
}
