import SelectOption from '@root/components/SelectOption';
import { categoryDefaultSelect, categorySelectList } from '@root/components/SubComponent';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { PageName } from '@root/types/common';
import type { PageNameProps } from '@root/types/common/props';
import type { CategoryEnum } from '@root/types/common/zod';
import clsx from 'clsx';
import { useMemo } from 'react';

type CategoryFilterProps = PageNameProps;

export default function CategoryFilter({ pageName }: CategoryFilterProps) {
	const { securedQuery, updateQuery, isRouterReady } = useSearchQuery();

	const defaultCate = useMemo(
		() => categorySelectList.find(({ value }) => value === securedQuery.category) ?? categoryDefaultSelect,
		[securedQuery.category],
	);

	const [cateSelected, setCateSelected] = useQueryOnChange<CategoryEnum | null>(
		defaultCate,
		category => updateQuery({ page: null, category }),
		isRouterReady,
	);

	return (
		<SelectOption<CategoryEnum | null>
			list={categorySelectList.filter(
				c =>
					pageName !== 'trait' ||
					!(['MATERIAL', 'KEY_ITEM', 'BOOK', 'MACHINE'] as (CategoryEnum | null)[]).includes(c.value),
			)}
			setValue={setCateSelected}
			value={cateSelected}
			className={clsx(
				{
					block: !(['effect', 'rumor', 'home'] as PageName[]).includes(pageName),
					hidden: (['effect', 'rumor', 'home'] as PageName[]).includes(pageName),
				},
				'my-auto w-2/3 min-w-fit sm:w-[10.25rem]',
			)}
			useCustomIcon
			withIcon
			useAtelierFont
		/>
	);
}
