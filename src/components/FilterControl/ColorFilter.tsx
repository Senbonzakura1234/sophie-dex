import SelectOption from '@root/components/ui/static/SelectOption';
import { colorFilterMap } from '@root/constants';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import type { ModuleIdProps } from '@root/types/common/props';
import type { ColorEnum } from '@root/types/common/zod';
import { colorList } from '@root/types/model';

type ColorFilterProps = ModuleIdProps;

const colorDefaultSelect = {
	value: null,
	label: 'Color',
} as const;

const colorSelectList: SelectOptionItem<ColorEnum | null>[] = [
	colorDefaultSelect,
	...colorList.map(color => ({
		label: <span className='capitalize'>{color.toLowerCase()}</span>,
		value: color,
		icon: (
			<span
				style={{ color: colorFilterMap[color].primary }}
				className='aspect-square h-4 rounded-full border-[2px] border-solid border-base-content bg-current shadow-current xl:h-5'
				aria-hidden='true'
			/>
		),
	})),
];

export default function ColorFilter({ moduleId }: ColorFilterProps) {
	const [colorSelected, setColorSelected] = useQueryOnChange('color', moduleId, colorSelectList, colorDefaultSelect);

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
