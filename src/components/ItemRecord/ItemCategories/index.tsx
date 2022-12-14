import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { ItemCategoriesProps } from '@root/types/common';
import { ItemCategoryDisplay } from '@root/types/model';
import type { FC } from 'react';

const ItemCategories: FC<ItemCategoriesProps> = ({ itemCategories }) => {
	const { isReady, updateQuery } = useSearchQuery();

	return (
		<div className='flex flex-wrap gap-2'>
			{itemCategories.map((c, k) => (
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

export default ItemCategories;
