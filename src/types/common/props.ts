import type { CATEGORY, COLOR, Effect, Item, MergeTrait, RelatedCategories, Trait } from '@prisma/client';
import type { Maybe } from '@trpc/server';
import type { DefaultErrorData } from '@trpc/server/dist/error/formatter';
import type { ReactNode, RefObject } from 'react';

import type {
	FilterData,
	GoToPage,
	PageName,
	SelectOptionItem,
	SetFilterData,
	SetGoToPage,
	SetSearchInput,
	SetSelectOptionItem,
} from '.';

export type ClassNameProps = { className?: string };
export type ChildrenProps = { children?: ReactNode };
export type RefProps<E> = { refObject: RefObject<E> };
export type PageNameProps = { pageName: PageName };
export type IsSuccessProps = { isSuccess: boolean };
export type IsErrorProps = { isError: boolean };
export type FetchStateProps = IsErrorProps & IsSuccessProps;
export type IsPaginateOnlyProps = { isPaginateOnly?: boolean };

export type RecordProps<T> = { record: T };

export type FadeWrapperProps = {
	children: ReactNode;
	show?: boolean;
	appear?: boolean;
	isTransForm?: boolean;
};

export type BreadcrumbProps = { isShowAuthor: boolean };

export type CircleDividerProps = ClassNameProps;

export type EffectRecordProps = RecordProps<Effect>;
export type ItemRecordProps = RecordProps<Item>;
export type TraitRecordProps = RecordProps<Trait>;

export type FilterControlProps = {
	page: number;
	totalPage: number;
	limit: number;
	totalRecord: number;
} & PageNameProps &
	IsPaginateOnlyProps;

export type SortControlProps = PageNameProps & IsPaginateOnlyProps;

export type ApplyFilterProps = { filterData: FilterData; isCanApplyFilter: boolean };

export type SelectFilterProps = {
	filterData: FilterData;
	setFilterData: SetFilterData;
};

export type ColorFilterProps = SelectFilterProps & PageNameProps;
export type RelatedCategoryFilterProps = SelectFilterProps & PageNameProps;
export type CategoryFilterProps = SelectFilterProps & PageNameProps;

export type PaginateProps = {
	page: number;
	totalPage: number;
	goToPage: GoToPage;
	setGoToPage: SetGoToPage;
};

export type ResetFilterProps = {
	setFilterData: SetFilterData;
	setGoToPage: SetGoToPage;
	setSearchValue: SetSearchInput;
} & IsPaginateOnlyProps;

export type ColorProps = { color: COLOR };
export type LevelProps = { level: number };

export type REDProps = ColorProps;
export type BLUEProps = ColorProps;
export type GREENProps = ColorProps;
export type YELLOWProps = ColorProps;
export type WHITEProps = ColorProps;
export type NONEProps = ColorProps;

export type RelatedCategoriesProps = { relatedCategories: RelatedCategories[] };

export type DefaultLayoutProps = ChildrenProps & PageNameProps;

export type ErrorResultProps = {
	isError: boolean;
	errorData: Maybe<DefaultErrorData>;
	errorMessage: string | undefined;
};

export type DetailLayoutProps = DefaultLayoutProps & { extraHead?: ReactNode } & ErrorResultProps & IsSuccessProps;
export type ListLayoutProps = DefaultLayoutProps &
	ErrorResultProps &
	Omit<FilterControlProps, 'pageName' | 'isPaginateOnly'> &
	IsSuccessProps;
export type RootLayoutProps = ChildrenProps;

export type PageTitleProps = PageNameProps;

export type SearchInputProps = {
	searchInput: string;
	setSearchValue: SetSearchInput;
	performSearch: () => void;
	resetSearch: () => void;
	isSearchValueValid: boolean;
};

export type RecordWrapperProps = ChildrenProps & ClassNameProps;
export type RecordHeadProps = { name: string; id: string; isCurrentRecord: boolean; pathname: string } & PageNameProps;

export type ScrollToTopProps = {
	scrollableBottomReached: boolean;
	scrollPosition: number;
} & RefProps<HTMLDivElement>;

export type ScrollWrapperProps = ChildrenProps & ClassNameProps & RefProps<HTMLDivElement>;

export type RecordPlaceHolderProps = FetchStateProps;
export type ListPlaceHolderProps = { limit: number } & FetchStateProps;
export type FilterControlPlaceHolderProps = FetchStateProps & IsPaginateOnlyProps;

export type CategoriesProps = {
	categories: CATEGORY[];
};

export type TraitMergeListProps = { mergeFrom: MergeTrait[] };

export type SelectOptionProps<V> = {
	value: SelectOptionItem<V>;
	list: SelectOptionItem<V>[];
	setValue: SetSelectOptionItem<V>;
	withIcon?: boolean;
	useCustomIcon?: boolean;
	useAtelierFont?: boolean;
} & ClassNameProps;

export type ErrorModalProps = ErrorResultProps;
