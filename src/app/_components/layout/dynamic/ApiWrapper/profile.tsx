'use client';

import ProfileInfo from '@components/common/static/ProfileInfo';
import ErrorContent from '@components/layout/static/ErrorContent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { ApiClientCtx } from '@root/utils/client/trpc';

export default function APIProfileWrapper() {
	const {
		data,
		error,
		status: queryStatus,
	} = ApiClientCtx.user.getProfile.useQuery(undefined, { refetchOnMount: true, refetchOnWindowFocus: true });

	if (queryStatus === 'pending') return <RecordPlaceholder className='mx-auto min-h-80 w-full max-w-lg' />;

	if (queryStatus === 'error')
		return <ErrorContent code={error.data?.code === 'NOT_FOUND' ? 'UNAUTHORIZED' : error.data?.code} />;

	if (queryStatus === 'success' && data.isSuccess) return <ProfileInfo profile={data.result} />;

	return <ErrorContent code={data.error?.code} />;
}
