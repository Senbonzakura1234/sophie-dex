import type {
	CATEGORY,
	COLOR,
	Effect,
	Item,
	MERGE_TRAIT,
	RECIPE_TYPE,
	RELATED_CATEGORY,
	Trait,
	TRAIT_LINK,
} from '@prisma/client';
import type { Maybe } from '@trpc/server';
import type { DefaultErrorData } from '@trpc/server/dist/error/formatter';
import type { ReactNode, RefObject } from 'react';

import type { PageName, SelectOptionItem, SetSelectOptionItem } from '.';

export type ClassNameProps = { className?: string };
export type ChildrenProps = { children?: ReactNode };
export type RefProps<E> = { refObject: RefObject<E> };
export type PageNameProps = { pageName: PageName };
export type IsSuccessProps = { isSuccess: boolean };
export type IsErrorProps = { isError: boolean };
export type FetchStateProps = IsErrorProps & IsSuccessProps;
export type IsPaginateOnlyProps = { isPaginateOnly?: boolean };

export type RecordProps<T> = { record: T };

export type FadeWrapperProps = { children: ReactNode; show?: boolean; appear?: boolean; isTransForm?: boolean };

export type BreadcrumbProps = { isShowAuthor: boolean };

export type CircleDividerProps = ClassNameProps;

export type EffectRecordProps = RecordProps<Effect>;
export type ItemRecordProps = RecordProps<Item>;
export type TraitRecordProps = RecordProps<Trait>;

export type FilterControlProps = {
	page: number;
	totalPage: number;
	totalRecord: number;
} & PageNameProps &
	IsPaginateOnlyProps;

export type SortControlProps = PageNameProps & IsPaginateOnlyProps;

export type ColorFilterProps = PageNameProps;
export type CategoryFilterProps = PageNameProps;
export type RecipeTypeFilterProps = PageNameProps;

export type PaginateProps = { page: number; totalPage: number };
export type GoToPageSelectProps = { totalPage: number };

export type ResetFilterProps = IsPaginateOnlyProps;

export type ColorProps = { color: COLOR };
export type RecipeTypeProps = { recipeType: RECIPE_TYPE };
export type RecipeIdeaProps = { recipeIdea: string };
export type DescriptionProps = { description: string };
export type LevelProps = { level: number };
export type CategoryProps = { category: CATEGORY };
export type TraitPresentProps = { traitPresent: TRAIT_LINK };

export type RelatedCategoriesProps = { relatedCategories: RELATED_CATEGORY[] };

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

export type RecordWrapperProps = ChildrenProps & ClassNameProps & Partial<ColorProps>;
export type RecordHeadProps = { name: string; id: string; isCurrentRecord: boolean; pathname: string } & PageNameProps;

export type ScrollToTopProps = { scrollableBottomReached: boolean; scrollPosition: number } & RefProps<HTMLDivElement>;

export type ScrollWrapperProps = ChildrenProps & ClassNameProps & RefProps<HTMLDivElement>;

export type RecordPlaceHolderProps = FetchStateProps & Partial<ColorProps>;
export type ListPlaceHolderProps = FetchStateProps;
export type FilterControlPlaceHolderProps = FetchStateProps & IsPaginateOnlyProps;

export type SpecialHyperLinkProps = { input: string; path: string };
export type RecipeIdeaKeyProps = { input: string };

export type CategoriesProps = { categories: CATEGORY[] };

export type TraitMergeListProps = { mergeFrom: MERGE_TRAIT[] };

export type SelectOptionProps<V> = {
	value: SelectOptionItem<V>;
	list: SelectOptionItem<V>[];
	setValue: SetSelectOptionItem<V>;
	withIcon?: boolean;
	useCustomIcon?: boolean;
	useAtelierFont?: boolean;
} & ClassNameProps;

export type ErrorModalProps = ErrorResultProps;
