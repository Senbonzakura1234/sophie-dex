import { idRegex, tableList } from '@root/constants';
import { categoryList, colorList, recipeTypeList, relatedCategoryList, rumorTypeList } from '@root/types/model';
import { z } from 'zod';

const nodeEnvSchema = z.enum(['development', 'test', 'production']);

export type NodeEnv = z.infer<typeof nodeEnvSchema>;

const positiveIntSchema = z.coerce.number().positive();

const genericStringSchema = z.string();
const genericIdSchema = genericStringSchema.regex(idRegex);

const searchSchema = genericStringSchema.nullish().catch(null).default(null);
const sortBySchema = z.enum(['index', 'name', 'level', 'price']).nullish().catch(null).default(null);
const directionSchema = z.enum(['asc', 'desc']).nullish().catch(null).default(null);
const relatedCategorySchema = z.enum(relatedCategoryList).nullish().catch(null).default(null);
const categorySchema = z.enum(categoryList).nullish().catch(null).default(null);
const colorSchema = z.enum(colorList).nullish().catch(null).default(null);
const rumorTypeSchema = z.enum(rumorTypeList).nullish().catch(null).default(null);
const recipeTypeSchema = z.enum(recipeTypeList).nullish().catch(null).default(null);
const idSchema = genericIdSchema.nullish().catch(null).default(null);
const pageSchema = positiveIntSchema.nullish().catch(null).default(null);

export const searchQueryValidator = z.object({
	search: searchSchema,
	sortBy: sortBySchema,
	direction: directionSchema,
	relatedCategory: relatedCategorySchema,
	category: categorySchema,
	color: colorSchema,
	rumorType: rumorTypeSchema,
	recipeType: recipeTypeSchema,
	page: pageSchema,
});

export type SearchQuery = z.infer<typeof searchQueryValidator>;

export const idQueryValidator = z.object({ id: idSchema });

export type IdQuery = z.infer<typeof idQueryValidator>;

export const highlightTextValidator = z.object({
	content: z.string(),
});

export type HighlightText = z.infer<typeof highlightTextValidator>;

export const hyperLinkRecordValidator = z.object({
	id: genericIdSchema,
	name: genericStringSchema,
	table: z.enum(tableList),
});

export const hyperLinkSearchValidator = z.object({
	searchQuery: searchQueryValidator,
	table: z.enum(tableList),
});
