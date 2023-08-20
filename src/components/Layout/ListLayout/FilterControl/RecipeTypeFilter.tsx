import SelectOption from '@root/components/ui/static/SelectOption';
import { colorTWClassMap, recipeTypeColorMap } from '@root/constants';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import type { RecipeTypeEnum } from '@root/types/common/zod';
import { recipeTypeList } from '@root/types/model';

const recipeTypeDefaultSelect = {
	value: null,
	label: 'Recipe type',
} as const;

const recipeTypeSelectList: SelectOptionItem<RecipeTypeEnum>[] = [
	recipeTypeDefaultSelect,
	...recipeTypeList.map(recipeType => ({
		value: recipeType,
		icon: (
			<span
				aria-hidden
				className={`aspect-square h-4 rounded-full border-[2px] border-solid border-base-content bg-current shadow-current xl:h-5 ${
					colorTWClassMap[recipeTypeColorMap[recipeType]]
				}`}
				key={recipeType}
			/>
		),
	})),
];

export default function RecipeTypeFilter() {
	const [recipeTypeSelected, setRecipeTypeSelected] = useQueryOnChange(
		'recipeType',
		recipeTypeSelectList,
		recipeTypeDefaultSelect,
	);

	return (
		<SelectOption<RecipeTypeEnum>
			list={recipeTypeSelectList}
			setValue={setRecipeTypeSelected}
			value={recipeTypeSelected}
			className='my-auto min-w-[11.5rem]'
			useCustomIcon
		/>
	);
}
