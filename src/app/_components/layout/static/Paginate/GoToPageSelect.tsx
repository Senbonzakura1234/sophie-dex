import SelectOption from '@components/common/static/SelectOption';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import { createArray } from '@root/utils/common';
import { useMemo } from 'react';

type GoToPageSelectProps = { totalPage: number };

const pageDefaultSelect = { value: null, label: '' };

export default function GoToPageSelect({ totalPage }: GoToPageSelectProps) {
	const pageList: Array<SelectOptionItem<number>> = useMemo(
		() => createArray(totalPage, 0).map((_, i) => ({ value: i + 1, label: `Page ${i + 1}` })),
		[totalPage]
	);

	const [goToPage, setGoToPage] = useQueryOnChange('page', pageList, pageDefaultSelect);

	return (
		<SelectOption<number>
			list={pageList}
			setValue={setGoToPage}
			value={goToPage}
			className='my-auto min-w-[7.5rem]'
		/>
	);
}
