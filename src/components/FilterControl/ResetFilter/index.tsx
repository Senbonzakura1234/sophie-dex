import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { IsBottomFilterProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

type ResetFilterProps = IsBottomFilterProps;

const ResetFilter: FC<ResetFilterProps> = ({ isBottomFilter: isBottomFilter }) => {
	const { resetQuery, isReady, securedQuery } = useSearchQuery();

	const isDisable = useMemo(
		() =>
			!Object.values(securedQuery ?? {}).some(value => typeof value === 'string' || typeof value === 'number') &&
			isReady,
		[isReady, securedQuery],
	);

	return (
		<button
			className={clsx({ hidden: isBottomFilter }, 'btn btn-xs my-auto gap-1 capitalize')}
			role='navigation'
			disabled={isDisable}
			onClick={() => !isDisable && resetQuery()}
			aria-label='Reset Filter'
		>
			Reset
		</button>
	);
};

export default ResetFilter;
