import type { Item } from '@prisma/client';
import { useIdQuery } from '@root/hooks/useSearchQuery';
import type { FC } from 'react';

import FadeWrapper from '../Animations/FadeWrapper';
import RecordHead from '../RecordHead';
import Color from './Color';
import ItemCategories from './ItemCategories';

const ItemRecord: FC<{ item: Item }> = ({ item: { name, noId, id, color, itemCategories } }) => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();
	return (
		<FadeWrapper show={isReady} appear={true}>
			<article className='card bg-base-100 grid w-full grow-0 shadow-2xl'>
				<div className='card-body'>
					<RecordHead id={id} isCurrentRecord={securedIdQuery.id === id} name={name} pathname={pathname} />

					<span className='text-sm'>grade: {noId}</span>

					<Color color={color} />

					<ItemCategories itemCategories={itemCategories} />
				</div>
			</article>
		</FadeWrapper>
	);
};

export default ItemRecord;
