import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { RelatedCategoryEnum } from '@root/types/common/zod';

type RelatedCategoriesProps = { relatedCategories: RelatedCategoryEnum[] };

export default function RelatedCategories({ relatedCategories }: RelatedCategoriesProps) {
	const { isRouterReady, updateQuery, securedQuery } = useSearchQuery();

	const formatRelateCategory = (r: RelatedCategoryEnum) => r.replaceAll('_', ' ').toLocaleLowerCase();

	return (
		<div className='mt-auto flex flex-wrap gap-2'>
			{relatedCategories.map((r, k) => (
				<a
					onClick={e => {
						e.preventDefault();
						if (isRouterReady) updateQuery({ relatedCategory: r, page: null });
					}}
					aria-label={formatRelateCategory(r)}
					key={k}
					className={`font-serif text-xs capitalize italic ${
						r !== securedQuery.relatedCategory && 'link-hover link italic text-neutral/90'
					}`}
				>
					{formatRelateCategory(r)}
				</a>
			))}
		</div>
	);
}
