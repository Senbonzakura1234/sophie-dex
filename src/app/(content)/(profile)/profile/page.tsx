import ProfileInfo from '@components/common/static/ProfileInfo';
import SuspenseComponent from '@components/layout/static/SuspenseComponent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { getUserRecordQuery } from '@root/server/database/postgresql';
import { APIError, type APIResult, type PageProps } from '@root/types/common';
import type { GithubUserInfo } from '@root/types/common/zod';
import { tryCatchHandler } from '@root/utils/common';
import { env } from '@root/utils/common/env.mjs';
import { generateGenericMetadata } from '@root/utils/server/database';
import type { Metadata, ResolvingMetadata } from 'next';
import { getServerSession } from 'next-auth';
import { Suspense } from 'react';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateGenericMetadata(parent, { title: `${env.NEXT_PUBLIC_APP_NAME} | Profile` }, searchParams);
}

const getProfile = async (): Promise<APIResult<GithubUserInfo>> => {
	const session = await getServerSession();

	if (!session) return { isSuccess: false, result: null, error: new APIError({ code: 'UNAUTHORIZED' }) };

	const username = session.user?.name || undefined;

	if (!username) return { isSuccess: false, result: null, error: new APIError({ code: 'UNAUTHORIZED' }) };

	const { data, isSuccess } = await tryCatchHandler(getUserRecordQuery.execute({ username }));

	if (!isSuccess) return { isSuccess: false, result: null, error: new APIError({ code: 'INTERNAL_SERVER_ERROR' }) };

	if (!data)
		return {
			isSuccess: false,
			result: null,
			error: new APIError({ code: 'NOT_FOUND', message: `User ${username} Not Found` }),
		};

	return { isSuccess: true, result: data.githubProfile, error: null };
};

export default function Profile() {
	return (
		<Suspense fallback={<RecordPlaceholder className='mx-auto min-h-80 w-full max-w-lg' />}>
			<SuspenseComponent promiseData={getProfile()} ChildComponent={ProfileInfo} showErrorContent />
		</Suspense>
	);
}
