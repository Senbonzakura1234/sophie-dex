import ProfileInfo from '@components/common/static/ProfileInfo';
import ErrorContent from '@components/layout/static/ErrorContent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { type PageProps } from '@root/types/common';
import { env } from '@root/utils/common/env';
import { generateGenericMetadata } from '@root/utils/server/database';
import { getApiServerCtx } from '@root/utils/server/trpc';
import type { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateGenericMetadata(parent, { title: `${env.NEXT_PUBLIC_APP_NAME} | Profile` }, searchParams);
}

const getReadmeProfile = async () => {
	const ApiServerCtx = await getApiServerCtx(true);

	const [profileRes, readmeContent] = await Promise.all([
		ApiServerCtx.user.getProfile.fetch(),
		ApiServerCtx.user.getGithubReadme.fetch()
	] as const);

	return { profileRes, readmeContent };
};

export default async function Profile() {
	const { profileRes, readmeContent } = await getReadmeProfile();

	return profileRes.isSuccess ? (
		<Suspense fallback={<RecordPlaceholder className='mx-auto min-h-[580px] w-full max-w-lg' />}>
			<ProfileInfo profile={profileRes.result} readmeContent={readmeContent} />
		</Suspense>
	) : (
		<ErrorContent code={profileRes.error.code} />
	);
}
