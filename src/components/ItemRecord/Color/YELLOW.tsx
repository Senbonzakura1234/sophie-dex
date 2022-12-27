import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { YELLOWProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

const YELLOW: FC<YELLOWProps> = ({ color }) => {
	const { isReady, updateQuery, securedQuery } = useSearchQuery();

	const isBtnDisabled = useMemo(() => !isReady || securedQuery.color === color, [color, isReady, securedQuery.color]);

	return (
		<button
			onClick={() => {
				if (!isBtnDisabled) updateQuery({ color, page: null, limit: null });
			}}
			role='navigation'
			aria-label={`Filter ${color} Item`}
			disabled={!isReady}
			className={clsx(
				{
					'!no-animation !cursor-default !border-yellow-400 !bg-yellow-400': isBtnDisabled,
				},
				'btn btn-xs border-yellow-400 bg-yellow-400 font-extrabold capitalize text-slate-900 hover:border-yellow-500 hover:bg-yellow-500',
			)}
		>
			{color}
		</button>
	);
};

export default YELLOW;
