import RumorRecord from '@components/common/server/RumorRecord';
import SuspenseComponent from '@components/layout/server/SuspenseComponent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server/database';
import { ApiServerCtx } from '@root/utils/server/trpc';
import type { Metadata, ResolvingMetadata } from 'next';
import type { ComponentProps } from 'react';
import { Suspense } from 'react';

export const revalidate = 9e6;

export async function generateStaticParams() {
	return await ApiServerCtx.rumor.getAllIds.fetch();
}

const getRecord = async (params: PageProps['params']): Promise<ComponentProps<typeof RumorRecord>> => ({
	data: await ApiServerCtx.rumor.getOne.fetch(params),
	currentId: params.id,
});

export function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, getRecord(params));
}

export default async function Rumor({ params }: PageProps) {
	return (
		<Suspense fallback={<RecordPlaceholder />}>
			<SuspenseComponent promiseData={getRecord(params)} ChildComponent={RumorRecord} />
		</Suspense>
	);
}
