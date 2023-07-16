import SelectOption from '@root/components/ui/static/SelectOption';
import { rumorTypeIconMap } from '@root/constants';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import type { SelectOptionItem } from '@root/types/common';
import type { ModuleIdProps } from '@root/types/common/props';
import type { RumorTypeEnum } from '@root/types/common/zod';
import { rumorTypeList } from '@root/types/model';
import { useMemo } from 'react';

type RumorTypeFilterProps = ModuleIdProps;

const rumorTypeDefaultSelect = {
	value: null,
	label: 'Rumor type',
	icon: <span className='h-4 w-4 2xl:h-5 2xl:w-5' aria-hidden='true' />,
} as const;

const rumorTypeSelectList: SelectOptionItem<RumorTypeEnum | null>[] = [
	rumorTypeDefaultSelect,
	...rumorTypeList.map(rumorType => ({
		label: <span className='capitalize'>{rumorType.toLowerCase()}</span>,
		value: rumorType,
		icon: <span className={`h-4 w-4 2xl:h-5 2xl:w-5 ${rumorTypeIconMap[rumorType]}`} aria-hidden='true' />,
	})),
];

export default function RumorTypeFilter({ moduleId }: RumorTypeFilterProps) {
	const { securedQuery, updateQuery } = useSecuredRouter();

	const defaultRumorType = useMemo(
		() => rumorTypeSelectList.find(({ value }) => value === securedQuery.rumorType) ?? rumorTypeDefaultSelect,
		[securedQuery.rumorType],
	);

	const [rumorTypeSelected, setRumorTypeSelected] = useQueryOnChange<RumorTypeEnum | null>(
		defaultRumorType,
		rumorType => updateQuery({ rumorType }, moduleId),
	);

	return (
		<SelectOption<RumorTypeEnum | null>
			list={rumorTypeSelectList}
			setValue={setRumorTypeSelected}
			value={rumorTypeSelected}
			className='my-auto w-2/3 min-w-fit sm:w-48'
			useCustomIcon
			withIcon
			useAtelierFont
		/>
	);
}
