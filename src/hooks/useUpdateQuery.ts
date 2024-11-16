import { useModuleId } from '@root/hooks/useModuleId';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { SearchQuery } from '@root/types/common/zod';
import { queryToParamsString } from '@root/utils/common';
import { useRouter } from 'next/navigation';

export const useUpdateQuery = () => {
	const { moduleId } = useModuleId();
	const { searchQuery } = useSearchQuery();

	const { push } = useRouter();

	const updateQuery = (nextQuery: Partial<SearchQuery>) => {
		if (moduleId)
			void push(`/${moduleId}${queryToParamsString({ ...searchQuery, page: null, ...nextQuery })}`, {
				scroll: false
			});
	};

	return { searchQuery, moduleId, updateQuery };
};
