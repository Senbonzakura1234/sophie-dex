import APIProfileWrapper from '@components/layout/dynamic/ApiWrapper/profile';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { type PageProps } from '@root/types/common';
import { generateProfileMetadata } from '@root/utils/server/database';
import type { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(_: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateProfileMetadata(parent);
}

export default function Profile() {
	return (
		<Suspense fallback={<RecordPlaceholder className='mx-auto min-h-80 w-full max-w-lg' />}>
			<APIProfileWrapper />;
		</Suspense>
	);
}
