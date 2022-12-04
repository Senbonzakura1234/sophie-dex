import { itemCategoryList } from '@root/types/model';
import { z } from 'zod';

export const checkValidItemCateKey = (key: string) => {
	const result = z.enum(itemCategoryList).safeParse(key);
	return result.success ? result.data : undefined;
};
