import type { CATEGORY } from '@prisma/client';
import SelectOption from '@root/components/SelectOption';
import { categorySelectList } from '@root/components/SubComponent';
import type { CategoryFilterProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';

const CategoryFilter: FC<CategoryFilterProps> = ({
	filterData: { cateSelected },
	setFilterData: { setCateSelected },
	pageName,
}) => {
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
