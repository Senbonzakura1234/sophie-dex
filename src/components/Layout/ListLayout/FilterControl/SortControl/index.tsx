import { sortByMap } from '@root/constants';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import SortBtn from './SortBtn';

export default function SortControl() {
	const { searchQuery, moduleId } = useSearchQuery();

	const sortBy = searchQuery.sortBy || (moduleId === 'rumor' ? 'price' : 'index');
	const direction = searchQuery.direction || 'asc';
	const sortFieldList = sortByMap[moduleId || 'effect'];

	return (
		<>
			<div className='my-auto flex flex-wrap gap-2'>
				<small className='my-auto text-sm font-bold'>Sort:</small>

				<div className='join w-auto'>
					{sortFieldList.map(sortField => (
						<SortBtn
							aria-label={`Sort By ${sortField}`}
							key={sortField}
							isActive={sortBy === sortField}
							label={sortField}
							query={{ sortBy: sortField, direction: 'asc' }}
						/>
					))}
				</div>
			</div>

			<div className='my-auto flex flex-wrap gap-2'>
				<small className='my-auto text-sm font-bold'>Direction:</small>

				<div className='join w-auto'>
					{(['asc', 'desc'] as const).map(dir => (
						<SortBtn
							aria-label={`Sort ${dir}`}
							key={dir}
							isActive={dir === direction}
							label={dir}
							query={{ direction: dir }}
						/>
					))}
				</div>
			</div>
		</>
	);
}
