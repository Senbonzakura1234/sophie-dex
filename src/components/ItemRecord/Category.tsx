import { categoryIconMap } from '@root/constants';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import type { TextShadowMap } from '@root/types/common/tailwind';
import type { CategoryEnum, ColorEnum } from '@root/types/common/zod';
import { convertCode } from '@root/utils/common';

type CategoryProps = { category: CategoryEnum; color: ColorEnum };

export default function Category({ category, color }: CategoryProps) {
	const { updateQuery, securedQuery } = useSecuredRouter();

	const isBtnDisabled = securedQuery.category === category;

	const className = {
		BLUE: 'app-text-shadow-BLUE',
		GREEN: 'app-text-shadow-GREEN',
		RED: 'app-text-shadow-RED',
		WHITE: 'app-text-shadow-WHITE',
		YELLOW: 'app-text-shadow-YELLOW',
	} satisfies TextShadowMap;

	return (
		<>
			<div className='flex max-w-fit flex-wrap gap-2'>
				<div className='font-bold !shadow-none'>Category: </div>
				<button
					onClick={() => {
						if (!isBtnDisabled) updateQuery({ category }, 'item');
					}}
					aria-label={`Filter ${convertCode(category)} Item`}
					role='navigation'
					className={`btn btn-accent btn-xs gap-1 font-extrabold capitalize ${
						isBtnDisabled ? 'no-animation cursor-default !border-slate-300 !bg-slate-300 !text-slate-900' : ''
					}`}
				>
					<div className={`font-atelier ${categoryIconMap[category]}`} />
					{convertCode(category)}
				</button>
			</div>

			<div
				className={`absolute bottom-8 right-8 w-10 text-center font-atelier text-lg text-slate-50 md:text-4xl ${categoryIconMap[category]} ${className[color]}`}
			/>
		</>
	);
}
