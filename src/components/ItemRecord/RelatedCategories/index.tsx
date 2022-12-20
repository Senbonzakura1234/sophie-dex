import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { RelatedCategoriesProps } from '@root/types/common/props';
import { ItemCategoryDisplay } from '@root/types/model';
import type { FC } from 'react';

const RelatedCategories: FC<RelatedCategoriesProps> = ({ relatedCategories }) => {
	const { isReady, updateQuery } = useSearchQuery();

	return (
		<div className='flex flex-wrap gap-2'>
			{relatedCategories.map((c, k) => (
				<a
					onClick={e => {
						e.preventDefault();
						if (isReady) updateQuery({ itemCategory: c.name });
					}}
					aria-label={ItemCategoryDisplay[c.name]}
					key={k}
					className='link link-hover text-accent-content font-serif text-xs capitalize italic'
				>
					{ItemCategoryDisplay[c.name]} ({c.grade})
				</a>
			))}
		</div>
	);
};

export default RelatedCategories;
