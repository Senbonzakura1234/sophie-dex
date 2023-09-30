import RumorRecord from '@root/components/common/server/RumorRecord';
import { appRouter } from '@root/server/api/router/_app';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server/database';
import { createServerSideHelpers } from '@trpc/react-query/server';
import type { Metadata, ResolvingMetadata } from 'next';

export const revalidate = 9e5;

export async function generateStaticParams() {
	return await createServerSideHelpers({ router: appRouter, ctx: {} }).rumor.getAllIds.fetch();
}

const getRecord = (params: PageProps['params']) =>
	createServerSideHelpers({ router: appRouter, ctx: {} }).rumor.getOne.fetch(params);

export function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, getRecord(params));
}

export default async function rumor({ params }: PageProps) {
	const data = await getRecord(params);

	return <RumorRecord data={data} currentId={params.id} />;
}
