import type { Trait } from '@prisma/client';
import RecordHead from '@root/components/RecordHead';
import RecordWrapper from '@root/components/RecordWrapper';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { RecordProps } from '@root/types/common/props';
import type { FC } from 'react';

import Categories from './Categories';
import ItemPresent from './ItemPresent';
import TraitMergeList from './TraitMergeList';

type TraitRecordProps = RecordProps<Trait>;

const TraitRecord: FC<TraitRecordProps> = ({ record }) => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();

	return (
		<RecordWrapper isSuccess={!!record && isReady}>
			{record ? (
				<>
					<RecordHead
						id={record.id}
						isCurrentRecord={securedIdQuery.id === record.id}
						name={record.name}
						pathname={pathname}
						pageName='Trait'
					/>

					<div className='text-sm'>index: {record.index}</div>

					<p className='text-lg'>{record.description}</p>

					<TraitMergeList mergeFrom={record.mergeFrom} />

					{record.itemPresent ? <ItemPresent itemPresent={record.itemPresent} /> : null}

					<Categories categories={record.categories} />
				</>
			) : null}
		</RecordWrapper>
	);
};

export default TraitRecord;
