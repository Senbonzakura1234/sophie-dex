import DispatchContentData from '@root/components/common/client/DispatchContentData';
import RumorRecord from '@root/components/common/server/RumorRecord';
import { appRouter } from '@root/server/api/router/_app';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server';
import { createServerSideHelpers } from '@trpc/react-query/server';
import type { Metadata, ResolvingMetadata } from 'next';

export const revalidate = 9e5;

export async function generateStaticParams() {
	return await createServerSideHelpers({ router: appRouter, ctx: {} }).rumor.getAllIds.fetch();
}

const getRecord = (params: PageProps['params']) => {
	const helpers = createServerSideHelpers({ router: appRouter, ctx: {} });

	return helpers.rumor.getOne.fetch(params);
};

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(parent, getRecord(params));
}

export default async function rumor({ params }: PageProps) {
	const data = await getRecord(params);

	return (
		<>
			<DispatchContentData />
			<RumorRecord data={data} currentId={params.id} />
		</>
	);
}
