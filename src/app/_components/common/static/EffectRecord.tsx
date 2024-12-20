import RecordWrapper from '@components/common/static/RecordWrapper';
import type { Effect } from '@root/server/postgresql/schema';
import { highlightSearchedText } from '@root/utils/common';

type Props = Readonly<{ data: Effect } & { currentId?: string; search?: string }>;

export default function EffectRecord({ currentId, search, ...props }: Props) {
	return (
		<RecordWrapper {...props} currentId={currentId} search={search}>
			{({ description }) => (
				<p className='text-lg' dangerouslySetInnerHTML={{ __html: highlightSearchedText(description, search) }} />
			)}
		</RecordWrapper>
	);
}
