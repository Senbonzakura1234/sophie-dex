'use client';

import QueryLink from '@root/components/common/client/QueryLink';
import { categoryIconMap } from '@root/constants/common';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { TextShadowMap } from '@root/types/common/tailwind';
import type { CategoryEnum, ColorEnum } from '@root/types/common/zod';
import { convertCode } from '@root/utils/common';
import { useMemo } from 'react';

type CategoryProps = { category: CategoryEnum; color: ColorEnum };

export default function Category({ category, color }: CategoryProps) {
	const className = {
		BLUE: 'app-text-shadow-BLUE',
		GREEN: 'app-text-shadow-GREEN',
		RED: 'app-text-shadow-RED',
		WHITE: 'app-text-shadow-WHITE',
		YELLOW: 'app-text-shadow-YELLOW',
	} satisfies TextShadowMap;

	const { searchQuery } = useSearchQuery();

	const isActive = useMemo(() => category === searchQuery.category, [category, searchQuery.category]);

	return (
		<>
			<div className='flex max-w-fit flex-wrap gap-2'>
				<div>Category: </div>
				<QueryLink
					aria-label={`Filter ${convertCode(category)} Item`}
					className={`btn btn-primary btn-xs gap-1 font-bold capitalize shadow-primary/50 ${
						isActive ? '' : 'shadow-lg'
					}`}
					isActive={isActive}
					href={{ query: { category } }}
					searchQuery={searchQuery}
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
