import type { FilterData, GoToPage, SetFilterData, SetGoToPage, SetSearchInput } from '.';
import type { IdQuery, SearchQuery } from './zod';

export type UseFilterControl = () => {
	filterData: FilterData;
	setFilterData: SetFilterData;
	isCanApplyFilter: boolean;
};

export type UseGoToPageControl = () => {
	goToPage: GoToPage;
	setGoToPage: SetGoToPage;
};

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

export type UseIdQuery = () => {
	isReady: boolean;
	pathname: string;
	securedIdQuery: Partial<IdQuery>;
};
