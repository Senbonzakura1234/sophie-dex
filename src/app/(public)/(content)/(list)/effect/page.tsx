import APIListWrapper from '@root/components/layout/client/ApiWrapper/effects';
import { APP_NAME } from '@root/constants';
import type { PageProps } from '@root/types/common';
import { generateListMetadata } from '@root/utils/server';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateListMetadata(searchParams, parent, { title: `${APP_NAME} | Effects` });
}

export default async function effects({ searchParams }: PageProps) {
	return <APIListWrapper searchParams={searchParams} />;
}
