import RecordWrapper from '@components/common/static/RecordWrapper';
import { rumorColorMap } from '@root/constants/common';
import type { Rumor } from '@root/server/postgresql/schema';
import { Suspense } from 'react';

import Description from './Description';
import Location from './Location';
import Price from './Price';
import RumorType from './RumorType';

type Props = Readonly<{ data: Rumor } & { currentId?: string; search?: string }>;

export default function RumorRecord({ currentId, search, ...props }: Props) {
	return (
		<RecordWrapper
			{...props}
			colors={[undefined, rumorColorMap[props.data?.rumorType]]}
			currentId={currentId}
			search={search}
		>
			{({ description, location, price, rumorType }) => (
				<>
					<Price price={price} search={search} />

					<Description description={description} search={search} />

					<Location location={location} search={search} />

					<Suspense>
						<RumorType rumorType={rumorType} />
					</Suspense>
				</>
			)}
		</RecordWrapper>
	);
}
