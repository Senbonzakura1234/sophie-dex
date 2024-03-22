import './about.css';

import Readme from '@components/common/dynamic/Readme';
import AppVersion from '@components/common/static/AppVersion';
import CommonWrapper from '@components/common/static/CommonWrapper';
import type { PageProps } from '@root/types/common';
import { env } from '@root/utils/common/env.mjs';
import { generateGenericMetadata } from '@root/utils/server/database';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateGenericMetadata(parent, { title: `${env.NEXT_PUBLIC_APP_NAME} | About` }, searchParams);
}

export default function About() {
	return (
		<CommonWrapper className='about h-auto'>
			<AppVersion className='ml-auto sm:absolute sm:right-8' />
			<Readme />
		</CommonWrapper>
	);
}
