import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { BLUEProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

const BLUE: FC<BLUEProps> = ({ color }) => {
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
					'!no-animation !cursor-default !border-blue-500 !bg-blue-500': isBtnDisabled,
				},
				'btn btn-xs border-blue-500 bg-blue-500 font-extrabold text-slate-50 hover:border-blue-600 hover:bg-blue-600',
			)}
		>
			{color}
		</button>
	);
};

export default BLUE;
