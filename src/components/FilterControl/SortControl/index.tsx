import { sortByMap } from '@root/constants';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import type { ModuleIdProps } from '@root/types/common/props';
import SortBtn from './SortBtn';

type SortControlProps = ModuleIdProps;

export default function SortControl({ moduleId }: SortControlProps) {
	const { updateQuery, securedQuery } = useSecuredRouter();

	const sortBy = securedQuery.sortBy || (moduleId === 'rumor' ? 'price' : 'index');
	const direction = securedQuery.direction || 'asc';
	const sortFieldList = sortByMap[moduleId];

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
							onUpdateQuery={value => updateQuery({ sortBy: value, direction: 'asc' }, moduleId)}
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
							onUpdateQuery={value => updateQuery({ direction: value }, moduleId)}
						/>
					))}
				</div>
			</div>
		</>
	);
}
