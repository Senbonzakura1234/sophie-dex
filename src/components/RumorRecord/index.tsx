import RecordWrapper from '@root/components/RecordWrapper';
import type { Rumor } from '@root/server/db/schema';
import type { RecordProps } from '@root/types/common/props';
import { nullableHandle } from '@root/utils/common';

import { rumorColorMap } from '@root/constants';
import Description from './Description';
import Location from './Location';
import Price from './Price';
import RumorType from './RumorType';

type RumorRecordProps = RecordProps<Rumor>;

export default function RumorRecord(props: RumorRecordProps) {
	return (
		<RecordWrapper
			{...nullableHandle(props)}
			moduleId='rumor'
			color={props.data?.rumorType && rumorColorMap[props.data?.rumorType]}
		>
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
