import type { SearchQuery } from '@root/types/common/zod';
import type { ModuleIdEnum } from '@root/types/common/zod/generic';
import type { ListMetaData } from '@root/types/model';
import { ApiClientCtx } from '@root/utils/client/trpc';
import type { QueryObserverResult } from '@tanstack/react-query';
import type { UseTRPCQueryOptions } from '@trpc/react-query/shared';

type ListUseQueryFn = (
	searchQuery: SearchQuery,
	options: UseTRPCQueryOptions<unknown, ListMetaData, unknown>
) => QueryObserverResult<ListMetaData>;

type Props = { moduleId: ModuleIdEnum; searchQuery: SearchQuery };

export function useListQueryMeta({ moduleId, searchQuery }: Props): ListMetaData {
	const { data, status } = (ApiClientCtx[moduleId].getAll.useQuery as ListUseQueryFn)(searchQuery, {
		notifyOnChangeProps: ['data', 'error']
	});

	if (status !== 'success') return { totalPage: 0, totalRecord: 0 };

	return data;
}
