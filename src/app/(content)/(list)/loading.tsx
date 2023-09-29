import RecordPlaceholder from '@root/components/loading/RecordPlaceholder';
import { DEFAULT_LIMIT } from '@root/constants/common';
import { createArray } from '@root/utils/common';

export default function Loading() {
	return (
		<>
			{createArray(DEFAULT_LIMIT, 0).map((_, key) => (
				<RecordPlaceholder key={key} />
			))}
		</>
	);
}
