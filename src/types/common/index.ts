import type { Dispatch, ReactNode, SetStateAction } from 'react';

export type MaybeData<TData> = { data: TData; isDataReady: true } | { data: undefined; isDataReady: false };
export type MaybeListData<TData> = { data: MaybeData<TData>[] };

export type RenderFunction<TProps> = (props: TProps) => ReactNode;

export type SelectOptionItem<V> = { value: V; label?: ReactNode; icon?: ReactNode };
export type SetSelectOptionItem<V> = Dispatch<SetStateAction<SelectOptionItem<V>>>;

export type LooseAutocomplete<TSuggest extends string, TString extends string> = TSuggest | Omit<TString, TSuggest>;
