import type { CATEGORY } from '@prisma/client';
import SelectOption from '@root/components/SelectOption';
import { categoryDefaultSelect, categorySelectList } from '@root/components/SubComponent';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { PageName } from '@root/types/common';
import type { PageNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import { useMemo } from 'react';

type CategoryFilterProps = PageNameProps;

export default function CategoryFilter({ pageName }: CategoryFilterProps) {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();

	const defaultCate = useMemo(
		() => categorySelectList.find(({ value }) => value === securedQuery.category) ?? categoryDefaultSelect,
		[securedQuery.category],
	);

	const [cateSelected, setCateSelected] = useQueryOnChange<CATEGORY | null>(
		defaultCate,
		category => updateQuery({ page: null, category }),
		isReady,
	);

	return (
		<SelectOption<CATEGORY | null>
			list={categorySelectList}
			setValue={setCateSelected}
			value={cateSelected}
			className={clsx(
				{
					block: !(['Effect', 'Rumor', 'Home'] as PageName[]).includes(pageName),
					hidden: (['Effect', 'Rumor', 'Home'] as PageName[]).includes(pageName),
				},
				'my-auto w-2/3 min-w-fit sm:w-[10.25rem]',
			)}
			useCustomIcon
			withIcon
			useAtelierFont
		/>
	);
}
