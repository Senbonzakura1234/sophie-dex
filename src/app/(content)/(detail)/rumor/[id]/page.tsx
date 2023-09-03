import RumorRecord from '@root/components/common/server/RumorRecord';
import { singleRecordProvider } from '@root/db/repository/singleRecord';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, singleRecordProvider.getRumor(params));
}

export default async function Rumor({ params }: { params: { id: string } }) {
	const record = await singleRecordProvider.getRumor(params);

	return <RumorRecord data={record} currentId={params.id} />;
}
