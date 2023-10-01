'use client';

import EffectRecord from '@root/components/common/server/EffectRecord';
import ErrorContent from '@root/components/layout/server/ErrorContent';
import RecordPlaceholder from '@root/components/loading/RecordPlaceholder';
import { DEFAULT_LIMIT } from '@root/constants/common';
import useDispatchContentData from '@root/hooks/useDispatchContentData';
import type { PageProps } from '@root/types/common';
import { ApiContext } from '@root/utils/client/trpc';
import { createArray } from '@root/utils/common';

type APIListWrapperProps = { searchParams: PageProps['searchParams'] };

export function APIListWrapper({ searchParams }: APIListWrapperProps) {
	const { data, isSuccess, isLoading, refetch, error, isError } = ApiContext.effect.getAll.useQuery(searchParams);

	useDispatchContentData({
		contentData: { refetch, totalPage: data?.totalPage, totalRecord: data?.totalRecord, isError },
	});

	if (isLoading)
		return (
			<>
				{createArray(DEFAULT_LIMIT, 0).map((_, key) => (
					<RecordPlaceholder key={key} />
				))}
			</>
		);

	if (!isSuccess && !isLoading) return <ErrorContent code={error.data?.code} />;

	return (
		<>
			{data.records.map(record => (
				<EffectRecord key={record.id} data={record} />
			))}
		</>
	);
}

type APIDetailWrapperProps = { params: PageProps['params'] };

export default function APIDetailWrapper({ params }: APIDetailWrapperProps) {
	const { data, isSuccess, isLoading, error } = ApiContext.effect.getOne.useQuery(params);

	if (isLoading) return <RecordPlaceholder className='min-h-[20rem]' />;

	if (!isSuccess && !isLoading) return <ErrorContent code={error.data?.code} />;

	return <EffectRecord data={data} currentId={params.id} />;
}
