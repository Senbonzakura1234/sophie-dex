import type { Rumor } from '@prisma/client';
import RecordFieldWithHyperLink from '@root/components/RecordFieldWithHyperLink';
import RecordHead from '@root/components/RecordHead';
import RecordWrapper from '@root/components/RecordWrapper';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { RecordProps } from '@root/types/common/props';
import type { FC } from 'react';

import Location from './Location';
import Price from './Price';
import RumorType from './RumorType';

type RumorRecordProps = RecordProps<Rumor>;

const RumorRecord: FC<RumorRecordProps> = ({ record }) => {
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
						pageName='Rumor'
					/>

					<Price price={record.price} />

					<RecordFieldWithHyperLink inputArr={record.description} label='Description' />

					<Location location={record.location} />

					<RumorType rumorType={record.rumorType} />
				</>
			) : null}
		</RecordWrapper>
	);
};

export default RumorRecord;
