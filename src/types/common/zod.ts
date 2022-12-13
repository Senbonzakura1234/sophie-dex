import { defaultLimit, idRegex, positiveIntRegex } from '@root/constants';
import { z } from 'zod';

import { colorMap, itemCategoryList, traitCategoryList } from '../model';

const positiveIntSchema = z.string().regex(positiveIntRegex);

const searchSchema = z.string().nullish().catch(null);
const sortBySchema = z.enum(['noId', 'name']).catch('noId');
const directionSchema = z.enum(['asc', 'desc']).catch('asc');
const itemCategorySchema = z.enum(itemCategoryList).nullish().catch(null);
const traitCategorySchema = z.enum(traitCategoryList).nullish().catch(null);
const colorSchema = z.enum(colorMap).nullish().catch(null);
const idSchema = z.string().regex(idRegex).nullish().catch(null);
const pageSchema = positiveIntSchema.nullish().catch('1');
const limitSchema = positiveIntSchema.nullish().catch(defaultLimit);

export const searchQueryValidator = z.object({
	search: searchSchema,
	sortBy: sortBySchema,
	direction: directionSchema,
	itemCategory: itemCategorySchema,
	traitCategory: traitCategorySchema,
	color: colorSchema,
	cursor: idSchema,
	page: pageSchema,
	limit: limitSchema,
});

export type SearchQuery = z.infer<typeof searchQueryValidator>;

export const idQueryValidator = z.object({
	id: idSchema,
});

export type IdQuery = z.infer<typeof idQueryValidator>;
