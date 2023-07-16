import SelectOption from '@root/components/ui/static/SelectOption';
import { colorFilterMap } from '@root/constants';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import type { SelectOptionItem } from '@root/types/common';
import type { ModuleIdProps } from '@root/types/common/props';
import type { ColorEnum } from '@root/types/common/zod';
import { colorList } from '@root/types/model';
import { useMemo } from 'react';

type ColorFilterProps = ModuleIdProps;

const colorDefaultSelect = {
	value: null,
	label: 'Color',
	icon: <span className='h-4 w-4 2xl:h-5 2xl:w-5' aria-hidden='true' />,
} as const;

const colorSelectList: SelectOptionItem<ColorEnum | null>[] = [
	colorDefaultSelect,
	...colorList.map(color => ({
		label: <span className='capitalize'>{color.toLowerCase()}</span>,
		value: color,
		icon: (
			<span
				style={{ color: colorFilterMap[color].primary }}
				className='h-4 w-4 rounded-full bg-current shadow-current'
				aria-hidden='true'
			/>
		),
	})),
];

export default function ColorFilter({ moduleId }: ColorFilterProps) {
	const { securedQuery, updateQuery } = useSecuredRouter();

	const defaultColor = useMemo(
		() => colorSelectList.find(({ value }) => value === securedQuery.color) ?? colorDefaultSelect,
		[securedQuery.color],
	);

	const [colorSelected, setColorSelected] = useQueryOnChange<ColorEnum | null>(defaultColor, color =>
		updateQuery({ color }, moduleId),
	);

	return (
		<SelectOption<ColorEnum | null>
			list={colorSelectList}
			setValue={setColorSelected}
			value={colorSelected}
			className='my-auto w-2/3 min-w-fit sm:w-32'
			useCustomIcon
			withIcon
		/>
	);
}
