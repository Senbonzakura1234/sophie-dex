import type { Rumor } from '@prisma/client';
import RecordHead from '@root/components/RecordHead';
import RecordWrapper from '@root/components/RecordWrapper';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { RecordProps } from '@root/types/common/props';
import type { FC } from 'react';

import { nullableHandle } from '@root/utils/common';
import Description from './Description';
import Location from './Location';
import Price from './Price';
import RumorType from './RumorType';

type RumorRecordProps = RecordProps<Rumor>;

const RumorRecord: FC<RumorRecordProps> = props => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();

	return (
		<RecordWrapper {...nullableHandle(props, !isReady)}>
			{({ description, id, location, name, price, rumorType }) => (
				<>
					<RecordHead
						id={id}
						isCurrentRecord={securedIdQuery.id === id}
						name={name}
						pathname={pathname}
						pageName='Rumor'
					/>

					<Price price={price} />

					<Description description={description} />

					<Location location={location} />

					<RumorType rumorType={rumorType} />
				</>
			)}
		</RecordWrapper>
	);
};

export default RumorRecord;
