'use client';

import TraitRecord from '@components/common/server/TraitRecord';
import ErrorContent from '@components/layout/server/ErrorContent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { DEFAULT_LIMIT } from '@root/constants/common';
import useDispatchContentData from '@root/hooks/useDispatchContentData';
import type { PageProps } from '@root/types/common';
import { ApiClientCtx } from '@root/utils/client/trpc';
import { createArray } from '@root/utils/common';

type APIListWrapperProps = { searchParams: PageProps['searchParams'] };

export default function APIListWrapper({ searchParams }: APIListWrapperProps) {
	const { data, isSuccess, isLoading, refetch, error, isError } = ApiClientCtx.trait.getAll.useQuery(searchParams);

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
				<TraitRecord key={record.id} data={record} />
			))}
		</>
	);
}
