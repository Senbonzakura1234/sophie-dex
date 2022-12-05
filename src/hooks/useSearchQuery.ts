import type { ClientSearchQuery } from '@root/types/common/zod';
import { clientSearchQueryValidator } from '@root/types/common/zod';
import { parseObjToParam } from '@root/utils/helper';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';

export const useSearchQuery = (): {
	isReady: boolean;
	securedQuery: ClientSearchQuery;
	updateQuery: (nextQuery: Partial<ClientSearchQuery>) => void;
} => {
	const { query, isReady, push, pathname } = useRouter();

	const securedQuery: ClientSearchQuery = useMemo(() => {
		const result = clientSearchQueryValidator.safeParse(query);

		console.log({ result });

		return result.success
			? result.data
			: {
					search: null,
					sortBy: 'noId',
					direction: 'asc',
					itemCategory: null,
					traitCategory: null,
					color: null,
					cursor: null,
					limit: 10,
					page: 1,
			  };
	}, [query]);

	const updateQuery = useCallback(
		(nextQuery: Partial<ClientSearchQuery>) => push(`${pathname}?${parseObjToParam(nextQuery)}`, undefined, {}),
		[push, pathname],
	);

	return { securedQuery, isReady, updateQuery };
};
