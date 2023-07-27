import SelectOption from '@root/components/ui/static/SelectOption';
import { colorFilterMap } from '@root/constants';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import type { ColorEnum } from '@root/types/common/zod';
import { colorList } from '@root/types/model';

const colorDefaultSelect = {
	value: null,
	label: 'Color',
} as const;

const colorSelectList: SelectOptionItem<ColorEnum | null>[] = [
	colorDefaultSelect,
	...colorList.map(color => ({
		value: color,
		icon: (
			<span
				aria-hidden='true'
				className='aspect-square h-4 rounded-full border-[2px] border-solid border-base-content bg-current shadow-current xl:h-5'
				key={color}
				style={{ color: colorFilterMap[color].primary }}
			/>
		),
	})),
];

export default function ColorFilter() {
	const [colorSelected, setColorSelected] = useQueryOnChange('color', colorSelectList, colorDefaultSelect);

	return (
		<SelectOption<ColorEnum | null>
			list={colorSelectList}
			setValue={setColorSelected}
			value={colorSelected}
			className='my-auto min-w-[6.5rem]'
			useCustomIcon
		/>
	);
}
