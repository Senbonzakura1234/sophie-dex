import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { DEFAULT_LIMIT } from '@root/constants/common';
import { createArray } from '@root/utils/common';

export default function ListRecordPlaceholder() {
	return (
		<>
			{createArray(0, DEFAULT_LIMIT).map((_, key) => (
				<RecordPlaceholder key={key} />
			))}
		</>
	);
}
