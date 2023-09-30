'use client';

import LicenseInfo from '@root/components/common/server/LicenseInfo';
import ErrorContent from '@root/components/layout/server/ErrorContent';
import RecordPlaceholder from '@root/components/loading/RecordPlaceholder';
import { ApiContext } from '@root/utils/trpc';

export default function APILicenseInfoWrapper() {
	const { data, isSuccess, isLoading, error } = ApiContext.about.license.useQuery();

	if (isLoading) return <RecordPlaceholder className='min-h-[42rem]' />;

	if (!isSuccess && !isLoading) return <ErrorContent code={error.data?.code} />;

	return <LicenseInfo licenseInfo={data} />;
}
