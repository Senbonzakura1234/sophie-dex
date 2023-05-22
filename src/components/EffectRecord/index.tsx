import RecordWrapper from '@root/components/RecordWrapper';
import type { Effect } from '@root/server/db/schema';
import type { RecordProps } from '@root/types/common/props';
import { nullableHandle } from '@root/utils/common';

type EffectRecordProps = RecordProps<Effect>;

export default function EffectRecord(props: EffectRecordProps) {
	return (
		<RecordWrapper {...nullableHandle(props)} pageName='Effect'>
			{({ description, index }) => (
				<>
					<div className='text-sm'>index: {index}</div>

					<p className='text-lg'>{description}</p>
				</>
			)}
		</RecordWrapper>
	);
}
