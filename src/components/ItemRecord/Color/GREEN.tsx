import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { GREENProps } from '@root/types/common/props';
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
			className='btn btn-xs border-green-500 bg-green-500 font-extrabold capitalize hover:border-green-600 hover:bg-green-600'
		>
			{color}
		</button>
	);
};

export default GREEN;
