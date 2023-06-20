import { colorFilterMap } from '@root/constants';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { ColorEnum } from '@root/types/common/zod';

type ColorProps = { color: ColorEnum };

export default function Color({ color }: ColorProps) {
	const { isRouterReady, updateQuery, securedQuery } = useSearchQuery();

	const isBtnDisabled = !isRouterReady || securedQuery.color === color;

	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold'>Color: </div>

			<button
				onClick={() => {
					if (!isBtnDisabled) updateQuery({ color });
				}}
				role='navigation'
				aria-label={`Filter ${color} Item`}
				disabled={!isRouterReady}
				className='btn-xs btn !border-current !bg-current opacity-80 hover:opacity-100'
				style={{ color: colorFilterMap[color].secondary }}
			>
				<span className='font-extrabold capitalize text-slate-50'>{color.toLowerCase()}</span>
			</button>
		</div>
	);
}
