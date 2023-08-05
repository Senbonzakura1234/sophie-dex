import { colorFilterMap } from '@root/constants';
import { useSearchQuery } from '@root/hooks/router';
import type { ColorEnum } from '@root/types/common/zod';
import QueryLink from '../ui/static/QueryLink';

type ColorProps = { color: ColorEnum };

export default function Color({ color }: ColorProps) {
	const { searchQuery } = useSearchQuery();

	const isActive = searchQuery.color === color;

	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold'>Color: </div>

			<QueryLink
				aria-label={`Filter ${color} Item`}
				className={`btn btn-xs !border-current !bg-current ${isActive ? '' : 'opacity-80 hover:opacity-100'}`}
				href={{ query: { color } }}
				isActive={isActive}
				resetPage
				style={{ color: colorFilterMap[color].secondary }}
			>
				<span className='font-extrabold capitalize text-slate-50'>{color.toLowerCase()}</span>
			</QueryLink>
		</div>
	);
}
