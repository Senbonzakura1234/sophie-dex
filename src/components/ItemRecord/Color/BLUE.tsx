import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { ColorProps } from '@root/types/common';
import type { FC } from 'react';
import { useMemo } from 'react';

const BLUE: FC<ColorProps> = ({ color }) => {
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
			className='btn btn-xs border-blue-500 bg-blue-500 font-extrabold hover:border-blue-600 hover:bg-blue-600'
		>
			{color}
		</button>
	);
};

export default BLUE;
