import { defaultSelect } from '@root/components/SubComponent';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { SelectOptionItem, SetFilterData } from '@root/types/common';
import type { Dispatch, FC, SetStateAction } from 'react';

const ResetFilter: FC<{
	setFilterData: SetFilterData;
	setGoToPage: Dispatch<SetStateAction<SelectOptionItem<string | null>>>;
}> = ({ setFilterData: { setTraitCateSelected, setColorSelected, setItemCateSelected }, setGoToPage }) => {
	const { resetQuery, isReady } = useSearchQuery();
	return (
		<button
			className='btn btn-xs my-auto gap-1'
			role='navigation'
			disabled={!isReady}
			onClick={() => {
				if (isReady) {
					setGoToPage(() => ({ value: null, label: `Page ${1}` }));
					setTraitCateSelected(() => defaultSelect);
					setColorSelected(() => defaultSelect);
					setItemCateSelected(() => defaultSelect);
					resetQuery();
				}
			}}
			aria-label='Reset Filter'
		>
			Reset<span className='2xl:hidden'>Filter</span>
		</button>
	);
};

export default ResetFilter;
