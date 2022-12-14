import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { TraitRecordProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';

import RecordHead from '../RecordHead';
import RecordWrapper from '../RecordWrapper/RecordWrapper';
import Categories from './Categories';
import TraitMergeList from './TraitMergeList';

const TraitRecord: FC<TraitRecordProps> = ({ record: { name, description, index, categories, mergeFrom, id } }) => {
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

			<Categories categories={categories} />
		</RecordWrapper>
	);
};

export default TraitRecord;
