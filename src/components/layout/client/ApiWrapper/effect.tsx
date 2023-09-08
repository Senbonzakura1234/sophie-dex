'use client';

import EffectRecord from '@root/components/common/server/EffectRecord';
import RecordPlaceholder from '@root/components/common/server/loading/RecordPlaceholder';
import ErrorContent from '@root/components/layout/server/ErrorContent';
import type { PageProps } from '@root/types/common';
import { ApiContext } from '@root/utils/trpc';

type APISingleWrapperProps = { params: PageProps['params'] };

export default function APISingleWrapper({ params }: APISingleWrapperProps) {
	const { data, isSuccess, isLoading, error } = ApiContext.effect.getOne.useQuery(params);

	if (isLoading) return <RecordPlaceholder />;

	if (!isSuccess && !isLoading) return <ErrorContent type={error.data?.code} />;

	return <EffectRecord data={data} currentId={params.id} />;
}
