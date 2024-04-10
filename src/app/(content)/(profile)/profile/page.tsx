import { postgresql } from '@root/server/database/postgresql';
import { APIError, type APIResult, type PageProps } from '@root/types/common';
import type { GithubUserInfo } from '@root/types/common/zod';
import { env } from '@root/utils/common/env.mjs';
import { generateGenericMetadata } from '@root/utils/server/database';
import type { Metadata, ResolvingMetadata } from 'next';
import { getServerSession } from 'next-auth';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateGenericMetadata(parent, { title: `${env.NEXT_PUBLIC_APP_NAME} | Profile` }, searchParams);
}

const getProfile = async (): Promise<APIResult<GithubUserInfo>> => {
	const session = await getServerSession();

	if (!session) return { isSuccess: false, result: null, error: new APIError({ code: 'UNAUTHORIZED' }) };

	const username = session.user?.name || undefined;

	if (!username) return { isSuccess: false, result: null, error: new APIError({ code: 'UNAUTHORIZED' }) };

	const user = await postgresql.query.users.findFirst({ where: (schema, { eq }) => eq(schema.username, username) });

	if (!user) return { isSuccess: false, result: null, error: new APIError({ code: 'UNAUTHORIZED' }) };

	return { isSuccess: true, result: user.githubProfile, error: null };
};

export default function Profile() {
	return null;
	// return (
	// 	<Suspense fallback={<RecordPlaceholder className='mx-auto min-h-80 w-full max-w-lg' />}>
	// 		<SuspenseComponent promiseData={getProfile()} ChildComponent={ProfileInfo} showErrorContent />
	// 	</Suspense>
	// );
}
