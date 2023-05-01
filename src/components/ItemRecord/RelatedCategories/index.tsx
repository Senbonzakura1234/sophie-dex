import type { RELATED_CATEGORY } from '@prisma/client';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import { RelatedCategoryDisplay } from '@root/types/model';
import clsx from 'clsx';

type RelatedCategoriesProps = { relatedCategories: RELATED_CATEGORY[] };

export default function RelatedCategories({ relatedCategories }: RelatedCategoriesProps) {
	const { isReady, updateQuery, securedQuery } = useSearchQuery();

	return (
		<div className='mt-auto flex flex-wrap gap-2'>
			{relatedCategories.map((c, k) => (
				<a
					onClick={e => {
						e.preventDefault();
						if (isReady) updateQuery({ relatedCategory: c.name, page: null });
					}}
					aria-label={RelatedCategoryDisplay[c.name]}
					key={k}
					className={clsx(
						{ 'link link-hover text-neutral/90 italic': c.name !== securedQuery.relatedCategory },
						'font-serif text-xs capitalize italic',
					)}
				>
					{RelatedCategoryDisplay[c.name]} ({c.count})
				</a>
			))}
		</div>
	);
}
