import type { RELATED_CATEGORY } from '@prisma/client';
import SelectOption from '@root/components/SelectOption';
import { RelatedCategorySelectList } from '@root/components/SubComponent';
import type { RelatedCategoryFilterProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';

const RelatedCategoryFilter: FC<RelatedCategoryFilterProps> = ({
	filterData: { relatedCateSelected: relatedCateSelected },
	setFilterData: { setrelatedCateSelected },
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
				list={RelatedCategorySelectList}
				setValue={setrelatedCateSelected}
				value={relatedCateSelected}
				className='my-auto w-32 2xl:w-32'
				useCustomIcon={false}
				withIcon={false}
			/>
		</div>
	);
};

export default RelatedCategoryFilter;
