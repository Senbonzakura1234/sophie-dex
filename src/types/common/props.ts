import type { COLOR, Effect, Item, ItemCategories, MergeTrait, Trait, TRAIT_CATEGORY } from '@prisma/client';
import type { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';

import type { FilterData, PageName, SelectOptionItem, SetFilterData } from '.';

export type ClassNameProps = { className?: string };
export type ChildrenProps = { children?: ReactNode };
export type RefProps<E> = { refObject: RefObject<E> };
export type PageNameProps = { pageName: PageName };

export type RecordProps<T> = { record: T };

export type FadeWrapperProps = { children: ReactNode; show: boolean; appear?: boolean; isTransForm?: boolean };

export type CircleDividerProps = ClassNameProps;

export type EffectRecordProps = RecordProps<Effect>;
export type ItemRecordProps = RecordProps<Item>;
export type TraitRecordProps = RecordProps<Trait>;

export type FilterControlProps = {
	page: string;
	totalPage: number;
	limit: string;
	totalRecord: number;
} & PageNameProps;

export type ApplyFilterProps = { filterData: FilterData; isCanApplyFilter: boolean };

export type SelectFilterProps = {
	filterData: FilterData;
	setFilterData: SetFilterData;
};

export type ColorFilterProps = SelectFilterProps;
export type ItemCategoryFilterProps = SelectFilterProps;
export type TraitCategoryFilterProps = SelectFilterProps;

export type PaginateProps = {
	page: number;
	totalPage: number;
	isCanGoToPage: boolean;
	goToPage: SelectOptionItem<string | null>;
	setGoToPage: Dispatch<SetStateAction<SelectOptionItem<string | null>>>;
};

export type ResetFilterProps = {
	setFilterData: SetFilterData;
	setGoToPage: Dispatch<SetStateAction<SelectOptionItem<string | null>>>;
};

export type ColorProps = { color: COLOR };

export type REDProps = ColorProps;
export type BLUEProps = ColorProps;
export type GREENProps = ColorProps;
export type YELLOWProps = ColorProps;
export type WHITEProps = ColorProps;
export type NONEProps = ColorProps;

export type ItemCategoriesProps = { itemCategories: ItemCategories[] };

export type DefaultLayoutProps = ChildrenProps & PageNameProps;

export type DetailLayoutProps = DefaultLayoutProps & { extraHead?: ReactNode };
export type ListLayoutProps = DefaultLayoutProps & { filterControl?: ReactNode };
export type RootLayoutProps = ChildrenProps;

export type PageTitleProps = PageNameProps;

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
	setValue: Dispatch<SetStateAction<SelectOptionItem<V>>>;
	withIcon?: boolean;
	useCustomIcon?: boolean;
	useAtelierFont?: boolean;
} & ClassNameProps;
