import type { COLOR } from '@prisma/client';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { FC } from 'react';
import { useMemo } from 'react';

const WHITE: FC<{ color: COLOR }> = ({ color }) => {
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
			className='btn btn-xs text-base-content border-gray-300 bg-gray-300 font-extrabold capitalize hover:border-gray-400 hover:bg-gray-400'
		>
			{color}
		</button>
	);
};
export default WHITE;
