import { sortByMap } from '@root/constants';
import { useModuleId } from '@root/hooks/useModuleId';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import SortBtn from './SortBtn';

export default function SortControl() {
	const { updateQuery, securedQuery } = useSecuredRouter();

	const moduleId = useModuleId();

	const sortBy = securedQuery.sortBy || (moduleId === 'rumor' ? 'price' : 'index');
	const direction = securedQuery.direction || 'asc';
	const sortFieldList = sortByMap[moduleId || 'effect'];

	return (
		<>
			<div className='my-auto flex flex-wrap gap-2'>
				<small className='my-auto text-sm font-bold'>Sort:</small>

				<div className='join w-auto'>
					{sortFieldList.map(sortField => (
						<SortBtn
							key={sortField}
							isActive={sortBy === sortField}
							value={sortField}
							onUpdateQuery={value => updateQuery({ sortBy: value, direction: 'asc' })}
						/>
					))}
				</div>
			</div>

			<div className='my-auto flex flex-wrap gap-2'>
				<small className='my-auto text-sm font-bold'>Direction:</small>

				<div className='join w-auto'>
					{(['asc', 'desc'] as const).map(dir => (
						<SortBtn
							key={dir}
							isActive={dir === direction}
							value={dir}
							onUpdateQuery={value => updateQuery({ direction: value })}
						/>
					))}
				</div>
			</div>
		</>
	);
}
