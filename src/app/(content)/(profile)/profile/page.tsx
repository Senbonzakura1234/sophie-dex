import APIProfileWrapper from '@components/layout/dynamic/ApiWrapper/profile';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { APP_NAME } from '@root/constants/common';
import type { PageProps } from '@root/types/common/props';
import { generateGenericMetadata } from '@root/utils/server/database';
import type { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(
	{ searchParams }: Readonly<PageProps>,
	parent: ResolvingMetadata
): Promise<Metadata> {
	return generateGenericMetadata(parent, { title: `${APP_NAME} | Profile` }, searchParams);
}

export default async function ProfilePage() {
	return (
		<Suspense fallback={<RecordPlaceholder className='mx-auto min-h-[427.5px] w-full max-w-4xl' />}>
			<APIProfileWrapper />
		</Suspense>
	);
}
