import type { RUMOR_TYPE } from '@prisma/client';
import SelectOption from '@root/components/SelectOption';
import { rumorTypeDefaultSelect, rumorTypeSelectList } from '@root/components/SubComponent';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { RumorTypeFilterProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

const RumorTypeFilter: FC<RumorTypeFilterProps> = ({ pageName }) => {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();

	const defaultRumorType = useMemo(
		() => rumorTypeSelectList.find(({ value }) => value === securedQuery.rumorType) ?? rumorTypeDefaultSelect,
		[securedQuery.rumorType],
	);

	const [rumorTypeSelected, setRumorTypeSelected] = useQueryOnChange<RUMOR_TYPE | null>(
		defaultRumorType,
		rumorType => updateQuery({ page: null, rumorType }),
		isReady,
	);

	return (
		<SelectOption<RUMOR_TYPE | null>
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
		/>
	);
};

export default RumorTypeFilter;
