import SelectOption from '@components/common/static/SelectOption';
import { rumorTypeColorMap, rumorTypeIconMap } from '@root/constants/common';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import type { RumorTypeEnum } from '@root/types/common/zod/generic';
import { genericRumorTypeEnumSchema } from '@root/types/common/zod/generic';
import { cn } from '@root/utils/common';

const filterDefValue = { value: null, label: 'Rumor type' } as const;

const filterList: Array<SelectOptionItem<RumorTypeEnum>> = [
	filterDefValue,
	...genericRumorTypeEnumSchema._def.values.map(rumorType => ({
		value: rumorType,
		icon: (
			<span
				aria-hidden
				className={cn(
					'aspect-square h-4 font-atelier xl:h-5',
					rumorTypeIconMap[rumorType],
					rumorTypeColorMap[rumorType].background
				)}
				key={rumorType}
			/>
		)
	}))
];

export default function RumorTypeFilter() {
	const [rumorTypeSelected, setRumorTypeSelected] = useQueryOnChange({
		filterDefValue,
		filterKey: 'rumorType',
		filterList
	});

	return (
		<SelectOption<RumorTypeEnum>
			filterList={filterList}
			setValue={setRumorTypeSelected}
			value={rumorTypeSelected}
			className='my-auto min-w-36'
			useCustomIcon
		/>
	);
}
