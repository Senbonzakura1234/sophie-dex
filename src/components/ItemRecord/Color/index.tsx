import type { COLOR } from '@prisma/client';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import clsx from 'clsx';
import { useMemo } from 'react';

type ColorProps = { color: COLOR };

export default function Color({ color }: ColorProps) {
	const { isReady, updateQuery, securedQuery } = useSearchQuery();

	const isBtnDisabled = useMemo(() => !isReady || securedQuery.color === color, [color, isReady, securedQuery.color]);

	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold'>Color: </div>

			<button
				onClick={() => {
					if (!isBtnDisabled) updateQuery({ color, page: null });
				}}
				role='navigation'
				aria-label={`Filter ${color} Item`}
				disabled={!isReady}
				className={clsx(
					{
						'!no-animation !cursor-default': isBtnDisabled,

						'!border-blue-500 !bg-blue-500': isBtnDisabled && color === 'BLUE',
						'border-blue-500 bg-blue-500 hover:border-blue-600 hover:bg-blue-600': color === 'BLUE',

						'!border-green-500 !bg-green-500': isBtnDisabled && color === 'GREEN',
						'border-green-500 bg-green-500 hover:border-green-600 hover:bg-green-600': color === 'GREEN',

						'!border-red-500 !bg-red-500': isBtnDisabled && color === 'RED',
						'border-red-500 bg-red-500 hover:border-red-600 hover:bg-red-600': color === 'RED',

						'!border-slate-500 !bg-slate-500': isBtnDisabled && color === 'WHITE',
						'border-slate-500 bg-slate-500 hover:border-slate-600 hover:bg-slate-600': color === 'WHITE',

						'!border-yellow-400 !bg-yellow-400': isBtnDisabled && color === 'YELLOW',
						'border-yellow-400 bg-yellow-400 hover:border-yellow-500 hover:bg-yellow-500': color === 'YELLOW',
					},
					'btn btn-xs font-extrabold capitalize !text-slate-50',
				)}
			>
				{color.toLowerCase()}
			</button>
		</div>
	);
}
