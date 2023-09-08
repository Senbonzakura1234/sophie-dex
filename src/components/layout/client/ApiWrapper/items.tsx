'use client';

import DispatchListMeta from '@root/components/common/client/DispatchListMeta';
import ItemRecord from '@root/components/common/server/ItemRecord';
import RecordPlaceholder from '@root/components/common/server/loading/RecordPlaceholder';
import { defaultLimit } from '@root/constants';
import type { PageProps } from '@root/types/common';
import { createArray } from '@root/utils/common';
import { ApiContext } from '@root/utils/trpc';

type APIListWrapperProps = { searchParams: PageProps['searchParams'] };

export default function APIListWrapper({ searchParams }: APIListWrapperProps) {
	const { data, isSuccess, isLoading } = ApiContext.item.getAll.useQuery(searchParams);

	if (isLoading)
		return (
			<>
				{createArray(defaultLimit, 0).map((_, key) => (
					<RecordPlaceholder key={key} />
				))}
			</>
		);

	if (!isSuccess && !isLoading) return null;

	const { records, ...listMeta } = data;

	return (
		<>
			<DispatchListMeta listMeta={listMeta} />

			{records.map(record => (
				<ItemRecord key={record.id} data={record} />
			))}
		</>
	);
}