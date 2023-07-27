import { colorFilterMap } from '@root/constants';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import type { ColorEnum } from '@root/types/common/zod';

type ColorProps = { color: ColorEnum };

export default function Color({ color }: ColorProps) {
	const { updateQuery, securedQuery } = useSecuredRouter();

	const isBtnDisabled = securedQuery.color === color;

	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold'>Color: </div>

			<button
				aria-label={`Filter ${color} Item`}
				className='btn btn-xs !border-current !bg-current opacity-80 hover:opacity-100'
				onClick={() => {
					if (!isBtnDisabled) updateQuery({ color });
				}}
				role='navigation'
				style={{ color: colorFilterMap[color].secondary }}
			>
				<span className='font-extrabold capitalize text-slate-50'>{color.toLowerCase()}</span>
			</button>
		</div>
	);
}
