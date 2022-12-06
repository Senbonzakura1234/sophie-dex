import type { SearchQuery } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import { parseObjToParam } from '@root/utils/helper';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

export const useSearchQuery = (): {
	isReady: boolean;
	securedQuery: Partial<SearchQuery>;
	updateQuery: (nextQuery: Partial<SearchQuery>) => void;
} => {
	const { query, isReady, push, pathname } = useRouter();

	const securedQuery: Partial<SearchQuery> = useMemo(() => {
		const result = searchQueryValidator.safeParse(query);

		return result.success ? query : {};
	}, [query]);

	const updateQuery = useCallback(
		(nextQuery: Partial<SearchQuery>) =>
			push(`${pathname}?${parseObjToParam({ ...securedQuery, ...nextQuery })}`, undefined, {}),
		[push, pathname, securedQuery],
	);

	return { securedQuery, isReady, updateQuery };
};
