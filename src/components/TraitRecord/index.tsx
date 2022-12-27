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

			<span className='text-sm'>index: {index}</span>

			<span className='font-serif text-lg 2xl:h-16'>{description}</span>

			<Categories categories={categories} />

			<TraitMergeList mergeFrom={mergeFrom} />
		</RecordWrapper>
	);
};

export default TraitRecord;
