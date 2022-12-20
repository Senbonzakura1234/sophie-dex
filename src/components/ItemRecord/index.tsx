import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { ItemRecordProps } from '@root/types/common/props';
import type { FC } from 'react';

import FadeWrapper from '../Animations/FadeWrapper';
import RecordHead from '../RecordHead';
import Color from './Color';
import RelatedCategories from './RelatedCategories';

const ItemRecord: FC<ItemRecordProps> = ({ record: { name, index, id, color, relatedCategories } }) => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();
	return (
		<FadeWrapper show={isReady} appear={true}>
			<article className='card bg-base-100 grid w-full grow-0 shadow-2xl'>
				<div className='card-body'>
					<RecordHead id={id} isCurrentRecord={securedIdQuery.id === id} name={name} pathname={pathname} />

					<span className='text-sm'>index: {index}</span>

					<Color color={color} />

					<RelatedCategories relatedCategories={relatedCategories} />
				</div>
			</article>
		</FadeWrapper>
	);
};

export default ItemRecord;
