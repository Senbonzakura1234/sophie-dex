import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { NONEProps } from '@root/types/common/props';
import type { FC } from 'react';
import { useMemo } from 'react';

const NONE: FC<NONEProps> = ({ color }) => {
	const { isReady, updateQuery, securedQuery } = useSearchQuery();

	const isBtnDisabled = useMemo(() => !isReady || securedQuery.color === color, [color, isReady, securedQuery.color]);

	return (
		<button
			onClick={() => {
				if (!isBtnDisabled) updateQuery({ color });
			}}
			role='navigation'
			aria-label={`Filter ${color} Item`}
			disabled={!isReady}
			className='btn btn-xs border-slate-400 bg-slate-400 font-extrabold capitalize hover:border-slate-500 hover:bg-slate-500'
		>
			{color}
		</button>
	);
};

export default NONE;