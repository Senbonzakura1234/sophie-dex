import type { CATEGORY } from '@prisma/client';
import SelectOption from '@root/components/SelectOption';
import { categorySelectList, defaultSelect } from '@root/components/SubComponent';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { CategoryFilterProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

const CategoryFilter: FC<CategoryFilterProps> = ({ pageName }) => {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();

	const defaultCate = useMemo(
		() => categorySelectList.find(({ value }) => value === securedQuery.category) ?? defaultSelect,
		[securedQuery.category],
	);

	const [cateSelected, setCateSelected] = useQueryOnChange<CATEGORY | null>(
		defaultCate,
		category => updateQuery({ page: null, category }),
		isReady,
	);

	return (
		<div
			className={clsx(
				{
					flex: pageName !== 'Effect',
					hidden: pageName === 'Effect',
				},
				'grow gap-2 2xl:grow-0',
			)}
		>
			<small className='my-auto text-sm font-bold'>Category:</small>
			<SelectOption<CATEGORY | null>
				list={categorySelectList}
				setValue={setCateSelected}
				value={cateSelected}
				className='my-auto w-[10.25rem]'
				useCustomIcon={true}
				withIcon={true}
				useAtelierFont={true}
			/>
		</div>
	);
};

export default CategoryFilter;
