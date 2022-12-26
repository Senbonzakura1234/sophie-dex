import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { WHITEProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

const WHITE: FC<WHITEProps> = ({ color }) => {
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
					'!no-animation !cursor-default hover:bg-white': isBtnDisabled,
				},
				'btn btn-xs text-base-content btn-ghost font-extrabold capitalize',
			)}
		>
			{color}
		</button>
	);
};
export default WHITE;
