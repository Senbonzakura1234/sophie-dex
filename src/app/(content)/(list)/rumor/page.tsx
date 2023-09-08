import APIListWrapper from '@root/components/layout/client/ApiWrapper/rumors';
import { APP_NAME } from '@root/constants';
import type { PageProps } from '@root/types/common';
import { generateListMetadata } from '@root/utils/server';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateListMetadata(searchParams, parent, { title: `${APP_NAME} | Rumors` });
}

export default async function rumors({ searchParams }: PageProps) {
	return <APIListWrapper searchParams={searchParams} />;
}
