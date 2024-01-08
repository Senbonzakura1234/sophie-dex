import LicenseInfo from '@components/common/server/LicenseInfo';
import SuspenseComponent from '@components/layout/server/SuspenseComponent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { ApiServerCtx } from '@root/utils/server/trpc';
import { Suspense } from 'react';

export default function License() {
	return (
		<Suspense fallback={<RecordPlaceholder className='min-h-[42rem]' />}>
			<SuspenseComponent
				promiseData={ApiServerCtx.info.license.fetch()}
				ChildComponent={LicenseInfo}
				showErrorContent
			/>
		</Suspense>
	);
}
