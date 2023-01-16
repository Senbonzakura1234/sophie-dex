import type { TABLE } from '@prisma/client';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

export type PageName = 'Home' | Capitalize<Lowercase<TABLE>>;

export type SelectOptionItem<V> = { value: V; label?: ReactNode; icon?: ReactNode };
export type SetSelectOptionItem<V> = Dispatch<SetStateAction<SelectOptionItem<V>>>;

export type SearchInput = string | null;
export type SetSearchInput = Dispatch<SetStateAction<SearchInput>>;
