import { defaultSelect } from '@root/components/SubComponent';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { SetFilterData } from '@root/types/common';
import type { FC } from 'react';

const ResetFilter: FC<{ setFilterData: SetFilterData }> = ({
	setFilterData: { setGoToPage, setTraitCateSelected },
}) => {
	const { resetQuery, isReady } = useSearchQuery();
	return (
		<button
			className='btn btn-xs my-auto'
			disabled={!isReady}
			onClick={() => {
				if (isReady) {
					setGoToPage(() => ({ value: '1', label: `Page ${1}` }));
					setTraitCateSelected(() => defaultSelect);
					resetQuery();
				}
			}}
		>
			Reset Filter
		</button>
	);
};

export default ResetFilter;
