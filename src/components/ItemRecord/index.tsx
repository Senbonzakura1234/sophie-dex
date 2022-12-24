import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { ItemRecordProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';

import RecordHead from '../RecordHead';
import RecordWrapper from '../RecordWrapper/RecordWrapper';
import Color from './Color';
import RelatedCategories from './RelatedCategories';

const ItemRecord: FC<ItemRecordProps> = ({ record: { name, index, id, color, relatedCategories } }) => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();

	return (
		<RecordWrapper className={clsx({ hidden: !isReady })}>
			<RecordHead id={id} isCurrentRecord={securedIdQuery.id === id} name={name} pathname={pathname} />

			<span className='text-sm'>index: {index}</span>

			<Color color={color} />

			<RelatedCategories relatedCategories={relatedCategories} />
		</RecordWrapper>
	);
};

export default ItemRecord;
