import { colorFilterTWClassMap, recipeTypeColorMap } from '@root/constants';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { RecipeTypeEnum } from '@root/types/common/zod';
import { convertCode } from '@root/utils/common';
import QueryLink from '../ui/static/QueryLink';

type RecipeTypeProps = { recipeType: RecipeTypeEnum };

export default function RecipeType({ recipeType }: RecipeTypeProps) {
	const { searchQuery } = useSearchQuery();

	const isActive = searchQuery.recipeType === recipeType;

	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold'>Recipe type: </div>

			<QueryLink
				aria-label={`Filter ${recipeType} Item`}
				className={`btn btn-xs !border-current !bg-current ${
					colorFilterTWClassMap[recipeTypeColorMap[recipeType]]
				} ${isActive ? '' : 'opacity-80 hover:opacity-100'}`}
				href={{ query: { recipeType } }}
				isActive={isActive}
				resetPage
			>
				<span className='font-extrabold capitalize text-slate-50'>{convertCode(recipeType)}</span>
			</QueryLink>
		</div>
	);
}
