import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { IsBottomFilterProps } from '@root/types/common/props';
import clsx from 'clsx';
import { useMemo } from 'react';

type ResetFilterProps = IsBottomFilterProps;

export default function ResetFilter({ isBottomFilter: isBottomFilter }: ResetFilterProps) {
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
}
