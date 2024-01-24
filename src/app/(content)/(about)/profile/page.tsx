import ProfileInfo from '@components/common/static/ProfileInfo';
import SuspenseComponent from '@components/layout/static/SuspenseComponent';
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
