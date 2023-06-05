import RecordWrapper from '@root/components/RecordWrapper';
import type { RecordProps } from '@root/types/common/props';

import type { Rumor } from '@root/server/db/schema';
import { nullableHandle } from '@root/utils/common';

import dynamic from 'next/dynamic';

const Description = dynamic(() => import('./Description'), {
	loading: () => <div className='h-7 w-40 max-w-full animate-pulse rounded' />,
});
const Location = dynamic(() => import('./Location'), {
	loading: () => <div className='h-6 w-40 max-w-full animate-pulse rounded' />,
});
const Price = dynamic(() => import('./Price'), {
	loading: () => <div className='h-6 w-40 max-w-full animate-pulse rounded' />,
});
const RumorType = dynamic(() => import('./RumorType'), {
	loading: () => <div className='h-6 w-40 max-w-full animate-pulse rounded' />,
});

type RumorRecordProps = RecordProps<Rumor>;

export default function RumorRecord(props: RumorRecordProps) {
	return (
		<RecordWrapper {...nullableHandle(props)} pageName='rumor'>
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
