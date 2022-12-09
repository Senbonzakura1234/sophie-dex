import type { IdQuery, SearchQuery } from '@root/types/common/zod';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
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
		(nextQuery: Partial<SearchQuery>) => {
			console.log(pathname);

			if (isReady)
				push(
					`${pathname.replaceAll('[id]', '')}?${parseObjToParam({ ...securedQuery, ...nextQuery })}`,
					undefined,
					{},
				);
		},
		[isReady, push, pathname, securedQuery],
	);

	return { securedQuery, isReady, updateQuery };
};

export const useIdQuery = (): {
	isReady: boolean;
	securedIdQuery: Partial<IdQuery>;
	updateIdQuery: (nextQuery: Partial<IdQuery>) => void;
} => {
	const { query, isReady, push, pathname } = useRouter();

	const securedIdQuery: Partial<IdQuery> = useMemo(() => {
		const result = idQueryValidator.safeParse(query);

		return result.success ? query : {};
	}, [query]);

	const updateIdQuery = useCallback(
		(nextId: Partial<IdQuery>) => {
			if (isReady)
				push({
					pathname: pathname.includes('[id]') ? pathname : `${pathname}/[id]`,
					query: { id: nextId.id },
				});
		},
		[isReady, push, pathname],
	);

	return { securedIdQuery, isReady, updateIdQuery };
};
