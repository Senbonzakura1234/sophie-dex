import type { Item } from '@prisma/client';
import { useIdQuery } from '@root/hooks/useSearchQuery';
import clsx from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';

import FadeWrapper from '../Animations/FadeWrapper';
import Color from './Color';
import ItemCategories from './ItemCategories';

const ItemRecord: FC<{ item: Item }> = ({ item: { name, noId, id, color, itemCategories } }) => {
	const { isReady, securedIdQuery } = useIdQuery();
	return (
		<FadeWrapper show={isReady} appear={true}>
			<article className='card bg-base-100 grid w-full grow-0 shadow-2xl'>
				<div className='card-body'>
					{securedIdQuery.id === id && (
						<div className='card-actions place-content-end'>
							<Link href={{ pathname: '/items' }} className='btn btn-sm btn-outline capitalize'>
								Back to search
							</Link>
						</div>
					)}
					<div className='card-title'>
						<Link
							href={{ pathname: `/items/${id}` }}
							className={clsx({ ['link link-hover']: securedIdQuery.id !== id })}
						>
							{name}
						</Link>
					</div>
					<span className='text-sm'>grade: {noId}</span>
					<Color color={color} />
					<ItemCategories itemCategories={itemCategories} />
				</div>
			</article>
		</FadeWrapper>
	);
};

export default ItemRecord;
