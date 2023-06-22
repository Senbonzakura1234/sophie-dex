import SelectOption from '@root/components/SelectOption';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { SelectOptionItem } from '@root/types/common';
import type { ModuleIdProps } from '@root/types/common/props';
import { createArray } from '@root/utils/common';
import { useMemo } from 'react';

type GoToPageSelectProps = { totalPage: number } & ModuleIdProps;

export default function GoToPageSelect({ totalPage, moduleId }: GoToPageSelectProps) {
	const { securedQuery, isRouterReady, updateQuery } = useSearchQuery();

	const pageList: SelectOptionItem<number | null>[] = useMemo(
		() =>
			createArray(totalPage, 0).map((_, i) => ({
				value: i + 1,
				label: (
					<>
						<span className='max-sm:hidden'>Page </span> {i + 1}
					</>
				),
			})),
		[totalPage],
	);

	const [goToPage, setGoToPage] = useQueryOnChange<number | null>(
		{
			value: securedQuery.page ?? null,
			label: (
				<>
					<span className='max-sm:hidden'>Page </span> {securedQuery.page ?? '1'}
				</>
			),
		},
		page => updateQuery({ page }, moduleId),
		isRouterReady,
	);

	return (
		<SelectOption<number | null>
			list={pageList}
			setValue={setGoToPage}
			value={goToPage}
			className='my-auto w-20 sm:w-[7.5rem]'
			withIcon
		/>
	);
}
