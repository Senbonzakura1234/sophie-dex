import APIProfileInfoWrapper from '@components/layout/server/ApiWrapper/profile';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { Suspense } from 'react';

export default function Profile() {
	return (
		<Suspense fallback={<RecordPlaceholder className='mx-auto min-h-[20rem] w-full max-w-lg' />}>
			<APIProfileInfoWrapper />
		</Suspense>
	);
}
