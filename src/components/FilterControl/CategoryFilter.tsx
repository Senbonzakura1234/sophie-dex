import SelectOption from '@root/components/ui/static/SelectOption';
import { categoryIconMap } from '@root/constants';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import type { SelectOptionItem } from '@root/types/common';
import type { ModuleIdProps } from '@root/types/common/props';
import type { CategoryEnum } from '@root/types/common/zod';
import { categoryList } from '@root/types/model';
import { convertCode, improvedInclude } from '@root/utils/common';
import { useMemo } from 'react';

type CategoryFilterProps = ModuleIdProps;

const categoryDefaultSelect = {
	value: null,
	label: 'Category',
	icon: <span className='h-4 w-4 2xl:h-5 2xl:w-5' aria-hidden='true' />,
} as const;

const categorySelectList: SelectOptionItem<CategoryEnum | null>[] = [
	categoryDefaultSelect,
	...categoryList.map(category => ({
		label: <span className='capitalize'>{convertCode(category)}</span>,
		value: category,
		icon: <span className={`h-4 w-4 2xl:h-5 2xl:w-5 ${categoryIconMap[category]}`} aria-hidden='true' />,
	})),
];

export default function CategoryFilter({ moduleId }: CategoryFilterProps) {
	const { securedQuery, updateQuery } = useSecuredRouter();

	const defaultCate = useMemo(
		() => categorySelectList.find(({ value }) => value === securedQuery.category) ?? categoryDefaultSelect,
		[securedQuery.category],
	);

	const [cateSelected, setCateSelected] = useQueryOnChange<CategoryEnum | null>(defaultCate, category =>
		updateQuery({ category }, moduleId),
	);

	return (
		<SelectOption<CategoryEnum | null>
			list={categorySelectList.filter(
				c => moduleId !== 'trait' || !improvedInclude(['MATERIAL', 'KEY_ITEM', 'BOOK', 'MACHINE'], c.value),
			)}
			setValue={setCateSelected}
			value={cateSelected}
			className='my-auto w-2/3 min-w-fit sm:w-[10.25rem]'
			useCustomIcon
			withIcon
			useAtelierFont
		/>
	);
}
