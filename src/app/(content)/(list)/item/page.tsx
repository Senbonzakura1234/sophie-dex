import APIListWrapper from '@root/components/layout/client/ApiWrapper/items';
import { APP_NAME } from '@root/constants';
import type { PageProps } from '@root/types/common';
import { generateListMetadata } from '@root/utils/server';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateListMetadata(searchParams, parent, { title: `${APP_NAME} | Items` });
}

export default async function items({ searchParams }: PageProps) {
	return <APIListWrapper searchParams={searchParams} />;
}
