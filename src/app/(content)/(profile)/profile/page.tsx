import ProfileInfo from '@components/common/static/ProfileInfo';
import SuspenseComponent from '@components/layout/static/SuspenseComponent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { APP_NAME } from '@root/constants/common';
import { getProfileRecordQuery } from '@root/server/postgresql/repository/query';
import { APIError } from '@root/types/common';
import type { PageProps } from '@root/types/common/props';
import { tryCatchHandler } from '@root/utils/common';
import { getSessionResult } from '@root/utils/server';
import { generateGenericMetadata } from '@root/utils/server/database';
import { getGithubReadme } from '@root/utils/server/fetch';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
	{ searchParams }: Readonly<PageProps>,
	parent: ResolvingMetadata
): Promise<Metadata> {
	return generateGenericMetadata(parent, { title: `${APP_NAME} | Profile` }, searchParams);
}

const getReadmeProfile = async () => {
	const sessionResult = await getSessionResult();

	if (!sessionResult.isAuthenticated)
		return {
			isSuccess: false as const,
			result: null,
			error: new APIError({ code: 'UNAUTHORIZED' })
		};

	const getReadmeProfileRes = await tryCatchHandler(
		Promise.all([
			getProfileRecordQuery.execute({ login: sessionResult.session.user.name }),
			getGithubReadme(sessionResult.session)
		]),
		'getReadmeProfile.batchQuery'
	);

	if (!getReadmeProfileRes.isSuccess)
		return {
			isSuccess: false as const,
			result: null,
			error: new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Get Profile error' })
		};

	const [profile, readmeContent] = getReadmeProfileRes.data;

	if (!profile)
		return {
			isSuccess: false as const,
			result: null,
			error: new APIError({ code: 'NOT_FOUND', message: 'Profile not found' })
		};

	return { isSuccess: true as const, result: { profile, readmeContent }, error: null };
};

export default async function ProfilePage() {
	return (
		<SuspenseComponent
			promiseData={getReadmeProfile()}
			ChildComponent={ProfileInfo}
			showErrorContent
			fallback={<RecordPlaceholder className='mx-auto min-h-[580px] w-full max-w-4xl' />}
		/>
	);
}
