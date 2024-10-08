import { errorMap } from '@root/constants/common';
import { TRPCError } from '@trpc/server';
import type { PgPreparedQuery, PreparedQueryConfig } from 'drizzle-orm/pg-core';
import type { Dispatch, ReactNode, SetStateAction } from 'react';

export type SelectOptionItem<V> = { value: V | null; label?: string; icon?: ReactNode };
export type SetSelectOptionItem<V> = Dispatch<SetStateAction<SelectOptionItem<V>>>;

export type LooseAutocomplete<TSuggest extends string, TString extends string> = TSuggest | Omit<TString, TSuggest>;

export type AlertTypeEnum = 'ERROR' | 'INFO' | 'SUCCESS' | 'WARN';

export type AppleMediaConfig = Array<{
	url: string;
	media?: { width: number; height: number; ratio: number; orientation: 'landscape' | 'portrait' };
}>;

export type CommonObject = Record<string | number | symbol, unknown>;

export type KeyOf<TData extends CommonObject> = keyof TData;

export type ValueOf<TData extends CommonObject> = Required<TData>[KeyOf<TData>];

export type LooseAutoComplete<TSuggest extends TLoose, TLoose = unknown> = TSuggest | NonNullable<unknown>;

export type ImproveExclude<TKeys, TExcluded extends LooseAutoComplete<TKeys>> = Exclude<TKeys, TExcluded>;

export type ImprovePick<
	TData,
	KRequired extends keyof TData,
	KNonRequired extends ImproveExclude<keyof TData, KRequired> = never
> = Pick<TData, KRequired> & Partial<Pick<TData, KNonRequired>>;

export type ImprovedOmit<TObject, TKeys extends LooseAutoComplete<keyof TObject>> = ImprovePick<
	TObject,
	ImproveExclude<keyof TObject, TKeys>
>;

export class APIError extends TRPCError {
	codeNumber: ValueOf<typeof errorMap>['status'];
	constructor(props: ConstructorParameters<typeof TRPCError>[0]) {
		super(props);
		this.codeNumber = errorMap[props.code].status;
	}
}

export type APIResult<TResult = unknown> = Promise<
	{ isSuccess: false; result: null; error: APIError } | { isSuccess: true; result: TResult; error: null }
>;

export type Inspect<TObject> = {
	[TKey in keyof TObject]: TObject[TKey];
} & NonNullable<unknown>;

export type InspectRecursive<TObject> = {
	[TKey in keyof TObject]: InspectRecursive<TObject[TKey]>;
} & NonNullable<unknown>;

export type PreparedPGQuery<TData = unknown> = PgPreparedQuery<PreparedQueryConfig & { execute: TData }>;

export type InputData = ImprovedOmit<Required<ShareData>, 'files'>;
