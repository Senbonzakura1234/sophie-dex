'use client';

import QueryLink from '@root/components/common/client/QueryLink';
import { colorTWClassMap, recipeTypeColorMap } from '@root/constants/common';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { RecipeTypeEnum } from '@root/types/common/zod';
import { convertCode } from '@root/utils/common';
import { useMemo } from 'react';

type RecipeTypeProps = { recipeType: RecipeTypeEnum };

export default function RecipeType({ recipeType }: RecipeTypeProps) {
	const { searchQuery } = useSearchQuery();

	const isActive = useMemo(() => recipeType === searchQuery.recipeType, [recipeType, searchQuery.recipeType]);

	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div>Recipe type: </div>

			<QueryLink
				aria-label={`Filter ${recipeType} Item`}
				className={`btn btn-xs !border-current !bg-current shadow-current ${isActive ? '' : 'shadow-md'} ${
					colorTWClassMap[recipeTypeColorMap[recipeType]]
				}`}
				href={{ query: { recipeType } }}
				isActive={isActive}
				searchQuery={searchQuery}
				resetPage
			>
				<span className='font-bold capitalize text-slate-50'>{convertCode(recipeType)}</span>
			</QueryLink>
		</div>
	);
}
