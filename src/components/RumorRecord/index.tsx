import RecordWrapper from '@root/components/RecordWrapper';
import { rumorColorMap } from '@root/constants';
import type { Rumor } from '@root/server/db/schema';
import type { RecordProps } from '@root/types/common/props';
import { nullableHandle } from '@root/utils/common';

import Description from './Description';
import Location from './Location';
import Price from './Price';
import RumorType from './RumorType';

type RumorRecordProps = RecordProps<Rumor> & { currentId: string | undefined };

export default function RumorRecord({ currentId, ...props }: RumorRecordProps) {
	return (
		<RecordWrapper
			{...nullableHandle(props)}
			colors={[undefined, props.data?.rumorType && rumorColorMap[props.data?.rumorType]]}
			currentId={currentId}
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
