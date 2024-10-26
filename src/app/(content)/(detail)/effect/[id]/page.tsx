import EffectRecord from '@components/common/static/EffectRecord';
import SuspenseComponent from '@components/layout/static/SuspenseComponent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { getAllEffectIdsQuery, getEffectRecordQuery } from '@root/server/postgresql/repository/query';
import type { PageProps } from '@root/types/common/props';
import { tryCatchHandler } from '@root/utils/common';
import { generateDetailMetadata, getAllRecordIds, getContentRecord } from '@root/utils/server/database';
import type { Metadata, ResolvingMetadata } from 'next';

const getRecord = async (params: Readonly<PageProps>['params']) => await getContentRecord(getEffectRecordQuery, params);

export const revalidate = 9e6;

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
	const { data } = await tryCatchHandler(
		getAllRecordIds(getAllEffectIdsQuery),
		'generateStaticParams.getAllEffectIds'
	);

	return data?.result || [];
}

export function generateMetadata({ params }: Readonly<PageProps>, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, getRecord(params));
}

export default function EffectPage({ params }: Readonly<PageProps>) {
	return (
		<SuspenseComponent
			promiseData={getRecord(params)}
			ChildComponent={EffectRecord}
			showErrorContent
			fallback={<RecordPlaceholder />}
		/>
	);
}
