import ProfileInfo from '@components/common/static/ProfileInfo';
import SuspenseComponent from '@components/layout/static/SuspenseComponent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import type { PageProps } from '@root/types/common';
import { publicEnv } from '@root/utils/common/env.mjs';
import { generateGenericMetadata } from '@root/utils/server/database';
import { getGithubUserInfo } from '@root/utils/server/fetch';
import type { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateGenericMetadata(parent, { title: `${publicEnv.NEXT_PUBLIC_APP_NAME} | Profile` }, searchParams);
}

export default function Profile() {
	return (
		<Suspense fallback={<RecordPlaceholder className='mx-auto min-h-[20rem] w-full max-w-lg' />}>
			<SuspenseComponent promiseData={getGithubUserInfo()} ChildComponent={ProfileInfo} showErrorContent />
		</Suspense>
	);
}
