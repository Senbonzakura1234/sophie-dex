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

export type FilterData = {
	goToPage: SelectOptionItem<string | null>;
	traitCateSelected: SelectOptionItem<TRAIT_CATEGORY | null>;
	colorSelected: SelectOptionItem<COLOR | null>;
	itemCateSelected: SelectOptionItem<ITEM_CATEGORY | null>;
};

export type SetFilterData = {
	setGoToPage: Dispatch<SetStateAction<SelectOptionItem<string | null>>>;
	setTraitCateSelected: Dispatch<SetStateAction<SelectOptionItem<TRAIT_CATEGORY | null>>>;
	setColorSelected: Dispatch<SetStateAction<SelectOptionItem<COLOR | null>>>;
	setItemCateSelected: Dispatch<SetStateAction<SelectOptionItem<ITEM_CATEGORY | null>>>;
};
