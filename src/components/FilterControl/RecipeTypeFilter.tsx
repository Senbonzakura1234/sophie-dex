import SelectOption from '@root/components/SelectOption';
import { recipeTypeDefaultSelect, recipeTypeSelectList } from '@root/components/SubComponent';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { RecipeTypeEnum } from '@root/types/common/zod';
import { useMemo } from 'react';

export default function RecipeTypeFilter() {
	const { securedQuery, updateQuery, isRouterReady } = useSearchQuery();

	const defaultRecipeType = useMemo(
		() => recipeTypeSelectList.find(({ value }) => value === securedQuery.recipeType) ?? recipeTypeDefaultSelect,
		[securedQuery.recipeType],
	);

	const [recipeTypeSelected, setRecipeTypeSelected] = useQueryOnChange<RecipeTypeEnum | null>(
		defaultRecipeType,
		recipeType => updateQuery({ page: null, recipeType }),
		isRouterReady,
	);

	return (
		<SelectOption<RecipeTypeEnum | null>
			list={recipeTypeSelectList}
			setValue={setRecipeTypeSelected}
			value={recipeTypeSelected}
			className='my-auto w-2/3 min-w-fit sm:w-48'
			useCustomIcon
			withIcon
		/>
	);
}