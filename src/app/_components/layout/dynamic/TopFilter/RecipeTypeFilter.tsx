import SelectOption from '@components/common/static/SelectOption';
import { colorTWClassMap, recipeTypeColorMap } from '@root/constants/common';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import type { RecipeTypeEnum } from '@root/types/common/zod/generic';
import { genericRecipeTypeEnumSchema } from '@root/types/common/zod/generic';
import { cn } from '@root/utils/common';

const filterDefValue = { value: null, label: 'Recipe type' } as const;

const filterList: Array<SelectOptionItem<RecipeTypeEnum>> = [
	filterDefValue,
	...genericRecipeTypeEnumSchema._def.values.map(recipeType => ({
		value: recipeType,
		icon: (
			<span
				aria-hidden
				className={cn(
					'card aspect-square h-4 border-[2px] border-solid border-base-content bg-current shadow-current xl:h-5',
					colorTWClassMap[recipeTypeColorMap[recipeType]].background
				)}
				key={recipeType}
			/>
		)
	}))
];

export default function RecipeTypeFilter() {
	const [recipeTypeSelected, setRecipeTypeSelected] = useQueryOnChange({
		filterDefValue,
		filterKey: 'recipeType',
		filterList
	});

	return (
		<SelectOption<RecipeTypeEnum>
			filterList={filterList}
			setValue={setRecipeTypeSelected}
			value={recipeTypeSelected}
			className='my-auto min-w-[11.5rem]'
			useCustomIcon
		/>
	);
}
