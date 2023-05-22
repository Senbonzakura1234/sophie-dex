import RecordWrapper from '@root/components/RecordWrapper';
import type { RecordProps } from '@root/types/common/props';

import type { Trait } from '@root/server/db/schema';
import { nullableHandle } from '@root/utils/common';
import Categories from './Categories';
import ItemPresent from './ItemPresent';
import TraitMergeList from './TraitMergeList';

type TraitRecordProps = RecordProps<Trait>;

export default function TraitRecord(props: TraitRecordProps) {
	return (
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
}
