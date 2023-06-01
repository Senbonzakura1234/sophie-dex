import type { MaybeData } from '@root/types/common';
import type { NodeEnv } from '@root/types/common/zod';
import { env } from './env.mjs';

export function nullableHandle<TData = unknown>({ data, isDataReady }: MaybeData<TData>) {
	return isDataReady ? { data, isDataReady: true as const } : { data: undefined, isDataReady: false as const };
}

export const evnIs = (nodeEnv: NodeEnv) => env.NEXT_PUBLIC_NODE_ENV === nodeEnv;

export async function tryCatchHandler<TReturn = unknown>(promise: Promise<TReturn>) {
	try {
		return { data: await promise, isSuccess: true as const, error: null };
	} catch (error) {
		if (evnIs('development')) console.error(error);

		return { data: null, isSuccess: false as const, error };
	}
}

export const improvedInclude = <TSearch extends Readonly<string | number>>(
	arr: Readonly<TSearch[]>,
	search: unknown,
): search is TSearch => arr.includes(search as TSearch);
