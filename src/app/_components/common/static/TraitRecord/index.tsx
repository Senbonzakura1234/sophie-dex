import RecordWrapper from '@components/common/static/RecordWrapper';
import type { Trait } from '@root/server/postgresql/schema';

import { highlightSearchedText } from '@root/utils/common';
import Categories from './Categories';
import ItemPresent from './ItemPresent';
import TraitMergeList from './TraitMergeList';

type Props = Readonly<{ data: Trait } & { currentId?: string; search?: string }>;

export default function TraitRecord({ currentId, search, ...props }: Props) {
	return (
		<RecordWrapper {...props} currentId={currentId} search={search}>
			{({ categories, description, itemPresent, mergeFrom }) => (
				<>
					<p
						className='grow-0 text-lg'
						dangerouslySetInnerHTML={{ __html: highlightSearchedText(description, search) }}
					/>

					<TraitMergeList mergeFrom={mergeFrom} search={search} />

					{itemPresent ? <ItemPresent itemPresent={itemPresent} search={search} /> : null}

					<Categories categories={categories} />
				</>
			)}
		</RecordWrapper>
	);
}
