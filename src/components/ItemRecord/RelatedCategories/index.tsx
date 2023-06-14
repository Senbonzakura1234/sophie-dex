import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { RelatedCategoryEnum } from '@root/types/common/zod';
import Link from 'next/link';

type RelatedCategoriesProps = { relatedCategories: RelatedCategoryEnum[] };

export default function RelatedCategories({ relatedCategories }: RelatedCategoriesProps) {
	const { securedQuery } = useSearchQuery();

	const formatRelateCategory = (r: RelatedCategoryEnum) => r.replaceAll('_', ' ').toLocaleLowerCase();

	return (
		<div className='mt-auto flex flex-wrap gap-2'>
			{relatedCategories.map((r, k) => (
				<Link
					aria-label={formatRelateCategory(r)}
					key={k}
					className={`font-serif text-xs capitalize italic ${
						r !== securedQuery.relatedCategory && 'link-hover link italic text-neutral/90'
					}`}
					href={{ query: { relatedCategory: r } }}
					as={{ query: { relatedCategory: r } }}
				>
					{formatRelateCategory(r)}
				</Link>
			))}
		</div>
	);
}
