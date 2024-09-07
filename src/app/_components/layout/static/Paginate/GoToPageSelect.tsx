import SelectOption from '@components/common/static/SelectOption';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import { createArray } from '@root/utils/common';

type Props = Readonly<{ totalPage: number }>;

const filterDefValue = { value: null, label: '' };

export default function GoToPageSelect({ totalPage }: Props) {
	const filterList: Array<SelectOptionItem<number>> = createArray(0, totalPage).map((_, i) => ({
		value: i + 1,
		label: `Page ${i + 1}`
	}));

	const [goToPage, setGoToPage] = useQueryOnChange({
		filterDefValue,
		filterKey: 'page',
		filterList
	});

	return (
		<SelectOption<number>
			filterList={filterList}
			setValue={setGoToPage}
			value={goToPage}
			className='my-auto min-w-[7.5rem]'
		/>
	);
}
