import APIListWrapper from '@root/components/layout/client/ApiWrapper/traits';
import { APP_NAME } from '@root/constants/common';
import type { PageProps } from '@root/types/common';
import { generateListMetadata } from '@root/utils/server/database';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateListMetadata(searchParams, parent, { title: `${APP_NAME} | Traits` });
}

export default async function traits({ searchParams }: PageProps) {
	return <APIListWrapper searchParams={searchParams} />;
}
