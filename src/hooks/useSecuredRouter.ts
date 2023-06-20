import type { IdQuery, SearchQuery } from '@root/types/common/zod';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { useRouterReady } from './useRouterReady';

type UseSearchQuery = () => {
	isRouterReady: boolean;
	securedQuery: Partial<SearchQuery>;
	updateQuery: (nextQuery: Partial<SearchQuery>) => void;
	resetQuery: () => void;
};

const parseQuery = (query: Partial<SearchQuery>) => {
	for (const key in query) {
		if (!Object.prototype.hasOwnProperty.call(query, key)) continue;
		const element = query[key as keyof typeof query];
		if (!element) delete query[key as keyof typeof query];
	}

	return query;
};

export const useSearchQuery: UseSearchQuery = () => {
	const { query, isReady, push, pathname } = useRouter();

	const isRouterReady = useRouterReady(isReady);

	const securedQuery: Partial<SearchQuery> = useMemo(() => {
		const result = searchQueryValidator.safeParse(query);

		return result.success ? result.data : {};
	}, [query]);

	const updateQuery = useCallback(
		(nextQuery: Partial<SearchQuery>) => {
			if (isRouterReady)
				push({
					pathname: pathname.replaceAll('[id]', ''),
					query: parseQuery({ ...securedQuery, page: null, ...nextQuery }),
				});
		},
		[isRouterReady, push, pathname, securedQuery],
	);

	const resetQuery = useCallback(() => {
		if (isRouterReady) push({ pathname: pathname.replaceAll('[id]', ''), query: {} });
	}, [isRouterReady, pathname, push]);

	return { securedQuery, isRouterReady, updateQuery, resetQuery };
};

type UseIdQuery = () => { isRouterReady: boolean; pathname: string; securedIdQuery: Partial<IdQuery> };

export const useIdQuery: UseIdQuery = () => {
	const { query, isReady, pathname } = useRouter();

	const isRouterReady = useRouterReady(isReady);

	const securedIdQuery: Partial<IdQuery> = useMemo(() => {
		const result = idQueryValidator.safeParse(query);

		return result.success ? query : {};
	}, [query]);

	return { securedIdQuery, isRouterReady: isRouterReady, pathname: pathname.replaceAll('/[id]', '') };
};
