import RecordPlaceholder from '@root/components/common/server/loading/RecordPlaceholder';
import { defaultLimit } from '@root/constants/common';
import { createArray } from '@root/utils/common';

export default function Loading() {
	return (
		<>
			{createArray(defaultLimit, 0).map((_, key) => (
				<RecordPlaceholder key={key} />
			))}
		</>
	);
}
