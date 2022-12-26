import { defaultSelect } from '@root/components/SubComponent';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { ResetFilterProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

const ResetFilter: FC<ResetFilterProps> = ({
	setFilterData: { setCateSelected, setColorSelected, setRelatedCateSelected },
	setGoToPage,
	setSearchValue,
	isPaginateOnly,
}) => {
	const { resetQuery, isReady, securedQuery } = useSearchQuery();

	const isDisable = useMemo(
		() =>
			!Object.values(securedQuery ?? {}).some(value => typeof value === 'string' || typeof value === 'number') &&
			isReady,
		[isReady, securedQuery],
	);

	return (
		<button
			className={clsx({ hidden: isPaginateOnly }, 'btn btn-xs my-auto gap-1 capitalize')}
			role='navigation'
			disabled={isDisable}
			onClick={() => {
				if (isDisable) return;
				setGoToPage({ value: null, label: `Page ${1}` });
				setCateSelected(() => defaultSelect);
				setColorSelected(() => defaultSelect);
				setRelatedCateSelected(() => defaultSelect);
				setSearchValue(() => null);
				resetQuery();
			}}
			aria-label='Reset Filter'
		>
			Reset
		</button>
	);
};

export default ResetFilter;
