import type { HyperLinkData } from '@root/server/postgresql/schema';
import { type CommonObject, type KeyOf, type ValueOf } from '@root/types/common';
import type { PageProps } from '@root/types/common/props';
import type { SearchQuery } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import type { BooleanishEnum } from '@root/types/common/zod/generic';
import { env } from '@root/utils/common/env';
import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import type { ReadonlyURLSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

// =======================================				Native Override				=======================================

export function arrayInclude<const TSearch extends Readonly<string | number>>(
	arr: Readonly<Array<TSearch>>,
	search: unknown
): search is TSearch {
	return arr.includes(search as TSearch);
}

export function capitalize<const TInput extends string>(input?: TInput | null): Capitalize<TInput> {
	return (
		input
			? input.replace(
					/(^\w|\s\w)(\S*)/g,
					(_, firstLetter: string, rest: string) => firstLetter.toUpperCase() + rest.toLowerCase()
				)
			: ''
	) as Capitalize<TInput>;
}

export function createArray<TFill>(fill: TFill, len = 0) {
	return Array(len).fill(fill) as Array<TFill>;
}

export function entries<const Obj extends CommonObject>(obj: Obj): Array<[KeyOf<Obj>, ValueOf<Obj>]> {
	return Object.entries(obj) as Array<[KeyOf<Obj>, ValueOf<Obj>]>;
}

export function fromEntries<const Key extends KeyOf<CommonObject>, Value = unknown>(
	entries: Array<Readonly<[Key, Value]>>
): Readonly<Record<Key, Value>> {
	return Object.fromEntries(entries) as Readonly<Record<Key, Value>>;
}

export function indexOf<const TSearch extends Readonly<string | number>>(
	arr: Readonly<Array<TSearch>>,
	search: unknown,
	defaultIndex?: number
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
	return new Promise<void>(resolve => setTimeout(resolve, milliseconds));
}

export function writeLog({ args, type = 'log' }: { args: Array<unknown>; type?: 'log' | 'warn' | 'error' }) {
	if (env.NEXT_PUBLIC_NODE_ENV === 'production') return;

	console[type](...args);
}

export function deleteNullableProperty<const Obj extends CommonObject>(
	obj: Obj,
	keyList: Array<KeyOf<Obj>> = objectKeys(obj)
) {
	keyList.forEach(key => {
		if (typeof obj[key] === 'undefined') return delete obj[key];
	});

	return obj;
}

// =======================================					Utilities					=======================================

export function booleanishToBoolean(input: BooleanishEnum | null = 'false'): input is 'true' {
	return input === 'true';
}
export function booleanToBooleanish(input: boolean | null = false): BooleanishEnum {
	return input ? 'true' : 'false';
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function convertCode<TInput extends string>(input?: TInput | null) {
	return input ? capitalize(input.toLowerCase().replaceAll('_', ' ')) : '';
}

export function getBaseUrl(useMainHost?: boolean) {
	if (useMainHost) return env.NEXT_PUBLIC_APP_HOST || `http://localhost:${env.NEXT_PUBLIC_PORT ?? 3000}`;
	if (typeof globalThis?.document !== 'undefined') return ''; // browser should use relative url
	if (env.NEXT_PUBLIC_VERCEL_URL) return `https://${env.NEXT_PUBLIC_VERCEL_URL}`; // SSR should use vercel url
	return `http://localhost:${env.NEXT_PUBLIC_PORT ?? 3000}`; // dev SSR should use localhost
}

export function paramsToQuery(input: ReadonlyURLSearchParams | URLSearchParams) {
	return searchQueryValidator
		.keyof()
		._def.values.reduce(
			(prev, cur) => ({ ...prev, [cur]: searchQueryValidator.shape[cur].parse(input.get(cur)) }),
			{} as SearchQuery
		);
}

export function queryToParamsString<
	TQuery extends Partial<
		Record<string | number | symbol, string | number | boolean | Array<string | number | boolean> | null>
	>
>(query: Partial<TQuery>) {
	const queryEntries = entries(query).filter(([, value]) => Boolean(value));

	if (!queryEntries.length) return '';

	return `?${queryEntries
		.map(([rawKey, value]) => {
			if (!value) return null;

			const key = typeof rawKey === 'string' || typeof rawKey === 'number' ? rawKey : rawKey.description;

			if (!key) return null;

			if (!(value instanceof Array)) return `${key}=${encodeURIComponent(value)}`;

			return `${value.map(v => `${key}=${encodeURIComponent(v)}`).join('&')}`;
		})
		.filter(Boolean)
		.join('&')}` as const;
}

export function highlightSearchedText(input: string, search: string | undefined, noPadding = false) {
	if (!search) return input;

	const arr = input.split(new RegExp(`(${search})`, 'ig'));

	return arr
		.map(s =>
			RegExp(`(${search})`, 'ig').exec(s)
				? `<span class='bg-base-content text-base-100 ${noPadding ? '' : 'px-1'}'>${s}</span>`
				: s
		)
		.join('');
}

type TryCatchOption = { operationCode?: string; suppressLog?: boolean };

export async function tryCatchHandler<TReturn = unknown>(
	promise: PromiseLike<TReturn>,
	{ operationCode, suppressLog }: TryCatchOption
) {
	try {
		const start = globalThis.performance.now();

		const data = await promise;

		const end = globalThis.performance.now();

		const timeTaken = end - start;

		if (timeTaken > 500) writeLog({ args: [`Task ${operationCode} takes ${timeTaken.toFixed(5)}ms to end`] });

		return { data, isSuccess: true as const, error: null };
	} catch (error) {
		if (!suppressLog)
			writeLog({ args: [`Error at ${operationCode}`, `Detail: `, JSON.stringify(error, null, 2)], type: 'error' });

		return { data: null, isSuccess: false as const, error };
	}
}

export function tryCatchHandlerSync<TReturn = unknown>(
	callback: () => TReturn,
	{ operationCode = '', suppressLog }: TryCatchOption = {}
) {
	try {
		const start = globalThis.performance.now();

		const data = callback();

		const end = globalThis.performance.now();

		const timeTaken = end - start;

		if (timeTaken > 1000) writeLog({ args: [`Task ${operationCode} takes ${timeTaken.toFixed(5)}ms to end`] });

		return { data, isSuccess: true as const, error: null };
	} catch (error) {
		if (!suppressLog)
			writeLog({ args: [`Error at ${operationCode}`, `Detail: `, JSON.stringify(error, null, 2)], type: 'error' });

		return { data: null, isSuccess: false as const, error };
	}
}

export function parseHyperLinkData(input: HyperLinkData) {
	if ('content' in input) return { label: input.content } as const;

	if ('searchQuery' in input) {
		const query = input.searchQuery;

		return {
			label: objectValues(query)
				.filter(Boolean)
				.map((value, key) => `${key > 0 ? ', ' : ''}${typeof value === 'number' ? value : convertCode(value)}`)
				.join(),
			href: `/${input.table}${queryToParamsString(query)}`
		} as const;
	}

	return { label: input.name, href: `/${input.table}/${input.id}` } as const;
}

export async function resolveSearchParams(searchParams: PageProps['searchParams']): PageProps['searchParams'] {
	const searchParamsRes = await tryCatchHandler(searchParams, { operationCode: 'resolveSearchParams' });

	if (!searchParamsRes.isSuccess) return {};

	return searchParamsRes.data;
}

export async function resolveParams(params: PageProps['params']): PageProps['params'] {
	const paramsRes = await tryCatchHandler(params, { operationCode: 'resolveParams' });

	if (!paramsRes.isSuccess) return { id: '' };

	return paramsRes.data;
}
