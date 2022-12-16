import { idRegex } from '@root/constants';
import { z } from 'zod';

import { colorMap, itemCategoryList, traitCategoryList } from '../model';

const positiveIntSchema = z.coerce.number().positive();

const searchSchema = z.string().nullish().catch(null).default(null);
const sortBySchema = z.enum(['grade', 'name']).nullish().catch(null).default(null);
const directionSchema = z.enum(['asc', 'desc']).nullish().catch(null).default(null);
const itemCategorySchema = z.enum(itemCategoryList).nullish().catch(null).default(null);
const traitCategorySchema = z.enum(traitCategoryList).nullish().catch(null).default(null);
const colorSchema = z.enum(colorMap).nullish().catch(null).default(null);
const idSchema = z.string().regex(idRegex).nullish().catch(null).default(null);
const pageSchema = positiveIntSchema.nullish().catch(null).default(null);
const limitSchema = positiveIntSchema.nullish().catch(null).default(null);

export const searchQueryValidator = z.object({
	search: searchSchema,
	sortBy: sortBySchema,
	direction: directionSchema,
	itemCategory: itemCategorySchema,
	traitCategory: traitCategorySchema,
	color: colorSchema,
	page: pageSchema,
	limit: limitSchema,
});

export type SearchQuery = z.infer<typeof searchQueryValidator>;

export const idQueryValidator = z.object({
	id: idSchema,
});

export type IdQuery = z.infer<typeof idQueryValidator>;
