import type { SearchInput, SetSearchInput } from '@root/types/common';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { useSearchQuery } from './useSecuredRouter';

export const useSearchInput = (): {
	searchInput: string;
	setSearchValue: SetSearchInput;
	performSearch: () => void;
	resetSearch: () => void;
	isSearchValueValid: boolean;
} => {
	const { securedQuery, updateQuery } = useSearchQuery();

	const defaultSearchValue = useMemo(() => securedQuery.search ?? null, [securedQuery.search]);

	const [searchValue, setSearchValue] = useState<SearchInput>(defaultSearchValue);

	const searchInput = useMemo(() => searchValue || '', [searchValue]);
	const isSearchValueValid = useMemo(() => searchInput.length > 0, [searchInput.length]);

	const performSearch = useCallback(() => {
		if (isSearchValueValid) updateQuery({ search: searchValue, page: null, limit: null });
	}, [isSearchValueValid, searchValue, updateQuery]);

	const resetSearch = useCallback(() => {
		if (isSearchValueValid) {
			setSearchValue(() => null);
			updateQuery({ search: null, page: null, limit: null });
		}
	}, [isSearchValueValid, updateQuery]);

	useEffect(() => {
		setSearchValue(() => defaultSearchValue);
	}, [defaultSearchValue]);

	return { searchInput, setSearchValue, performSearch, isSearchValueValid, resetSearch };
};
