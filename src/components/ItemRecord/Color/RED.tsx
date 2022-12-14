import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { REDProp } from '@root/types/common';
import type { FC } from 'react';
import { useMemo } from 'react';

const RED: FC<REDProp> = ({ color }) => {
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
			className='btn btn-xs border-red-500 bg-red-500 font-extrabold capitalize hover:border-red-600 hover:bg-red-600'
		>
			{color}
		</button>
	);
};

export default RED;
