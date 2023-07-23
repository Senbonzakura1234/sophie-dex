import SelectOption from '@root/components/ui/static/SelectOption';
import { categoryIconMap } from '@root/constants';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import type { ModuleIdProps } from '@root/types/common/props';
import type { CategoryEnum } from '@root/types/common/zod';
import { categoryList } from '@root/types/model';
import { convertCode } from '@root/utils/common';

type CategoryFilterProps = ModuleIdProps;

const categoryDefaultSelect = {
	value: null,
	label: 'Category',
} as const;

const categorySelectList: SelectOptionItem<CategoryEnum | null>[] = [
	categoryDefaultSelect,
	...categoryList.map(category => ({
		label: <span className='capitalize'>{convertCode(category)}</span>,
		value: category,
		icon: (
			<span className={`aspect-square h-4 font-atelier xl:h-5 ${categoryIconMap[category]}`} aria-hidden='true' />
		),
	})),
];

export default function CategoryFilter({ moduleId }: CategoryFilterProps) {
	const [cateSelected, setCateSelected] = useQueryOnChange(
		'category',
		moduleId,
		categorySelectList,
		categoryDefaultSelect,
	);

	return (
		<SelectOption<CategoryEnum | null>
			list={categorySelectList}
			setValue={setCateSelected}
			value={cateSelected}
			className='my-auto min-w-[9.2rem]'
			useCustomIcon
		/>
	);
}
