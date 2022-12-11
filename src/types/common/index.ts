import type { TRAIT_CATEGORY } from '@prisma/client';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

export const PageName = {
	EFFECT: 'Effect',
	ITEM: 'Item',
	TRAIT: 'Trait',
} as const;

export type PageName = typeof PageName[keyof typeof PageName];

export type SelectOptionItem<V> = { value: V; label?: ReactNode; icon?: ReactNode };

export type FilterData = {
	goToPage: SelectOptionItem<string>;
	traitCateSelected: SelectOptionItem<TRAIT_CATEGORY | null>;
};

export type SetFilterData = {
	setGoToPage: Dispatch<SetStateAction<SelectOptionItem<string>>>;
	setTraitCateSelected: Dispatch<SetStateAction<SelectOptionItem<TRAIT_CATEGORY | null>>>;
};
