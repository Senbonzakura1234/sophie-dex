import type { ModuleIdEnum, SearchQuery } from '@root/types/common/zod';
import { parseQuery } from '@root/utils/common';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useModuleId } from './useModuleId';

type UseSearchQuery = () => {
	isReady: boolean;
	moduleId: ModuleIdEnum | undefined;
	push: NextRouter['push'];
	searchQuery: Partial<SearchQuery>;
};

export const useSearchQuery: UseSearchQuery = () => {
	const { push, query, isReady } = useRouter();

	const moduleId = useModuleId();

	delete query['id'];

	return { isReady, moduleId, push, searchQuery: query as Partial<SearchQuery> };
};

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
