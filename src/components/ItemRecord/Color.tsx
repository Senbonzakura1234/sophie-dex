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
				onClick={() => {
					if (!isBtnDisabled) updateQuery({ color }, 'item');
				}}
				role='navigation'
				aria-label={`Filter ${color} Item`}
				className='btn-xs btn !border-current !bg-current opacity-80 hover:opacity-100'
				style={{ color: colorFilterMap[color].secondary }}
			>
				<span className='font-extrabold capitalize text-slate-50'>{color.toLowerCase()}</span>
			</button>
		</div>
	);
}
