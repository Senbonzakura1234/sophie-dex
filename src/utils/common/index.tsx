import type { CommonObject, KeyOf, ValueOf } from '@root/types/common';
import type { SearchQuery } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import type { ReadonlyURLSearchParams } from 'next/navigation';
import { env } from './env.mjs';

// =======================================				Native Override				=======================================

export function arrayInclude<TSearch extends Readonly<string | number>>(
	arr: Readonly<Array<TSearch>>,
	search: unknown,
): search is TSearch {
	return arr.includes(search as TSearch);
}

export function capitalize<TInput extends string>(input?: TInput | null): Capitalize<TInput> {
	return (
		input
			? input.replace(/(^\w|\s\w)(\S*)/g, (_, firstLetter, rest) => firstLetter.toUpperCase() + rest.toLowerCase())
			: ''
	) as Capitalize<TInput>;
}

export type CapitalizeFunction = typeof capitalize;

export function createArray<TFill>(len = 0, fill: TFill) {
	return Array(len).fill(fill) as Array<TFill>;
}

export function entries<const Obj extends CommonObject>(obj: Obj): Array<[KeyOf<Obj>, ValueOf<Obj>]> {
	return Object.entries(obj) as Array<[KeyOf<Obj>, ValueOf<Obj>]>;
}

export function fromEntries<Key extends KeyOf<CommonObject>, Value = unknown>(
	entries: Array<Readonly<[Key, Value]>>,
): Readonly<Record<Key, Value>> {
	return Object.fromEntries(entries) as Readonly<Record<Key, Value>>;
}

export function indexOf<TSearch extends Readonly<string | number>>(
	arr: Readonly<Array<TSearch>>,
	search: unknown,
	defaultIndex?: number,
) {
	return arrayInclude(arr, search) ? arr.indexOf(search) : defaultIndex || -1;
}

export function objectKeys<const Obj extends CommonObject>(obj: Obj): Array<KeyOf<Obj>> {
	return Object.keys(obj);
}

export function objectValues<const Obj extends CommonObject>(obj: Obj): Array<ValueOf<Obj>> {
	return Object.values(obj) as Array<Obj[keyof Obj]>;
}

export function sleep(milliseconds = 1000) {
	return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export function writeLog({
	args,
	type = 'log',
	hideInProd = false,
}: {
	args: Array<unknown>;
	type?: 'log' | 'warn' | 'error';
	hideInProd?: boolean;
}) {
	return (!hideInProd || !evnIs('production')) && console[type](...args);
}

export function evnIs(nodeEnv: typeof env.NEXT_PUBLIC_NODE_ENV) {
	return env.NEXT_PUBLIC_NODE_ENV === nodeEnv;
}

// =======================================					Utilities					=======================================

export function convertCode<TInput extends string>(input?: TInput | null) {
	return input ? input.toLowerCase().replaceAll('_', ' ') : '';
}

export function getBaseUrl(useMainHost?: boolean) {
	if (useMainHost) return env.NEXT_PUBLIC_APP_HOST || `http://localhost:${env.NEXT_PUBLIC_PORT ?? 3000}`;
	if (typeof window !== 'undefined') return ''; // browser should use relative url
	if (env.NEXT_PUBLIC_VERCEL_URL) return `https://${env.NEXT_PUBLIC_VERCEL_URL}`; // SSR should use vercel url
	return `http://localhost:${env.NEXT_PUBLIC_PORT ?? 3000}`; // dev SSR should use localhost
}

export function paramsToQuery(input: ReadonlyURLSearchParams | URLSearchParams) {
	return searchQueryValidator.keyof()._def.values.reduce((prev, cur) => {
		const query = input.get(cur);
		const value = cur === 'page' ? parseInt(query || '') : query;
		return { ...prev, [cur]: value || null };
	}, {}) as SearchQuery;
}

export function queryToParamsString(query: Partial<SearchQuery>) {
	const queryEntries = entries(query).filter(([, value]) => Boolean(value));

	if (!queryEntries.length) return '';

	return `?${queryEntries.map(([key, value]) => `${key}=${encodeURIComponent(value!)}`).join('&')}` as const;
}

export function highlightSearchedText(input: string, search: string | undefined) {
	if (!search) return input;
	const arr = input.split(new RegExp(`(${search})`, 'ig'));

	return arr
		.map(s => (s.match(new RegExp(search, 'i')) ? `<span class='bg-base-content text-base-100 px-1'>${s}</span>` : s))
		.join('');
}

export async function tryCatchHandler<TReturn = unknown>(promise: Promise<TReturn>) {
	try {
		return { data: await promise, isSuccess: true as const, error: null };
	} catch (error) {
		writeLog({ args: [error], type: 'error', hideInProd: true });

		return { data: null, isSuccess: false as const, error };
	}
}

export function tryCatchHandlerSync<TReturn = unknown>(callback: () => TReturn) {
	try {
		return { data: callback(), isSuccess: true as const, error: null };
	} catch (error) {
		writeLog({ args: [error], type: 'error' });

		return { data: null, isSuccess: false as const, error };
	}
}
