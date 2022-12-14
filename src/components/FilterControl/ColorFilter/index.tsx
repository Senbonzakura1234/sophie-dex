import type { COLOR } from '@prisma/client';
import SelectOption from '@root/components/SelectOption';
import { ColorSelectList } from '@root/components/SubComponent';
import type { ColorFilterProps } from '@root/types/common';
import type { FC } from 'react';

const ColorFilter: FC<ColorFilterProps> = ({ filterData: { colorSelected }, setFilterData: { setColorSelected } }) => {
	return (
		<div className='flex grow gap-2 2xl:grow-0'>
			<small className='my-auto text-sm font-bold'>Color:</small>
			<SelectOption<COLOR | null>
				list={ColorSelectList}
				setValue={setColorSelected}
				value={colorSelected}
				className='my-auto w-28'
				useCustomIcon={false}
				withIcon={false}
			/>
		</div>
	);
};

export default ColorFilter;
