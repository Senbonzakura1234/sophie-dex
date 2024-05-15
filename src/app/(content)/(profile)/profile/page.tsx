import APIProfileWrapper from '@components/layout/dynamic/ApiWrapper/profile';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { type PageProps } from '@root/types/common';
import { env } from '@root/utils/common/env';
import { generateGenericMetadata } from '@root/utils/server/database';
import type { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateGenericMetadata(parent, { title: `${env.NEXT_PUBLIC_APP_NAME} | Profile` }, searchParams);
}

export default function Profile() {
	return (
		<Suspense fallback={<RecordPlaceholder className='mx-auto min-h-80 w-full max-w-lg' />}>
			<APIProfileWrapper />;
		</Suspense>
	);
}
