import APIListWrapper from '@components/layout/dynamic/ApiWrapper/effects';
import type { PageProps } from '@root/types/common';
import { publicEnv } from '@root/utils/common/env.mjs';
import { generateGenericMetadata } from '@root/utils/server/database';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateGenericMetadata(parent, { title: `${publicEnv.NEXT_PUBLIC_APP_NAME} | Effects` }, searchParams);
}

export default function effects({ searchParams }: PageProps) {
	return <APIListWrapper searchParams={searchParams} />;
}
