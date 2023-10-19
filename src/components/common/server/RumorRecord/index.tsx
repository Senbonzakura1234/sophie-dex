import RecordWrapper from '@root/components/common/server/RecordWrapper';
import { rumorColorMap } from '@root/constants/common';
import type { Rumor } from '@root/server/database/postgresql/schema';

import Description from './Description';
import Location from './Location';
import Price from './Price';
import RumorType from './RumorType';

type RumorRecordProps = { data: Rumor } & { currentId?: string };

export default function RumorRecord({ currentId, ...props }: RumorRecordProps) {
	return (
		<RecordWrapper {...props} colors={[undefined, rumorColorMap[props.data?.rumorType]]} currentId={currentId}>
			{({ description, location, price, rumorType }) => (
				<>
					<Price price={price} />

					<Description description={description} />

					<Location location={location} />

					<RumorType rumorType={rumorType} />
				</>
			)}
		</RecordWrapper>
	);
}
