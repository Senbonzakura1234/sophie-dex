'use client';

import QueryLink from '@components/common/dynamic/QueryLink';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { RelatedCategoryEnum } from '@root/types/common/zod';
import { cn, convertCode } from '@root/utils/common';
import { useCallback } from 'react';

type RelatedCategoriesProps = { relatedCategories: Array<RelatedCategoryEnum> };

export default function RelatedCategories({ relatedCategories }: RelatedCategoriesProps) {
	const { searchQuery } = useSearchQuery();

	const checkIsActive = useCallback(
		(r: RelatedCategoryEnum) => r === searchQuery.relatedCategory,
		[searchQuery.relatedCategory],
	);

	return (
		<div className='mt-auto flex flex-wrap gap-2'>
			{relatedCategories.map((relatedCategory, k) => {
				const isActive = checkIsActive(relatedCategory);

				return (
					<QueryLink
						aria-label={convertCode(relatedCategory)}
						className={cn(
							'link-hover link text-xs capitalize',
							!isActive ? 'italic text-base-content/70' : 'font-bold',
						)}
						isActive={isActive}
						href={{ query: { relatedCategory } }}
						key={k}
						searchQuery={searchQuery}
						resetPage
					>
						{convertCode(relatedCategory)}
					</QueryLink>
				);
			})}
		</div>
	);
}
