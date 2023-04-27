import type { MaybeData } from '@root/types/common';

export function nullableHandle<TData = unknown>({ data, isDataReady }: MaybeData<TData>, extraFlag?: boolean) {
	return isDataReady && !extraFlag
		? { data, isDataReady: true as const }
		: { data: undefined, isDataReady: false as const };
}

export async function tryCatchHandler<TReturn = unknown>(promise: Promise<TReturn>) {
	try {
		return { data: await promise, isSuccess: true as const, error: null };
	} catch (error) {
		return { data: null, isSuccess: false as const, error };
	}
}
