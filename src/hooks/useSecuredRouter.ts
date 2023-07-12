import type { ModuleIdEnum, SearchQuery } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import { parseQuery } from '@root/utils/common';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { useRouterReady } from './useRouterReady';

type UseSearchQuery = () => {
	isRouterReady: boolean;
	securedQuery: Partial<SearchQuery>;
	updateQuery: (nextQuery: Partial<SearchQuery>, moduleId: ModuleIdEnum) => void;
	resetQuery: () => void;
};

export const useSearchQuery: UseSearchQuery = () => {
	const { query, isReady, push } = useRouter();

	const isRouterReady = useRouterReady(isReady);

	const securedQuery: Partial<SearchQuery> = useMemo(() => {
		const result = searchQueryValidator.safeParse(query);

		return result.success ? result.data : {};
	}, [query]);

	const updateQuery = useCallback(
		(nextQuery: Partial<SearchQuery>, moduleId: ModuleIdEnum) => {
			if (isRouterReady)
				push({ pathname: `/${moduleId}`, query: parseQuery({ ...securedQuery, page: null, ...nextQuery }) });
		},
		[isRouterReady, push, securedQuery],
	);

	const resetQuery = useCallback(() => {
		if (isRouterReady) push({ query: {} });
	}, [isRouterReady, push]);

	return { securedQuery, isRouterReady, updateQuery, resetQuery };
};
