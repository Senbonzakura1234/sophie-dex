import APIDetailWrapper from '@root/components/layout/client/ApiWrapper/traits';
import { appRouter } from '@root/server/api/router/_app';
import type { PageProps } from '@root/types/common';
import { generateDetailMetadata } from '@root/utils/server/database';
import { createServerSideHelpers } from '@trpc/react-query/server';
import type { Metadata, ResolvingMetadata } from 'next';

export function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateDetailMetadata(
		parent,
		createServerSideHelpers({ router: appRouter, ctx: {} }).trait.getOne.fetch(params),
	);
}

export default function trait({ params }: PageProps) {
	return <APIDetailWrapper params={params} />;
}
