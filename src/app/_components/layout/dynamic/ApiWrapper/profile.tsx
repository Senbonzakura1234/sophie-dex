'use client';

import ProfileInfo from '@components/common/static/ProfileInfo';
import ErrorContent from '@components/layout/static/ErrorContent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { ApiClientCtx } from '@root/utils/client/trpc';

export default function APIProfileWrapper() {
	const { data, status, error } = ApiClientCtx.user.getReadmeProfile.useQuery();

	if (status === 'success') return <ProfileInfo {...data} />;

	if (status === 'pending') return <RecordPlaceholder className='mx-auto min-h-[427.5px] w-full max-w-4xl' />;

	return <ErrorContent code={error.data?.code} />;
}
