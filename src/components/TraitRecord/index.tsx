import RecordWrapper from '@root/components/RecordWrapper';
import type { Trait } from '@root/server/db/schema';
import type { RecordProps } from '@root/types/common/props';
import { nullableHandle } from '@root/utils/common';

import Categories from './Categories';
import ItemPresent from './ItemPresent';
import TraitMergeList from './TraitMergeList';

type TraitRecordProps = RecordProps<Trait>;

export default function TraitRecord(props: TraitRecordProps) {
	return (
		<RecordWrapper {...nullableHandle(props)}>
			{({ categories, description, itemPresent, mergeFrom }) => (
				<>
					<p className='text-lg'>{description}</p>

					<TraitMergeList mergeFrom={mergeFrom} />

					{itemPresent ? <ItemPresent itemPresent={itemPresent} /> : null}

					<Categories categories={categories} />
				</>
			)}
		</RecordWrapper>
	);
}
