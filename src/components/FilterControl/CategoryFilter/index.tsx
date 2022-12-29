import type { CATEGORY } from '@prisma/client';
import SelectOption from '@root/components/SelectOption';
import { categoryDefaultSelect, categorySelectList } from '@root/components/SubComponent';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { CategoryFilterProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

const CategoryFilter: FC<CategoryFilterProps> = ({ pageName }) => {
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
					block: pageName !== 'Effect',
					hidden: pageName === 'Effect',
				},
				'my-auto w-2/3 min-w-fit sm:w-[10.25rem]',
			)}
			useCustomIcon={true}
			withIcon={true}
			useAtelierFont={true}
		/>
	);
};

export default CategoryFilter;
