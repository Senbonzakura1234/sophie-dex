'use client';

import QueryLink from '@root/components/common/client/QueryLink';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { RelatedCategoryEnum } from '@root/types/common/zod';
import { convertCode } from '@root/utils/common';

type RelatedCategoriesProps = { relatedCategories: Array<RelatedCategoryEnum> };

export default function RelatedCategories({ relatedCategories }: RelatedCategoriesProps) {
	const { searchQuery } = useSearchQuery();

	const checkBtnActive = (r: RelatedCategoryEnum) => r === searchQuery.relatedCategory;

	return (
		<div className='mt-auto flex flex-wrap gap-2'>
			{relatedCategories.map((relatedCategory, k) => (
				<QueryLink
					aria-label={convertCode(relatedCategory)}
					className={`link-hover link text-xs capitalize ${
						!checkBtnActive(relatedCategory) ? 'italic text-base-content/70' : 'font-semibold'
					}`}
					isActive={checkBtnActive(relatedCategory)}
					href={{ query: { relatedCategory } }}
					key={k}
					resetPage
				>
					{convertCode(relatedCategory)}
				</QueryLink>
			))}
		</div>
	);
}
