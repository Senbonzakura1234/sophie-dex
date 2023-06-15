import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { IsBottomFilterProps } from '@root/types/common/props';
import { useMemo } from 'react';

type ResetFilterProps = IsBottomFilterProps;

export default function ResetFilter({ isBottomFilter: isBottomFilter }: ResetFilterProps) {
	const { resetQuery, isRouterReady, securedQuery } = useSearchQuery();

	const isDisable = useMemo(
		() => !Object.values(securedQuery ?? {}).some(value => value !== null) && isRouterReady,
		[isRouterReady, securedQuery],
	);

	return (
		<button
			className={`btn-xs btn my-auto gap-1 capitalize ${isBottomFilter && 'hidden'}`}
			role='navigation'
			disabled={isDisable}
			onClick={() => !isDisable && resetQuery()}
			aria-label='Reset Filter'
		>
			Reset
		</button>
	);
}
