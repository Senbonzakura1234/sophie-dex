import SelectOption from '@components/common/static/SelectOption';
import { categoryIconMap } from '@root/constants/common';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import type { CategoryEnum } from '@root/types/common/zod/generic';
import { genericCategoryEnumSchema } from '@root/types/common/zod/generic';
import { cn } from '@root/utils/common';

const filterDefValue = { value: null, label: 'Item Category' } as const;

const filterList: Array<SelectOptionItem<CategoryEnum>> = [
	filterDefValue,
	...genericCategoryEnumSchema._def.values.map(category => ({
		value: category,
		icon: (
			<span
				aria-hidden
				className={cn('aspect-square h-4 font-atelier text-accent xl:h-5', categoryIconMap[category])}
				key={category}
			/>
		)
	}))
];

export default function CategoryFilter() {
	const [cateSelected, setCateSelected] = useQueryOnChange({
		filterDefValue,
		filterKey: 'category',
		filterList
	});

	return (
		<SelectOption<CategoryEnum>
			filterList={filterList}
			setValue={setCateSelected}
			value={cateSelected}
			className='my-auto min-w-44'
			useCustomIcon
		/>
	);
}
