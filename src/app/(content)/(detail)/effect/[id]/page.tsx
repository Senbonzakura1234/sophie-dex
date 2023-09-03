import EffectRecord from '@root/components/common/server/EffectRecord';
import { singleRecordProvider } from '@root/db/repository/singleRecord';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, singleRecordProvider.getEffect(params));
}

export default async function effect({ params }: PageProps) {
	const record = await singleRecordProvider.getEffect(params);

	return <EffectRecord data={record} currentId={params.id} />;
}
