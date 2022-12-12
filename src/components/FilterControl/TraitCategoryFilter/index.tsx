import localFont from '@next/font/local';
import type { TRAIT_CATEGORY } from '@prisma/client';
import SelectOption from '@root/components/SelectOption';
import { TraitCategorySelectList } from '@root/components/SubComponent';
import type { FilterData, SetFilterData } from '@root/types/common';
import type { FC } from 'react';

const AtelierFont = localFont({ src: '../../../assets/fonts/atelier.woff2', preload: false });

const TraitCategoryFilter: FC<{
	filterData: FilterData;
	setFilterData: SetFilterData;
}> = ({ filterData: { traitCateSelected }, setFilterData: { setTraitCateSelected } }) => {
	return (
		<div className='flex grow gap-2 xl:grow-0'>
			<small className='my-auto text-sm font-bold'>Category:</small>
			<SelectOption<TRAIT_CATEGORY | null>
				style={AtelierFont.style}
				list={TraitCategorySelectList}
				setValue={setTraitCateSelected}
				value={traitCateSelected}
				className='my-auto w-40'
				useCustomIcon={true}
				withIcon={true}
			/>
		</div>
	);
};

export default TraitCategoryFilter;
