export const parseSecuredQuery = (input: Record<string, number | string | null>): string => {
	const arrQuery: string[] = [];

	for (const key in input) {
		if (Object.prototype.hasOwnProperty.call(input, key)) {
			const element = input[key];
			if (element) arrQuery.push(`${key}=${element}`);
		}
	}

	return arrQuery.length > 0 ? `?${arrQuery.join('&')}` : '';
};
