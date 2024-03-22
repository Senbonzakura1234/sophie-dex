import LicenseInfo from '@components/common/static/LicenseInfo';
import SuspenseComponent from '@components/layout/static/SuspenseComponent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import type { PageProps } from '@root/types/common';
import { env } from '@root/utils/common/env.mjs';
import { generateGenericMetadata } from '@root/utils/server/database';
import { getLicense } from '@root/utils/server/fetch';
import type { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateGenericMetadata(parent, { title: `${env.NEXT_PUBLIC_APP_NAME} | License` }, searchParams);
}

export default function License() {
	return (
		<Suspense fallback={<RecordPlaceholder className='min-h-[42rem]' />}>
			<SuspenseComponent promiseData={getLicense()} ChildComponent={LicenseInfo} showErrorContent />
		</Suspense>
	);
}
