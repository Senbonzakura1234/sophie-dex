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

const rumorTypeSelectList: SelectOptionItem<RumorTypeEnum | null>[] = [
	rumorTypeDefaultSelect,
	...rumorTypeList.map(rumorType => ({
		label: <span className='capitalize'>{rumorType.toLowerCase()}</span>,
		value: rumorType,
		icon: (
			<span className={`aspect-square h-4 font-atelier xl:h-5 ${rumorTypeIconMap[rumorType]}`} aria-hidden='true' />
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
		<SelectOption<RumorTypeEnum | null>
			list={rumorTypeSelectList}
			setValue={setRumorTypeSelected}
			value={rumorTypeSelected}
			className='my-auto min-w-[9rem]'
			useCustomIcon
		/>
	);
}
