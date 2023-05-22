import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { RelatedCategoryEnum } from '@root/types/common/zod';
import { RelatedCategoryDisplay } from '@root/types/model';
import clsx from 'clsx';

type RelatedCategoriesProps = { relatedCategories: RelatedCategoryEnum[] };

export default function RelatedCategories({ relatedCategories }: RelatedCategoriesProps) {
	const { isReady, updateQuery, securedQuery } = useSearchQuery();

	return (
		<div className='mt-auto flex flex-wrap gap-2'>
			{relatedCategories.map((r, k) => (
				<a
					onClick={e => {
						e.preventDefault();
						if (isReady) updateQuery({ relatedCategory: r, page: null });
					}}
					aria-label={RelatedCategoryDisplay[r]}
					key={k}
					className={clsx(
						{ 'link link-hover text-neutral/90 italic': r !== securedQuery.relatedCategory },
						'font-serif text-xs capitalize italic',
					)}
				>
					{RelatedCategoryDisplay[r]}
				</a>
			))}
		</div>
	);
}
