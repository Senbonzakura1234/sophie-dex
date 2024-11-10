import RumorRecord from '@components/common/static/RumorRecord';
import SuspenseComponent from '@components/layout/static/SuspenseComponent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { getAllRumorIdsQuery, getRumorRecordQuery } from '@root/server/postgresql/repository/query';
import type { PageProps } from '@root/types/common/props';
import { resolveParams, tryCatchHandler } from '@root/utils/common';
import { generateDetailMetadata, getAllRecordIds, getContentRecord } from '@root/utils/server/database';
import type { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

export const revalidate = 9e6;

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
	const { data } = await tryCatchHandler(getAllRecordIds(getAllRumorIdsQuery), {
		operationCode: 'generateStaticParams.getAllRumorIds'
	});

	return data?.result || [];
}

const getRecord = async (params: Readonly<PageProps>['params']) =>
	await getContentRecord(getRumorRecordQuery, await resolveParams(params));

export function generateMetadata({ params }: Readonly<PageProps>, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, getRecord(params));
}

export default async function RumorPage({ params }: Readonly<PageProps>) {
	const resolvedProps = await getRecord(params);

	return (
		<Suspense fallback={<RecordPlaceholder />}>
			<SuspenseComponent resolvedProps={resolvedProps} ChildComponent={RumorRecord} showErrorContent />
		</Suspense>
	);
}
