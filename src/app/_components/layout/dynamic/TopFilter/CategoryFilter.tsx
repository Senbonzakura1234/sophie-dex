import SelectOption from '@components/common/static/SelectOption';
import { categoryIconMap } from '@root/constants/common';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import type { CategoryEnum } from '@root/types/common/zod';
import { categoryList } from '@root/types/model';

const categoryDefaultSelect = {
	value: null,
	label: 'Category',
} as const;

const categorySelectList: Array<SelectOptionItem<CategoryEnum>> = [
	categoryDefaultSelect,
	...categoryList.map(category => ({
		value: category,
		icon: (
			<span
				aria-hidden
				className={`aspect-square h-4 font-atelier text-accent xl:h-5 ${categoryIconMap[category]}`}
				key={category}
			/>
		),
	})),
];

export default function CategoryFilter() {
	const [cateSelected, setCateSelected] = useQueryOnChange('category', categorySelectList, categoryDefaultSelect);

	return (
		<SelectOption<CategoryEnum>
			list={categorySelectList}
			setValue={setCateSelected}
			value={cateSelected}
			className='my-auto min-w-[9.2rem]'
			useCustomIcon
		/>
	);
}
