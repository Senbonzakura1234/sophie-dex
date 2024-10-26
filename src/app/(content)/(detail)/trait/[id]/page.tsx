import TraitRecord from '@components/common/static/TraitRecord';
import SuspenseComponent from '@components/layout/static/SuspenseComponent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { getAllTraitIdsQuery, getTraitRecordQuery } from '@root/server/postgresql/repository/query';
import type { PageProps } from '@root/types/common/props';
import { tryCatchHandler } from '@root/utils/common';
import { generateDetailMetadata, getAllRecordIds, getContentRecord } from '@root/utils/server/database';
import type { Metadata, ResolvingMetadata } from 'next';

export const revalidate = 9e6;

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
	const { data } = await tryCatchHandler(getAllRecordIds(getAllTraitIdsQuery), 'generateStaticParams.getAllTraitIds');

	return data?.result || [];
}

const getRecord = async (params: Readonly<PageProps>['params']) => await getContentRecord(getTraitRecordQuery, params);

export function generateMetadata({ params }: Readonly<PageProps>, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, getRecord(params));
}

export default function TraitPage({ params }: Readonly<PageProps>) {
	return (
		<SuspenseComponent
			promiseData={getRecord(params)}
			ChildComponent={TraitRecord}
			showErrorContent
			fallback={<RecordPlaceholder />}
		/>
	);
}
