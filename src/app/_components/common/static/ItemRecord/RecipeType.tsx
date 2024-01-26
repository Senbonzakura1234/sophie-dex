'use client';

import QueryLink from '@components/common/dynamic/QueryLink';
import { colorTWClassMap, recipeTypeColorMap } from '@root/constants/common';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { RecipeTypeEnum } from '@root/types/common/zod';
import { cn, convertCode } from '@root/utils/common';

type RecipeTypeProps = { recipeType: RecipeTypeEnum };

export default function RecipeType({ recipeType }: RecipeTypeProps) {
	const { searchQuery } = useSearchQuery();

	const isActive = recipeType === searchQuery.recipeType;

	const { background, foreground } = colorTWClassMap[recipeTypeColorMap[recipeType]];

	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div>Recipe type: </div>

			<QueryLink
				aria-label={`Filter ${recipeType} Item`}
				className={cn(
					'btn btn-xs !border-current !bg-current shadow-current',
					{ 'shadow-md': !isActive },
					background,
				)}
				href={{ query: { recipeType } }}
				isActive={isActive}
				searchQuery={searchQuery}
				resetPage
			>
				<span className={cn('font-bold capitalize', foreground)}>{convertCode(recipeType)}</span>
			</QueryLink>
		</div>
	);
}
