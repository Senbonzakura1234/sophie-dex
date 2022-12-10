import type { COLOR } from '@prisma/client';
import { itemCategoryList } from '@root/types/model';
import { z } from 'zod';

export const checkValidItemCateKey = (key: string) => {
	const result = z.enum(itemCategoryList).safeParse(key);
	return result.success ? result.data : undefined;
};

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

export const parseColorToClassName = (color: COLOR): `bg-${string}-500` => {
	if (color === 'NONE') return 'bg-slate-500' as const;
	return `bg-${color.toLocaleLowerCase()}-500` as const;
};
