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

const searchQuerySchema = {
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
};

export const serverSearchQueryValidator = z.object({
	page: z.number().int().nonnegative().default(1),
	limit: z.number().int().nonnegative().default(10),
	...searchQuerySchema,
});

export const clientSearchQueryValidator = z.object({
	page: z.preprocess(safePreprocessor(stringToNumberSchema(1)), z.number().int().nonnegative().default(1)),
	limit: z.preprocess(safePreprocessor(stringToNumberSchema(10)), z.number().int().nonnegative().default(10)),
	...searchQuerySchema,
});

export type ServerSearchQuery = z.infer<typeof serverSearchQueryValidator>;
export type ClientSearchQuery = z.infer<typeof clientSearchQueryValidator>;
