import { idRegex, tableList } from '@root/constants';
import { categoryList, colorList, recipeTypeList, relatedCategoryList, rumorTypeList } from '@root/types/model';
import { z } from 'zod';

const positiveIntSchema = z.coerce.number().positive();

const genericStringSchema = z.string();
const genericIdSchema = genericStringSchema.regex(idRegex);
export const genericRelatedCategorySchema = z.enum(relatedCategoryList);

const searchSchema = genericStringSchema.nullish().catch(null).default(null);
const sortBySchema = z.enum(['index', 'name', 'level', 'price']).nullish().catch(null).default(null);
const directionSchema = z.enum(['asc', 'desc']).nullish().catch(null).default(null);
export const relatedCategorySchema = genericRelatedCategorySchema.nullish().catch(null).default(null);
const categorySchema = z.enum(categoryList).nullish().catch(null).default(null);
const colorSchema = z.enum(colorList).nullish().catch(null).default(null);
const rumorTypeSchema = z.enum(rumorTypeList).nullish().catch(null).default(null);
const recipeTypeSchema = z.enum(recipeTypeList).nullish().catch(null).default(null);
export const idSchema = genericIdSchema.nullish().catch(null).default(null);
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

export const miscContentValidator = z.object({
	content: genericStringSchema,
});

const hyperLinkMeta = z.union([
	z.object({
		type: z.literal('SEARCH'),
		search: searchQueryValidator,
	}),
	z.object({
		type: z.literal('RECORD'),
		id: genericIdSchema,
		name: genericStringSchema,
	}),
]);

export const hyperLinkValidator = z.object({
	table: z.enum(tableList),
	meta: hyperLinkMeta,
});

export type HyperLink = z.infer<typeof hyperLinkValidator>;
