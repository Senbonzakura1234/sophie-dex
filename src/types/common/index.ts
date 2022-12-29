import type { CATEGORY, COLOR } from '@prisma/client';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

export const PageName = { EFFECT: 'Effect', ITEM: 'Item', TRAIT: 'Trait', HOME: 'Atelier Dex' } as const;

export type PageName = typeof PageName[keyof typeof PageName];

export type SelectOptionItem<V> = { value: V; label?: ReactNode; icon?: ReactNode };
export type SetSelectOptionItem<V> = Dispatch<SetStateAction<SelectOptionItem<V>>>;

export type CateSelected = SelectOptionItem<CATEGORY | null>;
export type ColorSelected = SelectOptionItem<COLOR | null>;
export type GoToPage = SelectOptionItem<number | null>;

export type SearchInput = string | null;
export type SetSearchInput = Dispatch<SetStateAction<SearchInput>>;
