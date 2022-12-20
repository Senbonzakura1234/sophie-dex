import type { COLOR, Effect, Item, MergeTrait, RelatedCategories, Trait, TRAIT_CATEGORY } from '@prisma/client';
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
	SetSelectOptionItem,
} from '.';

export type ClassNameProps = { className?: string };
export type ChildrenProps = { children?: ReactNode };
export type RefProps<E> = { refObject: RefObject<E> };
export type PageNameProps = { pageName: PageName };

export type RecordProps<T> = { record: T };

export type FadeWrapperProps = { children: ReactNode; show: boolean; appear?: boolean; isTransForm?: boolean };

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
} & PageNameProps;

export type ApplyFilterProps = { filterData: FilterData; isCanApplyFilter: boolean };

export type SelectFilterProps = {
	filterData: FilterData;
	setFilterData: SetFilterData;
};

export type ColorFilterProps = SelectFilterProps & PageNameProps;
export type RelatedCategoryFilterProps = SelectFilterProps & PageNameProps;
export type TraitCategoryFilterProps = SelectFilterProps & PageNameProps;

export type PaginateProps = {
	page: number;
	totalPage: number;
	isCanGoToPage: boolean;
	goToPage: GoToPage;
	setGoToPage: SetGoToPage;
};

export type ResetFilterProps = {
	setFilterData: SetFilterData;
	setGoToPage: SetGoToPage;
};

export type ColorProps = { color: COLOR };

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

export type DetailLayoutProps = DefaultLayoutProps & { extraHead?: ReactNode } & ErrorResultProps;
export type ListLayoutProps = DefaultLayoutProps & { filterControl?: ReactNode } & ErrorResultProps;
export type RootLayoutProps = ChildrenProps;

export type PageTitleProps = PageNameProps;

export type SearchInputProps = PageNameProps;

export type RecordHeadProps = { name: string; id: string; isCurrentRecord: boolean; pathname: string };

export type ScrollToTopProps = {
	scrollableBottomReached: boolean;
	scrollPosition: number;
} & RefProps<HTMLDivElement>;

export type ScrollWrapperProps = ChildrenProps & ClassNameProps & RefProps<HTMLDivElement>;

export type ListPlaceHolderProps = { limit: number };

export type TraitCategoriesProps = {
	traitCategories: TRAIT_CATEGORY[];
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
