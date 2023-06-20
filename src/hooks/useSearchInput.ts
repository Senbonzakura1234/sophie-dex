import type { SearchInput, SetSearchInput } from '@root/types/common';
import { useEffect, useState } from 'react';

import { useSearchQuery } from './useSecuredRouter';

type UseSearchInput = () => {
	searchInput: string;
	setSearchValue: SetSearchInput;
	isSearchValueValid: boolean;
	performSearch: () => void;
	resetSearch: () => void;
};

export const useSearchInput: UseSearchInput = () => {
	const { securedQuery, updateQuery } = useSearchQuery();

	const defaultSearchValue = securedQuery.search ?? null;
	const [searchValue, setSearchValue] = useState<SearchInput>(defaultSearchValue);

	const searchInput = searchValue || '';

	useEffect(() => {
		setSearchValue(defaultSearchValue);
	}, [defaultSearchValue]);

	return {
		searchInput,
		setSearchValue,
		isSearchValueValid: searchInput.length > 0,
		performSearch: () => updateQuery({ search: searchValue }),
		resetSearch: () => {
			setSearchValue(null);
			if (searchValue === securedQuery.search) updateQuery({ search: null });
		},
	};
};
