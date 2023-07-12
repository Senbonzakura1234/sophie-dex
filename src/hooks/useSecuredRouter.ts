import type { ModuleIdEnum, SearchQuery } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import { parseQuery } from '@root/utils/common';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

type UseSecuredRouter = () => {
	securedQuery: Partial<SearchQuery>;
	updateQuery: (nextQuery: Partial<SearchQuery>, moduleId: ModuleIdEnum) => void;
	resetQuery: () => void;
};

export const useSecuredRouter: UseSecuredRouter = () => {
	const { query, push } = useRouter();

	const securedQuery: Partial<SearchQuery> = useMemo(() => {
		const result = searchQueryValidator.safeParse(query);

		return result.success ? result.data : {};
	}, [query]);

	const updateQuery = useCallback(
		(nextQuery: Partial<SearchQuery>, moduleId: ModuleIdEnum) =>
			push({ pathname: `/${moduleId}`, query: parseQuery({ ...securedQuery, page: null, ...nextQuery }) }),
		[push, securedQuery],
	);

	const resetQuery = useCallback(() => push({ query: {} }), [push]);

	return { securedQuery, updateQuery, resetQuery };
};
