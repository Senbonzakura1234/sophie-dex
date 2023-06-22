import SelectOption from '@root/components/SelectOption';
import { rumorTypeDefaultSelect, rumorTypeSelectList } from '@root/components/SubComponent';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { ModuleIdProps } from '@root/types/common/props';
import type { RumorTypeEnum } from '@root/types/common/zod';
import { useMemo } from 'react';

type RumorTypeFilterProps = ModuleIdProps;

export default function RumorTypeFilter({ moduleId }: RumorTypeFilterProps) {
	const { securedQuery, updateQuery, isRouterReady } = useSearchQuery();

	const defaultRumorType = useMemo(
		() => rumorTypeSelectList.find(({ value }) => value === securedQuery.rumorType) ?? rumorTypeDefaultSelect,
		[securedQuery.rumorType],
	);

	const [rumorTypeSelected, setRumorTypeSelected] = useQueryOnChange<RumorTypeEnum | null>(
		defaultRumorType,
		rumorType => updateQuery({ rumorType }, moduleId),
		isRouterReady,
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
