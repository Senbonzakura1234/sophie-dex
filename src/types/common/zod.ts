import { idRegex } from '@root/constants';
import { z } from 'zod';

import { categoryList, colorList, recipeTypeList, relatedCategoryList } from '../model';

const positiveIntSchema = z.coerce.number().positive();

const genericStringSchema = z.string();
const genericIdSchema = genericStringSchema.regex(idRegex);
export const genericRelatedCategorySchema = z.enum(relatedCategoryList);

const searchSchema = genericStringSchema.nullish().catch(null).default(null);
const sortBySchema = z.enum(['index', 'name', 'level']).nullish().catch(null).default(null);
const directionSchema = z.enum(['asc', 'desc']).nullish().catch(null).default(null);
export const relatedCategorySchema = genericRelatedCategorySchema.nullish().catch(null).default(null);
const categorySchema = z.enum(categoryList).nullish().catch(null).default(null);
const colorSchema = z.enum(colorList).nullish().catch(null).default(null);
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
	recipeType: recipeTypeSchema,
	page: pageSchema,
});

export type SearchQuery = z.infer<typeof searchQueryValidator>;

export const idQueryValidator = z.object({ id: idSchema });

export type IdQuery = z.infer<typeof idQueryValidator>;

export const hyperLinkValidator = z.object({ id: genericIdSchema, name: genericStringSchema });

export type HyperLink = z.infer<typeof hyperLinkValidator>;
