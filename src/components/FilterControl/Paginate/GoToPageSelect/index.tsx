import SelectOption from '@root/components/SelectOption';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { SelectOptionItem } from '@root/types/common';
import { useMemo } from 'react';

type GoToPageSelectProps = { totalPage: number };

export default function GoToPageSelect({ totalPage }: GoToPageSelectProps) {
	const { securedQuery, isRouterReady, updateQuery } = useSearchQuery();

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
		isRouterReady,
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
}
