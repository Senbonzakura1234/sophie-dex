'use client';

import ItemRecord from '@root/components/common/server/ItemRecord';
import RecordPlaceholder from '@root/components/common/server/loading/RecordPlaceholder';
import { defaultLimit } from '@root/constants';
import useDispatchContentData from '@root/hooks/useDispatchContentData';
import type { PageProps } from '@root/types/common';
import { createArray } from '@root/utils/common';
import { ApiContext } from '@root/utils/trpc';

type APIListWrapperProps = { searchParams: PageProps['searchParams'] };

export default function APIListWrapper({ searchParams }: APIListWrapperProps) {
	const { data, isSuccess, isLoading, refetch } = ApiContext.item.getAll.useQuery(searchParams);

	useDispatchContentData({ contentData: { refetch, totalPage: data?.totalPage, totalRecord: data?.totalRecord } });

	if (isLoading)
		return (
			<>
				{createArray(defaultLimit, 0).map((_, key) => (
					<RecordPlaceholder key={key} />
				))}
			</>
		);

	if (!isSuccess && !isLoading) return null;

	const { records } = data;

	return (
		<>
			{records.map(record => (
				<ItemRecord key={record.id} data={record} />
			))}
		</>
	);
}
