import type { ImprovedOmit } from '@root/types/common';
import type { ModuleIdEnum, SearchQuery } from '@root/types/common/zod';
import type { ListMetaData } from '@root/types/model';
import { ApiClientCtx } from '@root/utils/client/trpc';
import type { QueryObserverResult } from '@tanstack/react-query';
import type { UseTRPCQueryOptions } from '@trpc/react-query/shared';
import { useEffect, useState } from 'react';

type ListUseQueryFn = (
	searchQuery: SearchQuery,
	options: UseTRPCQueryOptions<unknown, ListMetaData, unknown>
) => QueryObserverResult<ListMetaData>;

type Props = { moduleId: ModuleIdEnum; searchQuery: SearchQuery };

export function useListQueryMeta({ moduleId, searchQuery }: Props) {
	const [meta, setMeta] = useState<ImprovedOmit<ListMetaData, 'search'>>({ totalPage: 0, totalRecord: 0 });

	const { data, status } = (ApiClientCtx[moduleId].getAll.useQuery as ListUseQueryFn)(searchQuery, {
		notifyOnChangeProps: ['data', 'error']
	});

	useEffect(() => {
		if (status === 'pending') return;
		setMeta({ totalPage: data?.totalPage || 0, totalRecord: data?.totalRecord || 0 });
	}, [data?.totalPage, data?.totalRecord, status]);

	return { meta, status };
}
