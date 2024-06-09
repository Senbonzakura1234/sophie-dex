import type { SearchQuery } from '@root/types/common/zod';
import { queryToParamsString } from '@root/utils/common';
import { useRouter } from 'next/navigation';
import { useModuleId } from './useModuleId';
import { useSearchQuery } from './useSearchQuery';

export const useUpdateQuery = () => {
	const { moduleId } = useModuleId();
	const { searchQuery } = useSearchQuery();

	const { push } = useRouter();

	const updateQuery = (nextQuery: Partial<SearchQuery>) => {
		if (typeof moduleId === 'undefined') return;
		push(`/${moduleId}${queryToParamsString({ ...searchQuery, page: null, ...nextQuery })}`);
	};

	return { searchQuery, moduleId, updateQuery };
};
