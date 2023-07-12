import RecordWrapper from '@root/components/RecordWrapper';
import type { Effect } from '@root/server/db/schema';
import type { RecordProps } from '@root/types/common/props';
import { nullableHandle } from '@root/utils/common';

type EffectRecordProps = RecordProps<Effect> & { currentId: string | undefined };

export default function EffectRecord({ currentId, ...props }: EffectRecordProps) {
	return (
		<RecordWrapper {...nullableHandle(props)} currentId={currentId} moduleId='effect'>
			{({ description }) => <p className='text-lg'>{description}</p>}
		</RecordWrapper>
	);
}
