import RecordWrapper from '@root/components/RecordWrapper';
import type { RecordProps } from '@root/types/common/props';

import type { Rumor } from '@root/server/db/schema';
import { nullableHandle } from '@root/utils/common';
import Description from './Description';
import Location from './Location';
import Price from './Price';
import RumorType from './RumorType';

type RumorRecordProps = RecordProps<Rumor>;

export default function RumorRecord(props: RumorRecordProps) {
	return (
		<RecordWrapper {...nullableHandle(props)} pageName='Rumor'>
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
