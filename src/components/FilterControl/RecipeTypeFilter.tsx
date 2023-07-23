import SelectOption from '@root/components/ui/static/SelectOption';
import { recipeTypeColorMap } from '@root/constants';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import type { ModuleIdProps } from '@root/types/common/props';
import type { RecipeTypeEnum } from '@root/types/common/zod';
import { recipeTypeList } from '@root/types/model';
import { convertCode } from '@root/utils/common';

type RecipeTypeFilterProps = ModuleIdProps;

const recipeTypeDefaultSelect = {
	value: null,
	label: 'Recipe type',
} as const;

const recipeTypeSelectList: SelectOptionItem<RecipeTypeEnum | null>[] = [
	recipeTypeDefaultSelect,
	...recipeTypeList.map(recipeType => ({
		label: <span className='capitalize'>{convertCode(recipeType)}</span>,
		value: recipeType,
		icon: (
			<span
				style={{ color: recipeTypeColorMap[recipeType].primary }}
				className='aspect-square h-4 rounded-full border-[2px] border-solid border-base-content bg-current shadow-current xl:h-5'
				aria-hidden='true'
			/>
		),
	})),
];

export default function RecipeTypeFilter({ moduleId }: RecipeTypeFilterProps) {
	const [recipeTypeSelected, setRecipeTypeSelected] = useQueryOnChange(
		'recipeType',
		moduleId,
		recipeTypeSelectList,
		recipeTypeDefaultSelect,
	);

	return (
		<SelectOption<RecipeTypeEnum | null>
			list={recipeTypeSelectList}
			setValue={setRecipeTypeSelected}
			value={recipeTypeSelected}
			className='my-auto min-w-[11.1rem]'
			useCustomIcon
		/>
	);
}
