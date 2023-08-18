import SelectOption from '@root/components/ui/static/SelectOption';
import { rumorTypeIconMap } from '@root/constants';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import type { RumorTypeEnum } from '@root/types/common/zod';
import { rumorTypeList } from '@root/types/model';

const rumorTypeDefaultSelect = {
	value: null,
	label: 'Rumor type',
} as const;

const rumorTypeSelectList: SelectOptionItem<RumorTypeEnum>[] = [
	rumorTypeDefaultSelect,
	...rumorTypeList.map(rumorType => ({
		value: rumorType,
		icon: (
			<span
				aria-hidden
				className={`aspect-square h-4 font-atelier xl:h-5 ${rumorTypeIconMap[rumorType]}`}
				key={rumorType}
			/>
		),
	})),
];

export default function RumorTypeFilter() {
	const [rumorTypeSelected, setRumorTypeSelected] = useQueryOnChange(
		'rumorType',
		rumorTypeSelectList,
		rumorTypeDefaultSelect,
	);

	return (
		<SelectOption<RumorTypeEnum>
			list={rumorTypeSelectList}
			setValue={setRumorTypeSelected}
			value={rumorTypeSelected}
			className='my-auto min-w-[9rem]'
			useCustomIcon
		/>
	);
}
