import EffectRecord from '@root/components/common/server/EffectRecord';
import { appRouter } from '@root/server/api/router/_app';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server/database';
import { createServerSideHelpers } from '@trpc/react-query/server';
import type { Metadata, ResolvingMetadata } from 'next';

export const revalidate = 9e5;

export async function generateStaticParams() {
	return await createServerSideHelpers({ router: appRouter, ctx: {} }).effect.getAllIds.fetch();
}

const getRecord = (params: PageProps['params']) =>
	createServerSideHelpers({ router: appRouter, ctx: {} }).effect.getOne.fetch(params);

export function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, getRecord(params));
}

export default async function effect({ params }: PageProps) {
	const data = await getRecord(params);

	return <EffectRecord data={data} currentId={params.id} />;
}
