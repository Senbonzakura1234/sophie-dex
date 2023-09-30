'use client';

import ProfileInfo from '@root/components/common/server/ProfileInfo';
import ErrorContent from '@root/components/layout/server/ErrorContent';
import RecordPlaceholder from '@root/components/loading/RecordPlaceholder';
import { ApiContext } from '@root/utils/client/trpc';

export default function APIProfileInfoWrapper() {
	const { data, isSuccess, isLoading, error } = ApiContext.about.profile.useQuery();

	if (isLoading) return <RecordPlaceholder className='mx-auto min-h-[20rem] w-full max-w-lg' />;

	if (!isSuccess && !isLoading) return <ErrorContent code={error.data?.code} />;

	return <ProfileInfo profileInfo={data} />;
}
