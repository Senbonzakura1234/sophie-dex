import type { TRAIT_CATEGORY } from '@prisma/client';
import SelectOption from '@root/components/SelectOption';
import { TraitCategorySelectList } from '@root/components/SubComponent';
import type { TraitCategoryFilterProps } from '@root/types/common';
import type { FC } from 'react';

const TraitCategoryFilter: FC<TraitCategoryFilterProps> = ({
	filterData: { traitCateSelected },
	setFilterData: { setTraitCateSelected },
}) => {
	return (
		<div className='flex grow gap-2 2xl:grow-0'>
			<small className='my-auto text-sm font-bold'>Category:</small>
			<SelectOption<TRAIT_CATEGORY | null>
				list={TraitCategorySelectList}
				setValue={setTraitCateSelected}
				value={traitCateSelected}
				className='my-auto w-36'
				useCustomIcon={true}
				withIcon={true}
				useAtelierFont={true}
			/>
		</div>
	);
};

export default TraitCategoryFilter;
