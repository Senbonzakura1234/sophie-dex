import { recipeTypeColorMap } from '@root/constants';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import type { RecipeTypeEnum } from '@root/types/common/zod';

type RecipeTypeProps = { recipeType: RecipeTypeEnum };

export default function RecipeType({ recipeType }: RecipeTypeProps) {
	const { updateQuery, securedQuery } = useSecuredRouter();

	const isBtnDisabled = securedQuery.recipeType === recipeType;

	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold'>Recipe type: </div>

			<button
				aria-label={`Filter ${recipeType} Item`}
				className={`btn-xs btn !border-current !bg-current opacity-80 hover:opacity-100 ${
					isBtnDisabled ? '!no-animation !cursor-default !opacity-80' : ''
				}`}
				onClick={() => {
					if (!isBtnDisabled) updateQuery({ recipeType }, 'item');
				}}
				role='navigation'
				style={{ color: recipeTypeColorMap[recipeType].secondary }}
			>
				<span className='font-extrabold capitalize text-slate-50'>
					{recipeType.toLowerCase().replaceAll('_', ' ')}
				</span>
			</button>
		</div>
	);
}
