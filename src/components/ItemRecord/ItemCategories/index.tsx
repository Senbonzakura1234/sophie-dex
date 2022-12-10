import { ItemCategories } from '@prisma/client';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { FC } from 'react';

const ItemCategories: FC<{ itemCategories: ItemCategories[] }> = ({ itemCategories }) => {
	const { isReady, updateQuery } = useSearchQuery();

	return (
		<div className='flex flex-wrap gap-2'>
			{itemCategories.map((c, k) => (
				<a
					onClick={e => {
						e.preventDefault();
						if (isReady) updateQuery({ itemCategory: c.name });
					}}
					key={k}
					className='link text-accent-content text-xs capitalize italic'
				>
					{c.name.toLowerCase()} ({c.grade})
				</a>
			))}
		</div>
	);
};

export default ItemCategories;
