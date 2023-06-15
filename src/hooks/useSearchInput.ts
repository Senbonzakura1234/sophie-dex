import type { SearchInput, SetSearchInput } from '@root/types/common';
import { useEffect, useState } from 'react';

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

	const defaultSearchValue = securedQuery.search ?? null;
	const [searchValue, setSearchValue] = useState<SearchInput>(defaultSearchValue);

	const searchInput = searchValue || '';
	const isSearchValueValid = searchInput.length > 0;

	const performSearch = () => updateQuery({ search: searchValue, page: null });
	const resetSearch = () => {
		setSearchValue(() => null);
		if (searchValue === securedQuery.search) updateQuery({ search: null, page: null });
	};

	useEffect(() => {
		setSearchValue(() => defaultSearchValue);
	}, [defaultSearchValue]);

	return { searchInput, setSearchValue, performSearch, isSearchValueValid, resetSearch };
};
