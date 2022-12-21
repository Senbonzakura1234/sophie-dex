import type { CATEGORY, COLOR, RELATED_CATEGORY } from '@prisma/client';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

export const PageName = {
	EFFECT: 'Effect',
	ITEM: 'Item',
	TRAIT: 'Trait',
	HOME: 'Atelier Dex',
} as const;

export type PageName = typeof PageName[keyof typeof PageName];

export type SelectOptionItem<V> = { value: V; label?: ReactNode; icon?: ReactNode };
export type SetSelectOptionItem<V> = Dispatch<SetStateAction<SelectOptionItem<V>>>;

export type cateSelected = SelectOptionItem<CATEGORY | null>;
export type ColorSelected = SelectOptionItem<COLOR | null>;
export type RelatedCateSelected = SelectOptionItem<RELATED_CATEGORY | null>;

export type FilterData = {
	cateSelected: cateSelected;
	colorSelected: ColorSelected;
	relatedCateSelected: RelatedCateSelected;
};

export type SetFilterData = {
	setCateSelected: SetSelectOptionItem<CATEGORY | null>;
	setColorSelected: SetSelectOptionItem<COLOR | null>;
	setrelatedCateSelected: SetSelectOptionItem<RELATED_CATEGORY | null>;
};

export type GoToPage = SelectOptionItem<number | null>;
export type SetGoToPage = Dispatch<SetStateAction<GoToPage>>;
