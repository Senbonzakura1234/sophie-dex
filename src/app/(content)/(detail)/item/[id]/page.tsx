import ItemRecord from '@components/common/static/ItemRecord';
import SuspenseComponent from '@components/layout/static/SuspenseComponent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server/database';
import { ApiServerCtx } from '@root/utils/server/trpc';
import type { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

export const revalidate = 9e6;

export async function generateStaticParams() {
	const { result } = await ApiServerCtx.item.getAllIds.fetch();

	return result || [];
}

const getRecord = async (params: PageProps['params']) => ApiServerCtx.item.getOne.fetch(params);

export function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, getRecord(params));
}

export default async function Item({ params }: PageProps) {
	return (
		<Suspense fallback={<RecordPlaceholder />}>
			<SuspenseComponent promiseData={getRecord(params)} ChildComponent={ItemRecord} showErrorContent />
		</Suspense>
	);
}
