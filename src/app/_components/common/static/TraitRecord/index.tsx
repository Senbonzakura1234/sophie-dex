import RecordWrapper from '@components/common/static/RecordWrapper';
import type { Trait } from '@root/server/database/postgresql/schema';

import { highlightSearchedText } from '@root/utils/common';
import Categories from './Categories';
import ItemPresent from './ItemPresent';
import TraitMergeList from './TraitMergeList';

type TraitRecordProps = { data: Trait } & { currentId?: string; search?: string } & JSX.IntrinsicAttributes;

export default function TraitRecord({ currentId, search, ...props }: TraitRecordProps) {
	return (
		<RecordWrapper {...props} currentId={currentId} search={search}>
			{({ categories, description, itemPresent, mergeFrom }) => (
				<>
					<p
						className='grow-0 text-lg'
						dangerouslySetInnerHTML={{ __html: highlightSearchedText(description, search) }}
					/>

					<TraitMergeList mergeFrom={mergeFrom} />

					{itemPresent ? <ItemPresent itemPresent={itemPresent} /> : null}

					<Categories categories={categories} />
				</>
			)}
		</RecordWrapper>
	);
}
