import Readme from '@components/common/dynamic/Readme';
import AppVersion from '@components/common/static/AppVersion';
import CommonWrapper from '@components/common/static/CommonWrapper';
import { APP_NAME } from '@root/constants/common';
import type { PageProps } from '@root/types/common/props';
import { generateGenericMetadata } from '@root/utils/server/database';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
	{ searchParams }: Readonly<PageProps>,
	parent: ResolvingMetadata
): Promise<Metadata> {
	return generateGenericMetadata(parent, { title: `${APP_NAME} | About` }, searchParams);
}

export default function About() {
	return (
		<CommonWrapper classNames={{ wrapper: 'markdown-wrapper h-auto' }}>
			<AppVersion className='ml-auto sm:absolute sm:right-8' />
			<Readme />
		</CommonWrapper>
	);
}
