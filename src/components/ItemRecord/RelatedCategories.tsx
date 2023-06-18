import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { RelatedCategoryEnum } from '@root/types/common/zod';
import Link from 'next/link';

type RelatedCategoriesProps = { relatedCategories: RelatedCategoryEnum[] };

export default function RelatedCategories({ relatedCategories }: RelatedCategoriesProps) {
	const { securedQuery } = useSearchQuery();

	const formatRelateCategory = (r: RelatedCategoryEnum) => r.replaceAll('_', ' ').toLocaleLowerCase();

	return (
		<div className='mt-auto flex flex-wrap gap-2'>
			{relatedCategories.map((relatedCategory, k) => (
				<Link
					aria-label={formatRelateCategory(relatedCategory)}
					key={k}
					className={`font-serif text-xs capitalize italic ${
						relatedCategory !== securedQuery.relatedCategory && 'link-hover link italic text-neutral/90'
					}`}
					href={{ query: { relatedCategory } }}
					as={{ query: { relatedCategory } }}
				>
					{formatRelateCategory(relatedCategory)}
				</Link>
			))}
		</div>
	);
}
