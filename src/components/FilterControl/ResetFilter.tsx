import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import { useMemo } from 'react';

export default function ResetFilter() {
	const { resetQuery, securedQuery } = useSecuredRouter();

	const isDisable = useMemo(() => !Object.values(securedQuery ?? {}).some(value => value !== null), [securedQuery]);

	return (
		<button
			className='btn btn-xs my-auto gap-1 capitalize'
			role='navigation'
			disabled={isDisable}
			onClick={() => !isDisable && resetQuery()}
			aria-label='Reset Filter'
		>
			Reset
		</button>
	);
}
