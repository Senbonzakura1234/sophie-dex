import type { Trait } from '@prisma/client';
import RecordWrapper from '@root/components/RecordWrapper';
import type { RecordProps } from '@root/types/common/props';
import type { FC } from 'react';

import { nullableHandle } from '@root/utils/common';
import Categories from './Categories';
import ItemPresent from './ItemPresent';
import TraitMergeList from './TraitMergeList';

type TraitRecordProps = RecordProps<Trait>;

const TraitRecord: FC<TraitRecordProps> = props => (
	<RecordWrapper {...nullableHandle(props)} pageName='Trait'>
		{({ categories, description, index, itemPresent, mergeFrom }) => (
			<>
				<div className='text-sm'>index: {index}</div>

				<p className='text-lg'>{description}</p>

				<TraitMergeList mergeFrom={mergeFrom} />

				{itemPresent ? <ItemPresent itemPresent={itemPresent} /> : null}

				<Categories categories={categories} />
			</>
		)}
	</RecordWrapper>
);

export default TraitRecord;
