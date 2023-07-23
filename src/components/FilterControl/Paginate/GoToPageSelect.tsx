import SelectOption from '@root/components/ui/static/SelectOption';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import type { ModuleIdProps } from '@root/types/common/props';
import { createArray } from '@root/utils/common';
import { useMemo } from 'react';

type GoToPageSelectProps = { totalPage: number } & ModuleIdProps;

const pageDefaultSelect = {
	value: null,
	label: <span>Page 1</span>,
};

export default function GoToPageSelect({ totalPage, moduleId }: GoToPageSelectProps) {
	const pageList: SelectOptionItem<number | null>[] = useMemo(
		() =>
			createArray(totalPage, 0).map((_, i) => ({
				value: i + 1,
				label: <span>Page {i + 1}</span>,
			})),
		[totalPage],
	);

	const [goToPage, setGoToPage] = useQueryOnChange('page', moduleId, pageList, pageDefaultSelect);

	return (
		<SelectOption<number | null>
			list={pageList}
			setValue={setGoToPage}
			value={goToPage}
			className='my-auto min-w-[7.5rem]'
		/>
	);
}
