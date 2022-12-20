import type { RELATED_CATEGORY } from '@prisma/client';
import SelectOption from '@root/components/SelectOption';
import { ItemCategorySelectList } from '@root/components/SubComponent';
import type { ItemCategoryFilterProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';

const ItemCategoryFilter: FC<ItemCategoryFilterProps> = ({
	filterData: { itemCateSelected },
	setFilterData: { setItemCateSelected },
	pageName,
}) => {
	return (
		<div
			className={clsx(
				{
					flex: pageName === 'Item',
					hidden: pageName !== 'Item',
				},
				'grow gap-2 2xl:grow-0',
			)}
		>
			<small className='my-auto text-sm font-bold'>Category:</small>
			<SelectOption<RELATED_CATEGORY | null>
				list={ItemCategorySelectList}
				setValue={setItemCateSelected}
				value={itemCateSelected}
				className='my-auto w-32 2xl:w-32'
				useCustomIcon={false}
				withIcon={false}
			/>
		</div>
	);
};

export default ItemCategoryFilter;
