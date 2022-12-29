import type { SetSearchInput } from '.';
import type { IdQuery, SearchQuery } from './zod';

export type UseSearchInput = () => {
	searchInput: string;
	setSearchValue: SetSearchInput;
	performSearch: () => void;
	resetSearch: () => void;
	isSearchValueValid: boolean;
};

export type UseSearchQuery = () => {
	isReady: boolean;
	securedQuery: Partial<SearchQuery>;
	updateQuery: (nextQuery: Partial<SearchQuery>) => void;
	resetQuery: () => void;
};

export type UseIdQuery = () => { isReady: boolean; pathname: string; securedIdQuery: Partial<IdQuery> };
