import RecordWrapper from '@root/components/common/server/RecordWrapper';
import type { Trait } from '@root/server/database/schema';

import Categories from './Categories';
import ItemPresent from './ItemPresent';
import TraitMergeList from './TraitMergeList';

type TraitRecordProps = { data: Trait } & { currentId?: string };

export default function TraitRecord({ currentId, ...props }: TraitRecordProps) {
	return (
		<RecordWrapper {...props} currentId={currentId}>
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
