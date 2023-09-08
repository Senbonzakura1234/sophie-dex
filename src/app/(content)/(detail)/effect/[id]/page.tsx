import APISingleWrapper from '@root/components/layout/client/ApiWrapper/effect';
import { appRouter } from '@root/server/api/router/_app';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server';
import { createServerSideHelpers } from '@trpc/react-query/server';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	const helpers = createServerSideHelpers({ router: appRouter, ctx: {} });

	const dehydrate = () => {
		helpers.dehydrate();
		return 'dehydrate';
	};

	return generateDetailMetadata(parent, helpers.effect.getOne.fetch(params), dehydrate);
}

export default function effect({ params }: PageProps) {
	return <APISingleWrapper params={params} />;
}
