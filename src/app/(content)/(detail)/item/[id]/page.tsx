import ItemRecord from '@components/common/static/ItemRecord';
import SuspenseComponent from '@components/layout/static/SuspenseComponent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { getAllItemIdsQuery, getItemRecordQuery } from '@root/server/postgresql/repository/query';
import type { PageProps } from '@root/types/common/props';
import { tryCatchHandler } from '@root/utils/common';
import { generateDetailMetadata, getAllRecordIds, getContentRecord } from '@root/utils/server/database';
import type { Metadata, ResolvingMetadata } from 'next';

export const revalidate = 9e6;

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
	const { data } = await tryCatchHandler(getAllRecordIds(getAllItemIdsQuery), 'generateStaticParams.getAllItemIds');

	return data?.result || [];
}

const getRecord = async (params: Readonly<PageProps>['params']) => await getContentRecord(getItemRecordQuery, params);

export function generateMetadata({ params }: Readonly<PageProps>, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, getRecord(params));
}

export default function ItemPage({ params }: Readonly<PageProps>) {
	return (
		<SuspenseComponent
			promiseData={getRecord(params)}
			ChildComponent={ItemRecord}
			showErrorContent
			fallback={<RecordPlaceholder />}
		/>
	);
}
