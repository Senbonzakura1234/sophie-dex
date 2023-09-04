import type { Dispatch, ReactNode, SetStateAction } from 'react';

export type ServerErrorEnum = 'INTERNAL_SERVER_ERROR' | 'BAD_REQUEST' | 'NOT_FOUND';

export type SelectOptionItem<V> = { value: V | null; label?: string; icon?: ReactNode };
export type SetSelectOptionItem<V> = Dispatch<SetStateAction<SelectOptionItem<V>>>;

export type LooseAutocomplete<TSuggest extends string, TString extends string> = TSuggest | Omit<TString, TSuggest>;

export type AlertTypeEnum = 'ERROR' | 'INFO' | 'SUCCESS' | 'WARN';

export type AppleMediaConfig = {
	url: string;
	media?: { width: number; height: number; ratio: number; orientation: 'landscape' | 'portrait' };
}[];

export type PageProps = {
	params: { id: string };
	searchParams: Record<string, string | string[] | undefined | null>;
};
