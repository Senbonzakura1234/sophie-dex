import type { CommonObject, KeyOf, ValueOf } from '@root/types/common';
import type { NodeEnv, SearchQuery } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import type { ReadonlyURLSearchParams } from 'next/navigation';
import { env } from './env.mjs';

// =======================================				Native Override				=======================================

export const arrayInclude = <TSearch extends Readonly<string | number>>(
	arr: Readonly<Array<TSearch>>,
	search: unknown,
): search is TSearch => arr.includes(search as TSearch);

export const capitalize = <TInput extends string>(input?: TInput | null): Capitalize<TInput> =>
	(input
		? input.replace(/(^\w|\s\w)(\S*)/g, (_, firstLetter, rest) => firstLetter.toUpperCase() + rest.toLowerCase())
		: '') as Capitalize<TInput>;

export type CapitalizeFunction = typeof capitalize;

export const createArray = <TFill>(len = 0, fill: TFill) => Array(len).fill(fill) as Array<TFill>;

export const entries = <const Obj extends CommonObject>(obj: Obj): Array<[KeyOf<Obj>, ValueOf<Obj>]> =>
	Object.entries(obj) as Array<[KeyOf<Obj>, ValueOf<Obj>]>;

export const fromEntries = <Key extends KeyOf<CommonObject>, Value = unknown>(
	entries: Array<Readonly<[Key, Value]>>,
): Readonly<Record<Key, Value>> => Object.fromEntries(entries) as Readonly<Record<Key, Value>>;

export const indexOf = <TSearch extends Readonly<string | number>>(
	arr: Readonly<Array<TSearch>>,
	search: unknown,
	defaultIndex?: number,
) => (arrayInclude(arr, search) ? arr.indexOf(search) : defaultIndex || -1);

export const objectKeys = <const Obj extends CommonObject>(obj: Obj): Array<KeyOf<Obj>> => Object.keys(obj);

export const objectValues = <const Obj extends CommonObject>(obj: Obj): Array<ValueOf<Obj>> =>
	Object.values(obj) as Array<Obj[keyof Obj]>;

export const sleep = (milliseconds = 1000) => new Promise(resolve => setTimeout(resolve, milliseconds));

export const writeLog = ({
	args,
	type = 'log',
	hideInProd = false,
}: {
	args: Array<unknown>;
	type?: 'log' | 'warn' | 'error';
	hideInProd?: boolean;
}) => (!hideInProd || !evnIs('production')) && console[type](...args);

export const evnIs = (nodeEnv: NodeEnv) => env.NEXT_PUBLIC_NODE_ENV === nodeEnv;

// =======================================					Utilities					=======================================

export const convertCode = <TInput extends string>(input?: TInput | null) =>
	input ? input.toLowerCase().replaceAll('_', ' ') : '';

export const getBaseUrl = (useMainHost?: boolean) => {
	if (useMainHost) return env.NEXT_PUBLIC_APP_HOST || `http://localhost:${env.NEXT_PUBLIC_PORT ?? 3000}`;
	if (typeof window !== 'undefined') return ''; // browser should use relative url
	if (env.NEXT_PUBLIC_VERCEL_URL) return `https://${env.NEXT_PUBLIC_VERCEL_URL}`; // SSR should use vercel url
	return `http://localhost:${env.NEXT_PUBLIC_PORT ?? 3000}`; // dev SSR should use localhost
};

export const paramsToQuery = (input: ReadonlyURLSearchParams | URLSearchParams) =>
	searchQueryValidator.keyof()._def.values.reduce((prev, cur) => {
		const query = input.get(cur);
		const value = cur === 'page' ? parseInt(query || '') : query;
		return { ...prev, [cur]: value || null };
	}, {}) as SearchQuery;

export const queryToParamsString = (query: Partial<SearchQuery>) => {
	const queryEntries = entries(query).filter(([, value]) => Boolean(value));

	if (!queryEntries.length) return '';

	return `?${queryEntries.map(([key, value]) => `${key}=${encodeURIComponent(value!)}`).join('&')}` as const;
};

export const tryCatchHandler = async <TReturn = unknown>(promise: Promise<TReturn>) => {
	try {
		return { data: await promise, isSuccess: true as const, error: null };
	} catch (error) {
		writeLog({ args: [error], type: 'error', hideInProd: true });

		return { data: null, isSuccess: false as const, error };
	}
};

export const tryCatchHandlerSync = <TReturn = unknown>(callback: () => TReturn) => {
	try {
		return { data: callback(), isSuccess: true as const, error: null };
	} catch (error) {
		writeLog({ args: [error], type: 'error' });

		return { data: null, isSuccess: false as const, error };
	}
};
