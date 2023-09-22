'use client';

import TraitRecord from '@root/components/common/server/TraitRecord';
import RecordPlaceholder from '@root/components/common/server/loading/RecordPlaceholder';
import ErrorContent from '@root/components/layout/server/ErrorContent';
import { defaultLimit } from '@root/constants';
import useDispatchContentData from '@root/hooks/useDispatchContentData';
import type { PageProps } from '@root/types/common';
import { createArray } from '@root/utils/common';
import { ApiContext } from '@root/utils/trpc';

type APIListWrapperProps = { searchParams: PageProps['searchParams'] };

export default function APIListWrapper({ searchParams }: APIListWrapperProps) {
	const { data, isSuccess, isLoading, refetch, error, isError } = ApiContext.trait.getAll.useQuery(searchParams);

	useDispatchContentData({
		contentData: { refetch, totalPage: data?.totalPage || 0, totalRecord: data?.totalRecord || 0, isError },
	});

	if (isLoading)
		return (
			<>
				{createArray(defaultLimit, 0).map((_, key) => (
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
