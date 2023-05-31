import type { Dispatch, ReactNode, SetStateAction } from 'react';
import type { TableEnum } from './zod';

export type MaybeData<TData> = { data: TData; isDataReady: true } | { data: undefined; isDataReady: false };
export type MaybeListData<TData> = { data: MaybeData<TData>[] };

export type RenderFunction<TProps> = (props: TProps) => ReactNode;
export type PageName = 'home' | Lowercase<TableEnum>;

export type SelectOptionItem<V> = { value: V; label?: ReactNode; icon?: ReactNode };
export type SetSelectOptionItem<V> = Dispatch<SetStateAction<SelectOptionItem<V>>>;

export type SearchInput = string | null;
export type SetSearchInput = Dispatch<SetStateAction<SearchInput>>;
