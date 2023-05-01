import type { SearchInput, SetSearchInput } from '@root/types/common';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { useSearchQuery } from './useSecuredRouter';

type UseSearchInput = () => {
	searchInput: string;
	setSearchValue: SetSearchInput;
	performSearch: () => void;
	resetSearch: () => void;
	isSearchValueValid: boolean;
};

export const useSearchInput: UseSearchInput = () => {
	const { securedQuery, updateQuery } = useSearchQuery();

	const defaultSearchValue = useMemo(() => securedQuery.search ?? null, [securedQuery.search]);

	const [searchValue, setSearchValue] = useState<SearchInput>(defaultSearchValue);

	const searchInput = useMemo(() => searchValue || '', [searchValue]);
	const isSearchValueValid = useMemo(() => searchInput.length > 0, [searchInput.length]);

	const performSearch = useCallback(
		() => updateQuery({ search: searchValue, page: null }),
		[searchValue, updateQuery],
	);

	const resetSearch = useCallback(() => {
		setSearchValue(() => null);
		if (searchValue === securedQuery.search) updateQuery({ search: null, page: null });
	}, [searchValue, securedQuery.search, updateQuery]);

	useEffect(() => {
		setSearchValue(() => defaultSearchValue);
	}, [defaultSearchValue]);

	return { searchInput, setSearchValue, performSearch, isSearchValueValid, resetSearch };
};
