import RecordWrapper from '@components/common/server/RecordWrapper';
import type { Effect } from '@root/server/database/postgresql/schema';
import { highlightSearchedText } from '@root/utils/common';

type EffectRecordProps = { data: Effect } & { currentId?: string; search?: string } & JSX.IntrinsicAttributes;

export default function EffectRecord({ currentId, search, ...props }: EffectRecordProps) {
	return (
		<RecordWrapper {...props} currentId={currentId} search={search}>
			{({ description }) => (
				<p className='text-lg' dangerouslySetInnerHTML={{ __html: highlightSearchedText(description, search) }} />
			)}
		</RecordWrapper>
	);
}
