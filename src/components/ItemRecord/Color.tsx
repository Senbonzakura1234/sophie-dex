import { colorFilterTWClassMap } from '@root/constants';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
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
				className={`btn btn-xs !border-current !bg-current ${isActive ? '' : 'opacity-80 hover:opacity-100'} ${
					colorFilterTWClassMap[color]
				}`}
				href={{ query: { color, id: null } }}
				isActive={isActive}
				resetPage
			>
				<span className='font-extrabold capitalize text-slate-50'>{color.toLowerCase()}</span>
			</QueryLink>
		</div>
	);
}
