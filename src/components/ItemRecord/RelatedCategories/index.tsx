import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { RelatedCategoriesProps } from '@root/types/common/props';
import { RelatedCategoryDisplay } from '@root/types/model';
import clsx from 'clsx';
import type { FC } from 'react';

const RelatedCategories: FC<RelatedCategoriesProps> = ({ relatedCategories }) => {
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
};

export default RelatedCategories;
