export async function tryCatchHandler<Return = unknown>(promise: Promise<Return>) {
	try {
		return { data: await promise, isSuccess: true as const, error: null };
	} catch (error) {
		return { data: null, isSuccess: false as const, error };
	}
}
