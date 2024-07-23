import LicenseInfo from '@components/common/static/LicenseInfo';
import SuspenseComponent from '@components/layout/static/SuspenseComponent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { APP_NAME } from '@root/constants/common';
import type { PageProps } from '@root/types/common';
import { generateGenericMetadata } from '@root/utils/server/database';
import { getLicense } from '@root/utils/server/fetch';
import type { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateGenericMetadata(parent, { title: `${APP_NAME} | License` }, searchParams);
}

export default function License() {
	return (
		<Suspense fallback={<RecordPlaceholder className='min-h-[42rem]' />}>
			<SuspenseComponent promiseData={getLicense()} ChildComponent={LicenseInfo} showErrorContent />
		</Suspense>
	);
}
