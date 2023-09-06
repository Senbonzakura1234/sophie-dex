import SelectOption from '@root/components/common/server/SelectOption';
import { colorTWClassMap } from '@root/constants';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import type { ColorEnum } from '@root/types/common/zod';
import { colorList } from '@root/types/model';

const colorDefaultSelect = {
	value: null,
	label: 'Color',
} as const;

const colorSelectList: Array<SelectOptionItem<ColorEnum>> = [
	colorDefaultSelect,
	...colorList.map(color => ({
		value: color,
		icon: (
			<span
				aria-hidden
				className={`card aspect-square h-4 border-[2px] border-solid border-base-content bg-current shadow-current xl:h-5 ${colorTWClassMap[color]}`}
				key={color}
			/>
		),
	})),
];

export default function ColorFilter() {
	const [colorSelected, setColorSelected] = useQueryOnChange('color', colorSelectList, colorDefaultSelect);

	return (
		<SelectOption<ColorEnum>
			list={colorSelectList}
			setValue={setColorSelected}
			value={colorSelected}
			className='my-auto min-w-[6.5rem]'
			useCustomIcon
		/>
	);
}