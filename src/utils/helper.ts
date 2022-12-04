import { itemCategoryList } from '@root/types/model';
import { z } from 'zod';

export const checkValidItemCateKey = (key: string) => {
	const result = z.enum(itemCategoryList).safeParse(key);
	return result.success ? result.data : undefined;
};

export const parseObjToParam = (input: Record<string, number | string | null | undefined>) => {
	const queryParse = Object.fromEntries(
		Object.entries(input)
			.filter(([, value]) => value !== null)
			.map(([key, value]) => [key, value?.toString() || '']),
	);

	return new URLSearchParams(queryParse).toString();
};
