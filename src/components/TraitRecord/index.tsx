import RecordHead from '@root/components/RecordHead';
import RecordWrapper from '@root/components/RecordWrapper';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { TraitRecordProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';

import Categories from './Categories';
import ItemPresent from './ItemPresent';
import TraitMergeList from './TraitMergeList';

const TraitRecord: FC<TraitRecordProps> = ({
	record: { name, description, index, categories, mergeFrom, id, itemPresent },
}) => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();

	return (
		<RecordWrapper className={clsx({ hidden: !isReady })}>
			<RecordHead
				id={id}
				isCurrentRecord={securedIdQuery.id === id}
				name={name}
				pathname={pathname}
				pageName='Trait'
			/>

			<div className='text-sm'>index: {index}</div>

			<p className='text-lg'>{description}</p>

			<TraitMergeList mergeFrom={mergeFrom} />

			{itemPresent ? <ItemPresent itemPresent={itemPresent} /> : null}

			<Categories categories={categories} />
		</RecordWrapper>
	);
};

export default TraitRecord;
