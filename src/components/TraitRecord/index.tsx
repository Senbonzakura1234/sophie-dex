import RecordWrapper from '@root/components/RecordWrapper';
import type { RecordProps } from '@root/types/common/props';

import type { Trait } from '@root/server/db/schema';
import { nullableHandle } from '@root/utils/common';

import dynamic from 'next/dynamic';

const Categories = dynamic(() => import('./Categories'), {
	loading: () => <div className='h-8 w-40 max-w-full animate-pulse rounded' />,
});
const ItemPresent = dynamic(() => import('./ItemPresent'), {
	loading: () => <div className='h-6 w-40 max-w-full animate-pulse rounded' />,
});
const TraitMergeList = dynamic(() => import('./TraitMergeList'), {
	loading: () => <div className='h-6 w-40 max-w-full animate-pulse rounded' />,
});

type TraitRecordProps = RecordProps<Trait>;

export default function TraitRecord(props: TraitRecordProps) {
	return (
		<RecordWrapper {...nullableHandle(props)} pageName='trait'>
			{({ categories, description, itemPresent, mergeFrom }) => (
				<>
					<p className='text-lg'>{description}</p>

					<TraitMergeList mergeFrom={mergeFrom} />

					{itemPresent ? <ItemPresent itemPresent={itemPresent} /> : null}

					<Categories categories={categories} />
				</>
			)}
		</RecordWrapper>
	);
}
