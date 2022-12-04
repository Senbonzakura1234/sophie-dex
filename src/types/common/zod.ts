import { z } from 'zod';

import { colorList, itemCategoryList, traitCategoryList } from '../model';

export const searchQueryValidator = z.object({
	page: z.number().int().nonnegative().default(1),
	limit: z.number().int().nonnegative().default(20),
	search: z.string().nullish().default(null),
	sortBy: z.enum(['noId', 'name']).default('noId'),
	direction: z.enum(['asc', 'desc']).default('asc'),
	itemCategory: z.enum(itemCategoryList).nullish().default(null),
	traitCategory: z.enum(traitCategoryList).nullish().default(null),
	color: z.enum(colorList).nullish().default(null),
	cursor: z
		.string()
		.regex(/^[0-9A-F]{24}$/i)
		.nullish()
		.default(null),
});

export type SearchQuery = z.infer<typeof searchQueryValidator>;
