'use client';

import QueryLink from '@root/components/common/client/QueryLink';
import { categoryIconMap } from '@root/constants';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { TextShadowMap } from '@root/types/common/tailwind';
import type { CategoryEnum, ColorEnum } from '@root/types/common/zod';
import { convertCode } from '@root/utils/common';

type CategoryProps = { category: CategoryEnum; color: ColorEnum };

export default function Category({ category, color }: CategoryProps) {
	const { searchQuery } = useSearchQuery();

	const isActive = searchQuery.category === category;

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
				<QueryLink
					aria-label={`Filter ${convertCode(category)} Item`}
					className={`btn btn-primary btn-xs gap-1 font-extrabold capitalize ${
						isActive ? '!border-slate-300 !bg-slate-300 !text-slate-900' : ''
					}`}
					isActive={isActive}
					href={{ query: { category } }}
					resetPage
				>
					<div className={`font-atelier ${categoryIconMap[category]}`} />
					{convertCode(category)}
				</QueryLink>
			</div>

			<div
				aria-hidden
				className={`absolute bottom-8 right-8 w-10 text-center font-atelier text-lg text-slate-50 md:text-4xl ${categoryIconMap[category]} ${className[color]}`}
			/>
		</>
	);
}
