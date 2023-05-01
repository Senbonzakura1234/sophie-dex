import type { RECIPE_TYPE } from '@prisma/client';
import SelectOption from '@root/components/SelectOption';
import { recipeTypeDefaultSelect, recipeTypeSelectList } from '@root/components/SubComponent';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { PageNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import { useMemo } from 'react';

type RecipeTypeFilterProps = PageNameProps;

export default function RecipeTypeFilter({ pageName }: RecipeTypeFilterProps) {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();

	const defaultRecipeType = useMemo(
		() => recipeTypeSelectList.find(({ value }) => value === securedQuery.recipeType) ?? recipeTypeDefaultSelect,
		[securedQuery.recipeType],
	);

	const [recipeTypeSelected, setRecipeTypeSelected] = useQueryOnChange<RECIPE_TYPE | null>(
		defaultRecipeType,
		recipeType => updateQuery({ page: null, recipeType }),
		isReady,
	);

	return (
		<SelectOption<RECIPE_TYPE | null>
			list={recipeTypeSelectList}
			setValue={setRecipeTypeSelected}
			value={recipeTypeSelected}
			className={clsx(
				{
					block: pageName === 'Item',
					hidden: pageName !== 'Item',
				},
				'my-auto w-2/3 min-w-fit sm:w-48',
			)}
			useCustomIcon
			withIcon
		/>
	);
}
