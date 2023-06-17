import type { MaybeData } from '@root/types/common';
import type { NodeEnv } from '@root/types/common/zod';
import { env } from './env.mjs';

export const evnIs = (nodeEnv: NodeEnv) => env.NEXT_PUBLIC_NODE_ENV === nodeEnv;

export function nullableHandle<TData = unknown>({ data, isDataReady }: MaybeData<TData>) {
	return isDataReady ? { data, isDataReady: true as const } : { data: undefined, isDataReady: false as const };
}

export async function tryCatchHandler<TReturn = unknown>(promise: Promise<TReturn>) {
	try {
		return { data: await promise, isSuccess: true as const, error: null };
	} catch (error) {
		if (evnIs('development')) console.error(error);

		return { data: null, isSuccess: false as const, error };
	}
}

export const getBaseUrl = (isClient?: boolean) => {
	if (typeof window !== 'undefined' && !isClient) return ''; // browser should use relative url
	if (env.NEXT_PUBLIC_VERCEL_URL) return `https://${env.NEXT_PUBLIC_VERCEL_URL}`; // SSR should use vercel url
	return `http://localhost:${env.NEXT_PUBLIC_PORT ?? 3000}`; // dev SSR should use localhost
};

export const improvedInclude = <TSearch extends Readonly<string | number>>(
	arr: Readonly<TSearch[]>,
	search: unknown,
): search is TSearch => arr.includes(search as TSearch);
