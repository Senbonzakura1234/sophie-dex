import ProfileInfo from '@components/common/static/ProfileInfo';
import SuspenseComponent from '@components/layout/static/SuspenseComponent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { APP_NAME } from '@root/constants/common';
import type { APIResult } from '@root/types/common';
import { APIError } from '@root/types/common';
import type { PageProps } from '@root/types/common/props';
import { tryCatchHandler } from '@root/utils/common';
import { generateGenericMetadata } from '@root/utils/server/database';
import { getApiServerCtx } from '@root/utils/server/trpc';
import type { Metadata, ResolvingMetadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata(
	{ searchParams }: Readonly<PageProps>,
	parent: ResolvingMetadata
): Promise<Metadata> {
	return generateGenericMetadata(parent, { title: `${APP_NAME} | Profile` }, searchParams);
}

const getReadmeProfile = async () => {
	const ApiServerCtx = await getApiServerCtx();

	const { data, error, isSuccess } = await tryCatchHandler(ApiServerCtx.user.getReadmeProfile.fetch(), {
		operationCode: 'getReadmeProfile.fetch',
		suppressLog: true
	});

	if (isSuccess) return data;

	if (error instanceof APIError)
		return { error, isSuccess: false as const, result: null } satisfies Awaited<APIResult>;

	throw error;
};

export default async function ProfilePage() {
	const resolvedProps = await getReadmeProfile();

	return (
		<Suspense fallback={<RecordPlaceholder className='mx-auto min-h-[427.5px] w-full max-w-4xl' />}>
			<SuspenseComponent resolvedProps={resolvedProps} ChildComponent={ProfileInfo} showErrorContent />
		</Suspense>
	);
}
