import type { CommonRecord } from '@root/server/postgresql/schema';
import type { SearchQuery } from '@root/types/common/zod';
import type { ModuleIdEnum } from '@root/types/common/zod/generic';
import type { ListRecord } from '@root/types/model';
import { ApiClientCtx } from '@root/utils/client/trpc';
import type { QueryObserverResult } from '@tanstack/react-query';
import type { TRPCClientErrorBase } from '@trpc/client';
import type { UseTRPCQueryOptions } from '@trpc/react-query/shared';
import type { DefaultErrorShape } from '@trpc/server/unstable-core-do-not-import';

type UseListQueryFn = (
	searchQuery: SearchQuery,
	options: UseTRPCQueryOptions<unknown, ListRecord<CommonRecord>, TRPCClientErrorBase<DefaultErrorShape>>
) => QueryObserverResult<ListRecord<CommonRecord>, TRPCClientErrorBase<DefaultErrorShape>>;

type Props = Readonly<{ moduleId: ModuleIdEnum; searchQuery: SearchQuery }>;

export function useListQuery({ moduleId, searchQuery }: Props) {
	return (ApiClientCtx[moduleId].getAll.useQuery as UseListQueryFn)(searchQuery, {
		notifyOnChangeProps: ['data', 'error']
	});
}
