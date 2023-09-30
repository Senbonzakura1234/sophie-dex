import TraitRecord from '@root/components/common/server/TraitRecord';
import { appRouter } from '@root/server/api/router/_app';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server/database';
import { createServerSideHelpers } from '@trpc/react-query/server';
import type { Metadata, ResolvingMetadata } from 'next';

export const revalidate = 9e5;

export async function generateStaticParams() {
	return await createServerSideHelpers({ router: appRouter, ctx: {} }).trait.getAllIds.fetch();
}

const getRecord = (params: PageProps['params']) =>
	createServerSideHelpers({ router: appRouter, ctx: {} }).trait.getOne.fetch(params);

export function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, getRecord(params));
}

export default async function trait({ params }: PageProps) {
	const data = await getRecord(params);

	return <TraitRecord data={data} currentId={params.id} />;
}
