import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { RecipeTypeProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

const RecipeType: FC<RecipeTypeProps> = ({ recipeType }) => {
	const { isReady, updateQuery, securedQuery } = useSearchQuery();

	const isBtnDisabled = useMemo(
		() => !isReady || securedQuery.recipeType === recipeType,
		[recipeType, isReady, securedQuery.recipeType],
	);

	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold'>Recipe type: </div>

			<button
				onClick={() => {
					if (!isBtnDisabled) updateQuery({ recipeType, page: null });
				}}
				role='navigation'
				aria-label={`Filter ${recipeType} Item`}
				disabled={!isReady}
				className={clsx(
					{
						'!no-animation !cursor-default': isBtnDisabled,

						'!border-red-500 !bg-red-500': isBtnDisabled && recipeType === 'BEGINNER_RECIPES',
						'border-red-500 bg-red-500 hover:border-red-600 hover:bg-red-600': recipeType === 'BEGINNER_RECIPES',

						'!border-blue-500 !bg-blue-500': isBtnDisabled && recipeType === 'GROWTH_RECIPES',
						'border-blue-500 bg-blue-500 hover:border-blue-600 hover:bg-blue-600':
							recipeType === 'GROWTH_RECIPES',

						'!border-green-500 !bg-green-500': isBtnDisabled && recipeType === 'HOPE_RECIPES',
						'border-green-500 bg-green-500 hover:border-green-600 hover:bg-green-600':
							recipeType === 'HOPE_RECIPES',

						'!border-yellow-400 !bg-yellow-400': isBtnDisabled && recipeType === 'DREAM_RECIPES',
						'border-yellow-400 bg-yellow-400 hover:border-yellow-500 hover:bg-yellow-500':
							recipeType === 'DREAM_RECIPES',

						'!border-slate-500 !bg-slate-500': isBtnDisabled && recipeType === 'MYSTERY_RECIPES',
						'border-slate-500 bg-slate-500 hover:border-slate-600 hover:bg-slate-600':
							recipeType === 'MYSTERY_RECIPES',
					},
					'btn btn-xs font-extrabold capitalize !text-slate-50',
				)}
			>
				{recipeType.toLowerCase().replaceAll('_', ' ')}
			</button>
		</div>
	);
};

export default RecipeType;
