import type { UseIdQuery, UseSearchQuery } from '@root/types/common/hook';
import type { IdQuery, SearchQuery } from '@root/types/common/zod';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { parseSecuredQuery } from '@root/utils/client';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

export const useSearchQuery: UseSearchQuery = () => {
	const { query, isReady, push, pathname } = useRouter();

	const securedQuery: Partial<SearchQuery> = useMemo(() => {
		const result = searchQueryValidator.safeParse(query);

		return result.success ? result.data : {};
	}, [query]);

	const updateQuery = useCallback(
		(nextQuery: Partial<SearchQuery>) => {
			const parseQuery = parseSecuredQuery({ ...securedQuery, ...nextQuery });

			if (isReady) push(`${pathname.replaceAll('[id]', '')}${parseQuery}`, undefined, {});
		},
		[isReady, push, pathname, securedQuery],
	);

	const resetQuery = useCallback(() => {
		if (isReady) push(`${pathname.replaceAll('[id]', '')}`, undefined, {});
	}, [isReady, pathname, push]);

	return { securedQuery, isReady, updateQuery, resetQuery };
};

export const useIdQuery: UseIdQuery = () => {
	const { query, isReady, pathname } = useRouter();

	const securedIdQuery: Partial<IdQuery> = useMemo(() => {
		const result = idQueryValidator.safeParse(query);

		return result.success ? query : {};
	}, [query]);

	return { securedIdQuery, isReady, pathname: pathname.replaceAll('/[id]', '') };
};
