import { recipeTypeColorMap } from '@root/constants';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { RecipeTypeEnum } from '@root/types/common/zod';

type RecipeTypeProps = { recipeType: RecipeTypeEnum };

export default function RecipeType({ recipeType }: RecipeTypeProps) {
	const { isRouterReady, updateQuery, securedQuery } = useSearchQuery();

	const isBtnDisabled = !isRouterReady || securedQuery.recipeType === recipeType;

	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold'>Recipe type: </div>

			<button
				onClick={() => {
					if (!isBtnDisabled) updateQuery({ recipeType });
				}}
				role='navigation'
				aria-label={`Filter ${recipeType} Item`}
				disabled={!isRouterReady}
				className={`btn-xs btn !border-current !bg-current opacity-80 hover:opacity-100 ${
					isBtnDisabled && '!no-animation !cursor-default !opacity-80'
				}`}
				style={{ color: recipeTypeColorMap[recipeType].secondary }}
			>
				<span className='font-extrabold capitalize text-slate-50'>
					{recipeType.toLowerCase().replaceAll('_', ' ')}
				</span>
			</button>
		</div>
	);
}
