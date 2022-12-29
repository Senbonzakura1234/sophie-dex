import SelectOption from '@root/components/SelectOption';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { SelectOptionItem } from '@root/types/common';
import type { GoToPageSelectProps } from '@root/types/common/props';
import type { FC } from 'react';
import { useMemo } from 'react';

const GoToPageSelect: FC<GoToPageSelectProps> = ({ totalPage }) => {
	const { securedQuery, isReady, updateQuery } = useSearchQuery();

	const pageList: SelectOptionItem<number | null>[] = useMemo(
		() =>
			Array(totalPage)
				.fill(0)
				.map((_, i) => ({ value: i + 1, label: `Page ${i + 1}` })),
		[totalPage],
	);

	const [goToPage, setGoToPage] = useQueryOnChange<number | null>(
		{
			value: securedQuery.page ?? null,
			label: `Page ${securedQuery.page ?? '1'}`,
		},
		page => updateQuery({ page }),
		isReady,
	);

	return (
		<SelectOption<number | null>
			list={pageList}
			setValue={setGoToPage}
			value={goToPage}
			className='my-auto w-[7.5rem]'
			withIcon
		/>
	);
};

export default GoToPageSelect;
