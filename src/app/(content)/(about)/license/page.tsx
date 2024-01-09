import LicenseInfo from '@components/common/server/LicenseInfo';
import SuspenseComponent from '@components/layout/server/SuspenseComponent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { getLicense } from '@root/utils/server/fetch';
import { Suspense } from 'react';

export default function License() {
	return (
		<Suspense fallback={<RecordPlaceholder className='min-h-[42rem]' />}>
			<SuspenseComponent promiseData={getLicense()} ChildComponent={LicenseInfo} showErrorContent />
		</Suspense>
	);
}
