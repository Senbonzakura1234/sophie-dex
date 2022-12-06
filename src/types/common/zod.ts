import type { ZodType } from 'zod';
import { z } from 'zod';

import { colorList, itemCategoryList, traitCategoryList } from '../model';

export const stringToNumberSchema = (def: number) => z.string().default(`${def}`).transform(Number);
export const safePreprocessor =
	<O, Z extends ZodType<O>>(preprocessorSchema: Z) =>
	(val: unknown): O | null => {
		const parsed = preprocessorSchema.safeParse(val);
		if (!parsed.success) {
			return null;
		}
		return parsed.data;
	};

export const sortByValidator = z.enum(['noId', 'name']).default('noId');

export const searchQueryValidator = z.object({
	search: z.string().nullish().default(null),
	sortBy: sortByValidator,
	direction: z.enum(['asc', 'desc']).default('asc'),
	itemCategory: z.enum(itemCategoryList).nullish().default(null),
	traitCategory: z.enum(traitCategoryList).nullish().default(null),
	color: z.enum(colorList).nullish().default(null),
	cursor: z
		.string()
		.regex(/^[0-9A-F]{24}$/i)
		.nullish()
		.default(null),
	page: z
		.string()
		.regex(/^[1-9]\d*$/)
		.nullish()
		.default('1'),
	limit: z
		.string()
		.regex(/^[1-9]\d*$/)
		.nullish()
		.default('10'),
});

export type SearchQuery = z.infer<typeof searchQueryValidator>;
