import type { SearchQuery } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const useSearchQuery = (): SearchQuery => {
	const { query } = useRouter();

	const securedQuery: SearchQuery = useMemo(() => {
		const result = searchQueryValidator.safeParse(query);
		return result.success
			? result.data
			: {
					search: null,
					page: 1,
					limit: 20,
					sortBy: 'noId',
					direction: 'asc',
					cursor: null,
					itemCategory: null,
					traitCategory: null,
					color: null,
			  };
	}, [query]);

	return securedQuery;
};
