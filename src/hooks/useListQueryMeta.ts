import type { SearchQuery } from '@root/types/common/zod';
import type { ModuleIdEnum } from '@root/types/common/zod/generic';
import type { ListMetaData } from '@root/types/model';
import { useListQuery } from './useListQuery';

type Props = Readonly<{ moduleId: ModuleIdEnum; searchQuery: SearchQuery }>;

export function useListQueryMeta({ moduleId, searchQuery }: Props): ListMetaData {
	const { data, status } = useListQuery({ moduleId, searchQuery });

	if (status !== 'success') return { totalPage: 0, totalRecord: 0 };

	return { totalPage: data.totalPage, totalRecord: data.totalRecord };
}
