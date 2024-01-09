'use client';

import QueryLink from '@components/common/client/QueryLink';
import { colorTWClassMap } from '@root/constants/common';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { ColorEnum } from '@root/types/common/zod';

type ColorProps = { color: ColorEnum };

export default function Color({ color }: ColorProps) {
	const { searchQuery } = useSearchQuery();

	const isActive = color === searchQuery.color;

	const { background, foreground } = colorTWClassMap[color];

	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div>Color: </div>

			<QueryLink
				aria-label={`Filter ${color} Item`}
				className={`btn btn-xs !border-current !bg-current shadow-current ${
					isActive ? '' : 'shadow-md'
				} ${background}`}
				href={{ query: { color, id: null } }}
				isActive={isActive}
				searchQuery={searchQuery}
				resetPage
			>
				<span className={`font-bold capitalize ${foreground}`}>{color.toLowerCase()}</span>
			</QueryLink>
		</div>
	);
}