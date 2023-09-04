import RecordWrapper from '@root/components/common/server/RecordWrapper';
import type { Effect } from '@root/server/database/schema';

type EffectRecordProps = { data: Effect } & { currentId?: string };

export default function EffectRecord({ currentId, ...props }: EffectRecordProps) {
	return (
		<RecordWrapper {...props} currentId={currentId}>
			{({ description }) => <p className='text-lg'>{description}</p>}
		</RecordWrapper>
	);
}
