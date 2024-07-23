import APIListWrapper from '@components/layout/dynamic/ApiWrapper/effects';
import ListRecordPlaceholder from '@components/loading/ListRecordPlaceholder';
import { APP_NAME } from '@root/constants/common';
import type { PageProps } from '@root/types/common';
import { generateGenericMetadata } from '@root/utils/server/database';
import type { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateGenericMetadata(parent, { title: `${APP_NAME} | Effects` }, searchParams);
}

export default function effects() {
	return (
		<Suspense fallback={<ListRecordPlaceholder />}>
			<APIListWrapper />
		</Suspense>
	);
}
