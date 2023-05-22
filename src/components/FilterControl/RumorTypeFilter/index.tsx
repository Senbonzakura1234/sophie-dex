import SelectOption from '@root/components/SelectOption';
import { rumorTypeDefaultSelect, rumorTypeSelectList } from '@root/components/SubComponent';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { PageNameProps } from '@root/types/common/props';
import type { RumorTypeEnum } from '@root/types/common/zod';
import clsx from 'clsx';
import { useMemo } from 'react';

type RumorTypeFilterProps = PageNameProps;

export default function RumorTypeFilter({ pageName }: RumorTypeFilterProps) {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();

	const defaultRumorType = useMemo(
		() => rumorTypeSelectList.find(({ value }) => value === securedQuery.rumorType) ?? rumorTypeDefaultSelect,
		[securedQuery.rumorType],
	);

	const [rumorTypeSelected, setRumorTypeSelected] = useQueryOnChange<RumorTypeEnum | null>(
		defaultRumorType,
		rumorType => updateQuery({ page: null, rumorType }),
		isReady,
	);

	return (
		<SelectOption<RumorTypeEnum | null>
			list={rumorTypeSelectList}
			setValue={setRumorTypeSelected}
			value={rumorTypeSelected}
			className={clsx(
				{
					block: pageName === 'Rumor',
					hidden: pageName !== 'Rumor',
				},
				'my-auto w-2/3 min-w-fit sm:w-48',
			)}
			useCustomIcon
			withIcon
			useAtelierFont
		/>
	);
}
