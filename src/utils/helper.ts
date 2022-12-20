export const parseObjToParam = (input: Record<string, number | string | string[] | null | undefined>) => {
	const queryParse = Object.fromEntries(
		Object.entries(input)
			.filter(([key, value]) => value !== null && key !== 'id')
			.map(([key, value]) => {
				if (value instanceof Array) return [key, value];
				return [key, value?.toString() || ''];
			}),
	);

	return new URLSearchParams(queryParse);
};

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

export const isEqualWithNullish = (a: unknown, b: unknown) => {
	if (!a === true && !b === true) return true;
	return a === b;
};
