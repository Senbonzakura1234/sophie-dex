'use client';

import QueryLink from '@components/common/dynamic/QueryLink';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { RelatedCategoryEnum } from '@root/types/common/zod/generic';
import { cn, convertCode, highlightSearchedText } from '@root/utils/common';

type Props = Readonly<{ relatedCategories: Array<RelatedCategoryEnum>; search: string | undefined }>;

export default function RelatedCategories({ relatedCategories, search }: Props) {
	const { searchQuery } = useSearchQuery();

	return (
		<div className='mt-auto flex flex-wrap gap-2'>
			{relatedCategories.map((relatedCategory, k) => {
				const isActive = relatedCategory === searchQuery.relatedCategory;

				return (
					<QueryLink
						aria-label={convertCode(relatedCategory)}
						className={cn('link-hover link text-xs', !isActive ? 'italic text-base-content/70' : 'font-bold')}
						isActive={isActive}
						href={{ query: { relatedCategory } }}
						key={k}
						searchQuery={searchQuery}
						resetPage
						dangerouslySetInnerHTML={{ __html: highlightSearchedText(convertCode(relatedCategory), search) }}
					/>
				);
			})}
		</div>
	);
}
