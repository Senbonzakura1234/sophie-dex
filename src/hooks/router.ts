import type { ModuleIdEnum, SearchQuery } from '@root/types/common/zod';
import { parseQuery } from '@root/utils/common';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useModuleId } from './useModuleId';

type UseSearchQuery = () => { isReady: boolean; searchQuery: Partial<SearchQuery>; push: NextRouter['push'] };

export const useSearchQuery: UseSearchQuery = () => {
	const { push, query, isReady } = useRouter();

	return { isReady, searchQuery: query as Partial<SearchQuery>, push };
};

type UseUpdateQuery = () => {
	searchQuery: Partial<SearchQuery>;
	moduleId: ModuleIdEnum | undefined;
	updateQuery: (nextQuery: Partial<SearchQuery>) => void;
};

export const useUpdateQuery: UseUpdateQuery = () => {
	const { searchQuery, push } = useSearchQuery();
	const moduleId = useModuleId();

	const updateQuery = useCallback(
		(nextQuery: Partial<SearchQuery>) => {
			if (typeof moduleId === 'undefined') return;
			push({ pathname: `/${moduleId}`, query: parseQuery({ ...searchQuery, page: null, ...nextQuery }) });
		},
		[moduleId, push, searchQuery],
	);

	return { searchQuery, moduleId, updateQuery };
};
