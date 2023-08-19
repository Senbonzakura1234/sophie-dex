import type { ModuleIdEnum, SearchQuery } from '@root/types/common/zod';
import { parseQuery } from '@root/utils/common';
import { useCallback } from 'react';
import { useSearchQuery } from './useSearchQuery';

type UseUpdateQuery = () => {
	searchQuery: Partial<SearchQuery>;
	moduleId: ModuleIdEnum | undefined;
	updateQuery: (nextQuery: Partial<SearchQuery>) => void;
};

export const useUpdateQuery: UseUpdateQuery = () => {
	const { moduleId, push, searchQuery } = useSearchQuery();

	const updateQuery = useCallback(
		(nextQuery: Partial<SearchQuery>) => {
			if (typeof moduleId === 'undefined') return;
			push({ pathname: `/${moduleId}`, query: parseQuery({ ...searchQuery, page: null, ...nextQuery }) });
		},
		[moduleId, push, searchQuery],
	);

	return { searchQuery, moduleId, updateQuery };
};
