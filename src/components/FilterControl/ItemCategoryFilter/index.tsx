import localFont from '@next/font/local';
import type { ITEM_CATEGORY } from '@prisma/client';
import SelectOption from '@root/components/SelectOption';
import { ItemCategorySelectList } from '@root/components/SubComponent';
import type { FilterData, SetFilterData } from '@root/types/common';
import type { FC } from 'react';

const AtelierFont = localFont({ src: '../../../assets/fonts/Atelier.woff2' });

const ItemCategoryFilter: FC<{
	filterData: FilterData;
	setFilterData: SetFilterData;
}> = ({ filterData: { itemCateSelected }, setFilterData: { setItemCateSelected } }) => {
	return (
		<div className='flex grow gap-2 xl:grow-0'>
			<small className='my-auto text-sm font-bold'>Category:</small>
			<SelectOption<ITEM_CATEGORY | null>
				style={AtelierFont.style}
				list={ItemCategorySelectList}
				setValue={setItemCateSelected}
				value={itemCateSelected}
				className='my-auto w-32 xl:w-36'
				useCustomIcon={false}
				withIcon={false}
			/>
		</div>
	);
};

export default ItemCategoryFilter;
