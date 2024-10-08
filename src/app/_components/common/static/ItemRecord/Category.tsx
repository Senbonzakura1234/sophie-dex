'use client';

import QueryLink from '@components/common/dynamic/QueryLink';
import { categoryIconMap } from '@root/constants/common';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { TextShadowMap } from '@root/types/common/tailwind';
import type { CategoryEnum, ColorEnum } from '@root/types/common/zod/generic';
import { cn, convertCode } from '@root/utils/common';

type Props = Readonly<{ category: CategoryEnum; color: ColorEnum }>;

const className = {
	BLUE: 'app-text-shadow-BLUE text-base-200 dark:text-base-content',
	GREEN: 'app-text-shadow-GREEN text-base-200 dark:text-base-content',
	RED: 'app-text-shadow-RED text-base-200 dark:text-base-content',
	WHITE: 'app-text-shadow-WHITE text-base-200 dark:text-base-content',
	YELLOW: 'app-text-shadow-YELLOW text-base-200 dark:text-base-content'
} satisfies TextShadowMap<ColorEnum>;

export default function Category({ category, color }: Props) {
	const { searchQuery } = useSearchQuery();

	const isActive = category === searchQuery.category;

	return (
		<>
			<div className='flex max-w-fit flex-wrap gap-2'>
				<div>Category: </div>
				<QueryLink
					aria-label={`Filter ${convertCode(category)} Item`}
					className={cn('btn btn-primary btn-xs gap-1 font-bold capitalize shadow-primary/50', {
						'shadow-lg': !isActive
					})}
					isActive={isActive}
					href={{ query: { category } }}
					searchQuery={searchQuery}
					resetPage
				>
					<div className={cn('font-atelier', categoryIconMap[category])} />
					{convertCode(category)}
				</QueryLink>
			</div>

			<div
				aria-hidden
				className={cn(
					'absolute bottom-8 right-8 w-10 text-center font-atelier text-lg md:text-4xl',
					categoryIconMap[category],
					className[color]
				)}
			/>
		</>
	);
}
