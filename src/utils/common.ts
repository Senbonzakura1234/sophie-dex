export async function tryCatchHandler<Return = unknown>(
	promise: Promise<Return>,
): Promise<[Awaited<Return>, null] | [null, string]> {
	try {
		return [await promise, null];
	} catch (error) {
		return [null, error instanceof Error ? error.message : 'Unknown error'];
	}
}
