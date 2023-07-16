import SelectOption from '@root/components/ui/static/SelectOption';
import { recipeTypeColorMap } from '@root/constants';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import type { SelectOptionItem } from '@root/types/common';
import type { ModuleIdProps } from '@root/types/common/props';
import type { RecipeTypeEnum } from '@root/types/common/zod';
import { recipeTypeList } from '@root/types/model';
import { convertCode } from '@root/utils/common';
import { useMemo } from 'react';

type RecipeTypeFilterProps = ModuleIdProps;

const recipeTypeDefaultSelect = {
	value: null,
	label: 'Recipe type',
	icon: <span className='h-4 w-4 2xl:h-5 2xl:w-5' aria-hidden='true' />,
} as const;

const recipeTypeSelectList: SelectOptionItem<RecipeTypeEnum | null>[] = [
	recipeTypeDefaultSelect,
	...recipeTypeList.map(recipeType => ({
		label: <span className='capitalize'>{convertCode(recipeType)}</span>,
		value: recipeType,
		icon: (
			<span
				style={{ color: recipeTypeColorMap[recipeType].primary }}
				className='h-4 w-4 rounded-full bg-current shadow-current'
				aria-hidden='true'
			/>
		),
	})),
];

export default function RecipeTypeFilter({ moduleId }: RecipeTypeFilterProps) {
	const { securedQuery, updateQuery } = useSecuredRouter();

	const defaultRecipeType = useMemo(
		() => recipeTypeSelectList.find(({ value }) => value === securedQuery.recipeType) ?? recipeTypeDefaultSelect,
		[securedQuery.recipeType],
	);

	const [recipeTypeSelected, setRecipeTypeSelected] = useQueryOnChange<RecipeTypeEnum | null>(
		defaultRecipeType,
		recipeType => updateQuery({ recipeType }, moduleId),
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
