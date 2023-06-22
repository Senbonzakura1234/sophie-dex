import SelectOption from '@root/components/SelectOption';
import { categoryDefaultSelect, categorySelectList } from '@root/components/SubComponent';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { ModuleIdProps } from '@root/types/common/props';
import type { CategoryEnum } from '@root/types/common/zod';
import { improvedInclude } from '@root/utils/common';
import { useMemo } from 'react';

type CategoryFilterProps = ModuleIdProps;

export default function CategoryFilter({ moduleId }: CategoryFilterProps) {
	const { securedQuery, updateQuery, isRouterReady } = useSearchQuery();

	const defaultCate = useMemo(
		() => categorySelectList.find(({ value }) => value === securedQuery.category) ?? categoryDefaultSelect,
		[securedQuery.category],
	);

	const [cateSelected, setCateSelected] = useQueryOnChange<CategoryEnum | null>(
		defaultCate,
		category => updateQuery({ category }, moduleId),
		isRouterReady,
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
