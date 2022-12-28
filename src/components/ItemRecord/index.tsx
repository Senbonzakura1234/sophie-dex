import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { ItemRecordProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';

import RecordHead from '../RecordHead';
import RecordWrapper from '../RecordWrapper/RecordWrapper';
import Category from './Category';
import Color from './Color';
import Level from './Level';
import RelatedCategories from './RelatedCategories';

const ItemRecord: FC<ItemRecordProps> = ({
	record: { name, index, id, color, relatedCategories, level, category },
}) => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();

	return (
		<RecordWrapper className={clsx({ hidden: !isReady })} color={color}>
			<RecordHead
				id={id}
				isCurrentRecord={securedIdQuery.id === id}
				name={name}
				pathname={pathname}
				pageName='Item'
			/>

			<Level level={level} />

			<span className='text-sm'>index: {index}</span>

			<Category category={category} />

			<Color color={color} />

			<RelatedCategories relatedCategories={relatedCategories} />
		</RecordWrapper>
	);
};

export default ItemRecord;
