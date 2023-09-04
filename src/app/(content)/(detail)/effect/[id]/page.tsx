import EffectRecord from '@root/components/common/server/EffectRecord';
import { get } from '@root/server/api/detail/getEffect';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, get(params));
}

export default async function effect({ params }: PageProps) {
	const record = await get(params);

	return <EffectRecord data={record} currentId={params.id} />;
}
