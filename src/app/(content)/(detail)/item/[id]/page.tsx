import ItemRecord from '@components/common/server/ItemRecord';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server/database';
import { ApiServerCtx } from '@root/utils/server/trpc';
import type { Metadata, ResolvingMetadata } from 'next';

export const revalidate = 9e6;

export async function generateStaticParams() {
	return await ApiServerCtx.item.getAllIds.fetch();
}

const getRecord = (params: PageProps['params']) => ApiServerCtx.item.getOne.fetch(params);

export function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, getRecord(params));
}

export default async function Item({ params }: PageProps) {
	const data = await getRecord(params);

	return <ItemRecord data={data} currentId={params.id} />;
}
