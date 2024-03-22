import APIListWrapper from '@components/layout/dynamic/ApiWrapper/rumors';
import type { PageProps } from '@root/types/common';
import { env } from '@root/utils/common/env.mjs';
import { generateGenericMetadata } from '@root/utils/server/database';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateGenericMetadata(parent, { title: `${env.NEXT_PUBLIC_APP_NAME} | Rumors` }, searchParams);
}

export default function rumors({ searchParams }: PageProps) {
	return <APIListWrapper searchParams={searchParams} />;
}
