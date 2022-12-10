import type { COLOR } from '@prisma/client';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { FC } from 'react';
import { useMemo } from 'react';

const YELLOW: FC<{ color: COLOR }> = ({ color }) => {
	const { isReady, updateQuery, securedQuery } = useSearchQuery();

	const isBtnDisabled = useMemo(() => !isReady || securedQuery.color === color, [color, isReady, securedQuery.color]);

	return (
		<button
			onClick={() => {
				if (!isBtnDisabled) updateQuery({ color });
			}}
			disabled={!isReady}
			className='btn btn-xs text-warning-content border-yellow-400 bg-yellow-400 font-extrabold capitalize hover:border-yellow-500 hover:bg-yellow-500'
		>
			{color}
		</button>
	);
};

export default YELLOW;
