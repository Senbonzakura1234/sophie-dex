import { defaultSelect } from '@root/components/SubComponent';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { ResetFilterProps } from '@root/types/common/props';
import type { FC } from 'react';

const ResetFilter: FC<ResetFilterProps> = ({
	setFilterData: { setCateSelected, setColorSelected, setrelatedCateSelected },
	setGoToPage,
}) => {
	const { resetQuery, isReady } = useSearchQuery();
	return (
		<button
			className='btn btn-xs my-auto gap-1'
			role='navigation'
			disabled={!isReady}
			onClick={() => {
				if (isReady) {
					setGoToPage(() => ({ value: null, label: `Page ${1}` }));
					setCateSelected(() => defaultSelect);
					setColorSelected(() => defaultSelect);
					setrelatedCateSelected(() => defaultSelect);
					resetQuery();
				}
			}}
			aria-label='Reset Filter'
		>
			Reset
		</button>
	);
};

export default ResetFilter;
