import type { MaybeData } from '@root/types/common';
import type { NodeEnv, SearchQuery } from '@root/types/common/zod';
import { resolveHref } from 'next/dist/shared/lib/router/utils/resolve-href';
import Router from 'next/router';
import type { UrlObject } from 'url';
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

export const nullableHandle = <TData = unknown>({ data, isDataReady }: MaybeData<TData>) =>
	isDataReady ? { data, isDataReady: true as const } : { data: undefined, isDataReady: false as const };

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

export const formatRecordCount = new Intl.NumberFormat('en-US', { minimumIntegerDigits: 3 }).format;

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
		const element = query[key as keyof typeof query];
		if (!element) delete query[key as keyof typeof query];
	}

	return query;
};

export const convertUrlObject = (url: UrlObject) => `${getBaseUrl(true)}${resolveHref(Router, url, true)[1]}`;

type OnCopyToClipboardParams = {
	input: string;
	onSuccess: () => void;
	onFailure: (message: string, error?: unknown) => void;
};

export const onCopyToClipboard = async ({ input, onFailure, onSuccess }: OnCopyToClipboardParams) => {
	if (!navigator?.clipboard) return onFailure('Clipboard not supported');

	const { error, isSuccess } = await tryCatchHandler(navigator.clipboard.writeText(input));

	return isSuccess ? onSuccess() : onFailure('Copy to clipboard failed', error);
};

export const improvedParseJSON = <T>(value: string | null): T | undefined => {
	const { data, isSuccess, error } = tryCatchHandlerSync(() =>
		value === 'undefined' ? undefined : (JSON.parse(value ?? '') as T),
	);

	if (isSuccess) return data;

	LogProvider.write({ args: [`parsing error on ${value}`, error], type: 'error' });
};
