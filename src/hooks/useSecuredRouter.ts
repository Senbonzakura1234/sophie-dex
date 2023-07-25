import type { SearchQuery } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import { parseQuery } from '@root/utils/common';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { useModuleId } from './useModuleId';

type UseSecuredRouter = () => {
	securedQuery: Partial<SearchQuery>;
	updateQuery: (nextQuery: Partial<SearchQuery>) => void;
	resetQuery: () => void;
};

export const useSecuredRouter: UseSecuredRouter = () => {
	const { query, push } = useRouter();
	const moduleId = useModuleId();

	const securedQuery: Partial<SearchQuery> = useMemo(() => {
		const result = searchQueryValidator.safeParse(query);

		return result.success ? result.data : {};
	}, [query]);

	const updateQuery = useCallback(
		(nextQuery: Partial<SearchQuery>) => {
			if (typeof moduleId === 'undefined') return;
			push({ pathname: `/${moduleId}`, query: parseQuery({ ...securedQuery, page: null, ...nextQuery }) });
		},
		[moduleId, push, securedQuery],
	);

	const resetQuery = useCallback(() => push({ query: {} }), [push]);

	return { securedQuery, updateQuery, resetQuery };
};
