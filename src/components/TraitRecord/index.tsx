import type { Trait } from '@prisma/client';
import RecordHead from '@root/components/RecordHead';
import RecordWrapper from '@root/components/RecordWrapper';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { RecordProps } from '@root/types/common/props';
import type { FC } from 'react';

import { nullableHandle } from '@root/utils/common';
import Categories from './Categories';
import ItemPresent from './ItemPresent';
import TraitMergeList from './TraitMergeList';

type TraitRecordProps = RecordProps<Trait>;

const TraitRecord: FC<TraitRecordProps> = props => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();

	return (
		<RecordWrapper {...nullableHandle(props, !isReady)}>
			{({ id, categories, description, index, itemPresent, mergeFrom, name }) => (
				<>
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
				</>
			)}
		</RecordWrapper>
	);
};

export default TraitRecord;
