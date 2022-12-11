import type { Item } from '@prisma/client';
import { useIdQuery } from '@root/hooks/useSearchQuery';
import clsx from 'clsx';
import type { FC } from 'react';

import Color from './Color';
import ItemCategories from './ItemCategories';

const ItemRecord: FC<{ item: Item }> = ({ item: { name, noId, id, color, itemCategories } }) => {
	const { isReady, updateIdQuery, securedIdQuery, backToListPage } = useIdQuery();
	return (
		<article className='card bg-base-100 grid w-full grow-0 shadow-2xl'>
			<div className='card-body'>
				{securedIdQuery.id === id && (
					<div className='card-actions place-content-end'>
						<button className='btn btn-sm btn-outline capitalize' onClick={backToListPage}>
							Back to search
						</button>
					</div>
				)}
				<div className='card-title'>
					<div
						onClick={() => {
							if (securedIdQuery.id === id) return;
							if (isReady) updateIdQuery({ id });
						}}
						className={clsx({ ['link link-hover']: securedIdQuery.id !== id })}
					>
						{name}
					</div>
				</div>
				<div className='text-sm'>grade: {noId}</div>
				<Color color={color} />
				<ItemCategories itemCategories={itemCategories} />
			</div>
		</article>
	);
};

export default ItemRecord;
