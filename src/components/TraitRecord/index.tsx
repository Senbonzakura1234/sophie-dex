import RecordWrapper from '@root/components/RecordWrapper';
import type { Trait } from '@root/server/db/schema';
import type { RecordProps } from '@root/types/common/props';
import { nullableHandle } from '@root/utils/common';

import Categories from './Categories';
import ItemPresent from './ItemPresent';
import TraitMergeList from './TraitMergeList';

type TraitRecordProps = RecordProps<Trait> & { currentId: string | undefined };

export default function TraitRecord({ currentId, ...props }: TraitRecordProps) {
	return (
		<RecordWrapper {...nullableHandle(props)} currentId={currentId}>
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
