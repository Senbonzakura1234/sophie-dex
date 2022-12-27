import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { GREENProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

const GREEN: FC<GREENProps> = ({ color }) => {
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
			className={clsx(
				{
					'!no-animation !cursor-default !border-green-500 !bg-green-500': isBtnDisabled,
				},
				'btn btn-xs border-green-500 bg-green-500 font-extrabold capitalize text-slate-50 hover:border-green-600 hover:bg-green-600',
			)}
		>
			{color}
		</button>
	);
};

export default GREEN;
