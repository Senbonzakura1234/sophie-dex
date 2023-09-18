import type { CommonObject, KeyOf } from '@root/types/common';
import type { NodeEnv, SearchQuery } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import type { ReadonlyURLSearchParams } from 'next/navigation';
import { env } from './env.mjs';

export const evnIs = (nodeEnv: NodeEnv) => env.NEXT_PUBLIC_NODE_ENV === nodeEnv;

type LogProviderWriteParams = {
	args: Array<unknown>;
	type: 'log' | 'warn' | 'error';
};

class LogProviderClass {
	write({ args, type }: LogProviderWriteParams) {
		if (!evnIs('production')) return console[type](...args);
	}
}

export const LogProvider = new LogProviderClass();

export const tryCatchHandler = async <TReturn = unknown>(promise: Promise<TReturn>) => {
	try {
		return { data: await promise, isSuccess: true as const, error: null };
	} catch (error) {
		LogProvider.write({ args: [error], type: 'error' });

		return { data: null, isSuccess: false as const, error };
	}
};

export const tryCatchHandlerSync = <TReturn = unknown>(callback: () => TReturn) => {
	try {
		return { data: callback(), isSuccess: true as const, error: null };
	} catch (error) {
		LogProvider.write({ args: [error], type: 'error' });

		return { data: null, isSuccess: false as const, error };
	}
};

export const createArray = <TFill>(len = 0, fill: TFill) => Array(len).fill(fill) as Array<TFill>;

export const getBaseUrl = (useMainHost?: boolean) => {
	if (useMainHost) return env.NEXT_PUBLIC_APP_HOST || `http://localhost:${env.NEXT_PUBLIC_PORT ?? 3000}`;
	if (typeof window !== 'undefined') return ''; // browser should use relative url
	if (env.NEXT_PUBLIC_VERCEL_URL) return `https://${env.NEXT_PUBLIC_VERCEL_URL}`; // SSR should use vercel url
	return `http://localhost:${env.NEXT_PUBLIC_PORT ?? 3000}`; // dev SSR should use localhost
};

export const improvedInclude = <TSearch extends Readonly<string | number>>(
	arr: Readonly<Array<TSearch>>,
	search: unknown,
): search is TSearch => arr.includes(search as TSearch);

export const capitalize = (input?: string | number | null) =>
	input
		? input
				.toString()
				.replace(/(^\w|\s\w)(\S*)/g, (_, firstLetter, rest) => firstLetter.toUpperCase() + rest.toLowerCase())
		: '';

export const convertCode = (input?: string | number | null) =>
	input ? input.toString().toLowerCase().replaceAll('_', ' ') : '';

export const parseQuery = (query: Partial<SearchQuery>) => {
	for (const key in query) {
		if (!Object.prototype.hasOwnProperty.call(query, key)) continue;
		const element = query[key as KeyOf<typeof query>];
		if (!element) delete query[key as KeyOf<typeof query>];
	}

	return query;
};

export const queryToParamsString = (query: Partial<SearchQuery>) => {
	const queryEntries = Object.entries(query);

	if (!queryEntries.length) return '';

	return `?${queryEntries
		.filter(([, value]) => Boolean(value))
		.map(([key, value]) => `${key}=${encodeURIComponent(value!)}`)
		.join('&')}`;
};

export const improvedParseJSON = <T>(value: string | null): T | undefined => {
	const { data, isSuccess, error } = tryCatchHandlerSync(() =>
		value === 'undefined' ? undefined : (JSON.parse(value ?? '') as T),
	);

	if (isSuccess) return data;

	LogProvider.write({ args: [`parsing error on ${value}`, error], type: 'error' });
};

export const paramsToQuery = (input: ReadonlyURLSearchParams | URLSearchParams) =>
	searchQueryValidator.keyof()._def.values.reduce((prev, cur) => {
		const query = input.get(cur);
		const value = cur === 'page' ? parseInt(query || '') : query;
		return { ...prev, [cur]: value || null };
	}, {}) as SearchQuery;

export const sleep = (milliseconds = 1000) => new Promise(resolve => setTimeout(resolve, milliseconds));

export const isQueryEmpty = (searchQuery: Parameters<typeof parseQuery>[0]) =>
	Object.keys(parseQuery(searchQuery)).length === 0;

export const improvedFromEntries = <Key extends KeyOf<CommonObject>, Value = unknown>(
	entries: Array<Readonly<[Key, Value]>>,
): Readonly<Record<Key, Value>> =>
	entries.reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {}) as Readonly<Record<Key, Value>>;
