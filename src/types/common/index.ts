// eslint-disable-next-line simple-import-sort/imports
import type {
	COLOR,
	Effect,
	Item,
	ItemCategories,
	ITEM_CATEGORY,
	MergeTrait,
	Trait,
	TRAIT_CATEGORY,
} from '@prisma/client';
import type { Dispatch, ReactNode, RefObject, SetStateAction } from 'react';

export const PageName = {
	EFFECT: 'Effect',
	ITEM: 'Item',
	TRAIT: 'Trait',
	HOME: 'Atelier Dex',
} as const;

export type PageName = typeof PageName[keyof typeof PageName];

export type SelectOptionItem<V> = { value: V; label?: ReactNode; icon?: ReactNode };

export type FilterData = {
	traitCateSelected: SelectOptionItem<TRAIT_CATEGORY | null>;
	colorSelected: SelectOptionItem<COLOR | null>;
	itemCateSelected: SelectOptionItem<ITEM_CATEGORY | null>;
};

export type SetFilterData = {
	setTraitCateSelected: Dispatch<SetStateAction<SelectOptionItem<TRAIT_CATEGORY | null>>>;
	setColorSelected: Dispatch<SetStateAction<SelectOptionItem<COLOR | null>>>;
	setItemCateSelected: Dispatch<SetStateAction<SelectOptionItem<ITEM_CATEGORY | null>>>;
};

export type ClassNameProps = { className?: string };
export type ChildrenProps = { children?: ReactNode };
export type RefProps<E> = { ref: RefObject<E> };
export type PageNameProps = { pageName: PageName };

export type RecordProps<T> = { record: T };

export type FadeWrapperProps = { children: ReactNode; show: boolean; appear?: boolean; isTransForm?: boolean };

export type CircleDivider = ClassNameProps;

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

export type REDProp = ColorProps;
export type BLUEProp = ColorProps;
export type GREENProp = ColorProps;
export type YELLOWProp = ColorProps;
export type WHITEProp = ColorProps;
export type NONEProp = ColorProps;

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
