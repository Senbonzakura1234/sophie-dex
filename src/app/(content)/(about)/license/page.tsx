import APILicenseInfoWrapper from '@components/layout/server/ApiWrapper/license';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { Suspense } from 'react';

export default function License() {
	return (
		<Suspense fallback={<RecordPlaceholder className='min-h-[42rem]' />}>
			<APILicenseInfoWrapper />;
		</Suspense>
	);
}
