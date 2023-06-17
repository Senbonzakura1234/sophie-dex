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

const parseSecuredQuery = (input: Record<string, number | string | null>): string => {
	const arrQuery: string[] = [];

	for (const key in input) {
		if (Object.prototype.hasOwnProperty.call(input, key)) {
			const element = input[key];
			if (element) arrQuery.push(`${key}=${element}`);
		}
	}

	return arrQuery.length > 0 ? `?${arrQuery.join('&')}` : '';
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
			const parseQuery = parseSecuredQuery({ ...securedQuery, ...nextQuery });

			if (isRouterReady) push(`${pathname.replaceAll('[id]', '')}${parseQuery}`, undefined, {});
		},
		[isRouterReady, push, pathname, securedQuery],
	);

	const resetQuery = useCallback(() => {
		if (isRouterReady) push(`${pathname.replaceAll('[id]', '')}`, undefined, {});
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
