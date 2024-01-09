import ProfileInfo from '@components/common/server/ProfileInfo';
import SuspenseComponent from '@components/layout/server/SuspenseComponent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { getGithubUserInfo } from '@root/utils/server/fetch';
import { Suspense } from 'react';

export default function Profile() {
	return (
		<Suspense fallback={<RecordPlaceholder className='mx-auto min-h-[20rem] w-full max-w-lg' />}>
			<SuspenseComponent promiseData={getGithubUserInfo()} ChildComponent={ProfileInfo} showErrorContent />
		</Suspense>
	);
}
