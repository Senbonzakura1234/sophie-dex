import ItemRecord from '@root/components/common/server/ItemRecord';
import { singleRecordProvider } from '@root/db/repository/singleRecord';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, singleRecordProvider.getItem(params));
}

export default async function Item({ params }: { params: { id: string } }) {
	const record = await singleRecordProvider.getItem(params);

	return <ItemRecord data={record} currentId={params.id} />;
}
