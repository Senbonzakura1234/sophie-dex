import type { COLOR } from '@prisma/client';
import SelectOption from '@root/components/SelectOption';
import { ColorSelectList, defaultSelect } from '@root/components/SubComponent';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { ColorFilterProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

const ColorFilter: FC<ColorFilterProps> = ({ pageName }) => {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();

	const defaultColor = useMemo(
		() => ColorSelectList.find(({ value }) => value === securedQuery.color) ?? defaultSelect,
		[securedQuery.color],
	);

	const [colorSelected, setColorSelected] = useQueryOnChange<COLOR | null>(
		defaultColor,
		color => updateQuery({ page: null, color }),
		isReady,
	);

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
			<small className='my-auto text-sm font-bold'>Color:</small>
			<SelectOption<COLOR | null>
				list={ColorSelectList}
				setValue={setColorSelected}
				value={colorSelected}
				className='my-auto w-32'
				useCustomIcon
				withIcon
			/>
		</div>
	);
};

export default ColorFilter;
