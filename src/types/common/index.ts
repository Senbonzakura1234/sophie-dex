import type { COLOR, ITEM_CATEGORY, TRAIT_CATEGORY } from '@prisma/client';
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

export type TraitCateSelected = SelectOptionItem<TRAIT_CATEGORY | null>;
export type ColorSelected = SelectOptionItem<COLOR | null>;
export type ItemCateSelected = SelectOptionItem<ITEM_CATEGORY | null>;

export type FilterData = {
	traitCateSelected: TraitCateSelected;
	colorSelected: ColorSelected;
	itemCateSelected: ItemCateSelected;
};

export type SetFilterData = {
	setTraitCateSelected: SetSelectOptionItem<TRAIT_CATEGORY | null>;
	setColorSelected: SetSelectOptionItem<COLOR | null>;
	setItemCateSelected: SetSelectOptionItem<ITEM_CATEGORY | null>;
};

export type GoToPage = SelectOptionItem<number | null>;
export type SetGoToPage = Dispatch<SetStateAction<GoToPage>>;
