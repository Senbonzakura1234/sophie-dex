import ItemRecord from '@root/components/common/server/ItemRecord';
import { get } from '@root/server/api/detail/getItem';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, get(params));
}

export default async function Item({ params }: { params: { id: string } }) {
	const record = await get(params);

	return <ItemRecord data={record} currentId={params.id} />;
}
