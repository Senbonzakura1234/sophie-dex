import SelectOption from '@components/common/static/SelectOption';
import { colorTWClassMap } from '@root/constants/common';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import type { ColorEnum } from '@root/types/common/zod/generic';
import { genericColorEnumSchema } from '@root/types/common/zod/generic';
import { cn } from '@root/utils/common';

const filterDefValue = { value: null, label: 'Color' } as const;

const filterList: Array<SelectOptionItem<ColorEnum>> = [
	filterDefValue,
	...genericColorEnumSchema._def.values.map(color => ({
		value: color,
		icon: (
			<span
				aria-hidden
				className={cn(
					'card aspect-square h-4 border-[2px] border-solid border-base-content bg-current shadow-current xl:h-5',
					colorTWClassMap[color].background
				)}
				key={color}
			/>
		)
	}))
];

export default function ColorFilter() {
	const [colorSelected, setColorSelected] = useQueryOnChange({
		filterDefValue,
		filterKey: 'color',
		filterList
	});

	return (
		<SelectOption<ColorEnum>
			filterList={filterList}
			setValue={setColorSelected}
			value={colorSelected}
			className='my-auto min-w-[6.5rem]'
			useCustomIcon
		/>
	);
}
