import TraitRecord from '@root/components/common/server/TraitRecord';
import { singleRecordProvider } from '@root/db/repository/singleRecord';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, singleRecordProvider.getTrait(params));
}

export default async function Trait({ params }: { params: { id: string } }) {
	const record = await singleRecordProvider.getTrait(params);

	return <TraitRecord data={record} currentId={params.id} />;
}
