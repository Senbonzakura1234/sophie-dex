import CommonWrapper from '@components/common/static/CommonWrapper';
import ProfileInfo from '@components/common/static/ProfileInfo';
import PulsePlaceHolder from '@components/loading/PulsePlaceHolder';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { type PageProps } from '@root/types/common';
import { env } from '@root/utils/common/env';
import { generateGenericMetadata } from '@root/utils/server/database';
import { getApiServerCtx } from '@root/utils/server/trpc';
import type { Metadata, ResolvingMetadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { Suspense } from 'react';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateGenericMetadata(parent, { title: `${env.NEXT_PUBLIC_APP_NAME} | Profile` }, searchParams);
}

const getReadmeProfile = async () => {
	const ApiServerCtx = await getApiServerCtx(true);

	const [profileRes, readmeProfile] = await Promise.all([
		ApiServerCtx.user.getProfile.fetch(),
		ApiServerCtx.user.getGithubReadme.fetch()
	] as const);

	return { profileRes, readmeProfile };
};

export default async function Profile() {
	const { profileRes, readmeProfile } = await getReadmeProfile();

	return (
		<>
			{profileRes.isSuccess ? (
				<ProfileInfo profile={profileRes.result} />
			) : (
				<RecordPlaceholder className='mx-auto min-h-80 w-full max-w-lg' />
			)}

			<CommonWrapper
				classNames={{ content: 'place-content-center', wrapper: 'mx-auto w-full max-w-lg prose markdown-wrapper' }}
			>
				{readmeProfile ? (
					<Suspense fallback={<PulsePlaceHolder className='h-56 w-full' />}>
						<MDXRemote source={readmeProfile} />
					</Suspense>
				) : (
					<div className='collapse'>
						<input type='checkbox' />
						<div className='collapse-title text-lg'>
							Your Github <code>README</code> Profile goes here. See how to create it
						</div>

						<div className='collapse-content'>
							<ul>
								<li>Go to Github</li>
								<li>
									Create Repository with your <code>username</code> as its name (
									<Link href='https://github.com/Senbonzakura1234/Senbonzakura1234'>Example Repo</Link>)
								</li>
								<li>
									Create 2 files <code>README.md</code> and <code>README.mdx</code> with same content in each
									and commit
								</li>
							</ul>
						</div>
					</div>
				)}
			</CommonWrapper>
		</>
	);
}
