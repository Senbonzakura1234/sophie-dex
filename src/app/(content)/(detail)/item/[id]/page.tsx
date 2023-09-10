import ItemRecord from '@root/components/common/server/ItemRecord';
import { appRouter } from '@root/server/api/router/_app';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server';
import { createServerSideHelpers } from '@trpc/react-query/server';
import type { Metadata, ResolvingMetadata } from 'next';

export const revalidate = 9e5;

export async function generateStaticParams() {
	return await createServerSideHelpers({ router: appRouter, ctx: {} }).item.getAllIds.fetch();
}

const getRecord = (params: PageProps['params']) => {
	const helpers = createServerSideHelpers({ router: appRouter, ctx: {} });

	return helpers.item.getOne.fetch(params);
};

export function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, getRecord(params));
}

export default async function effect({ params }: PageProps) {
	const data = await getRecord(params);

	return <ItemRecord data={data} currentId={params.id} />;
}
