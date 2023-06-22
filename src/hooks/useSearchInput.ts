import type { SearchInput, SetSearchInput } from '@root/types/common';
import { useEffect, useState } from 'react';

import type { TableEnum } from '@root/types/common/zod';
import { useSearchQuery } from './useSecuredRouter';

type UseSearchInput = (moduleId: TableEnum) => {
	searchInput: string;
	setSearchValue: SetSearchInput;
	isSearchValueValid: boolean;
	performSearch: () => void;
	resetSearch: () => void;
};

export const useSearchInput: UseSearchInput = moduleId => {
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
		performSearch: () => updateQuery({ search: searchValue }, moduleId),
		resetSearch: () => {
			setSearchValue(null);
			if (searchValue === securedQuery.search) updateQuery({ search: null }, moduleId);
		},
	};
};
