import type { SearchQuery } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import { parseObjToParam } from '@root/utils/helper';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

export const useSearchQuery = (): {
	isReady: boolean;
	securedQuery: SearchQuery;
	updateQuery: (nextQuery: Partial<SearchQuery>) => void;
} => {
	const { query, isReady, push, pathname } = useRouter();

	const securedQuery: SearchQuery = useMemo(() => {
		const result = searchQueryValidator.safeParse(query);

		return result.success
			? result.data
			: {
					search: null,
					sortBy: 'noId',
					direction: 'asc',
					itemCategory: null,
					traitCategory: null,
					color: null,
			  };
	}, [query]);

	const updateQuery = useCallback(
		(nextQuery: Partial<SearchQuery>) => push(`${pathname}?${parseObjToParam(nextQuery)}`, undefined, {}),
		[push, pathname],
	);

	return { securedQuery, isReady, updateQuery };
};
