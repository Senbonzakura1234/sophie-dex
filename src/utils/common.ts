import type { MaybeData } from '@root/types/common';
import type { NodeEnv } from '@root/types/common/zod';
import { env } from './env.mjs';

export const evnIs = (nodeEnv: NodeEnv) => env.NEXT_PUBLIC_NODE_ENV === nodeEnv;

export const nullableHandle = <TData = unknown>({ data, isDataReady }: MaybeData<TData>) =>
	isDataReady ? { data, isDataReady: true as const } : { data: undefined, isDataReady: false as const };

export const tryCatchHandler = async <TReturn = unknown>(promise: Promise<TReturn>) => {
	try {
		return { data: await promise, isSuccess: true as const, error: null };
	} catch (error) {
		if (evnIs('development')) console.error(error);

		return { data: null, isSuccess: false as const, error };
	}
};

export const createArray = <TFill>(len = 0, fill: TFill) => Array(len).fill(fill) as TFill[];

export const getBaseUrl = (isClient?: boolean) => {
	if (typeof window !== 'undefined' && !isClient) return ''; // browser should use relative url
	if (env.NEXT_PUBLIC_VERCEL_URL) return `https://${env.NEXT_PUBLIC_VERCEL_URL}`; // SSR should use vercel url
	return `http://localhost:${env.NEXT_PUBLIC_PORT ?? 3000}`; // dev SSR should use localhost
};

export const improvedInclude = <TSearch extends Readonly<string | number>>(
	arr: Readonly<TSearch[]>,
	search: unknown,
): search is TSearch => arr.includes(search as TSearch);

export const formatRecordCount = new Intl.NumberFormat('en-US', { minimumIntegerDigits: 3 }).format;
