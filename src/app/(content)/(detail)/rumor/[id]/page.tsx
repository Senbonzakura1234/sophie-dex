import RumorRecord from '@components/common/static/RumorRecord';
import SuspenseComponent from '@components/layout/static/SuspenseComponent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server/database';
import { ApiServerCtx } from '@root/utils/server/trpc';
import type { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

export const revalidate = 9e6;

export async function generateStaticParams() {
	const { result } = await ApiServerCtx.rumor.getAllIds.fetch();

	return result || [];
}

const getRecord = async (params: PageProps['params']) => ApiServerCtx.rumor.getOne.fetch(params);

export function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, getRecord(params));
}

export default async function Rumor({ params }: PageProps) {
	return (
		<Suspense fallback={<RecordPlaceholder />}>
			<SuspenseComponent promiseData={getRecord(params)} ChildComponent={RumorRecord} showErrorContent />
		</Suspense>
	);
}
