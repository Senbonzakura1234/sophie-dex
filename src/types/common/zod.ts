import { defaultLimit, idRegex, positiveIntRegex } from '@root/constants';
import { z } from 'zod';

import { colorMap, itemCategoryList, traitCategoryList } from '../model';

export const searchQueryValidator = z.object({
	search: z.string().nullish().catch(null),
	sortBy: z.enum(['noId', 'name']).catch('noId'),
	direction: z.enum(['asc', 'desc']).catch('asc'),
	itemCategory: z.enum(itemCategoryList).nullish().catch(null),
	traitCategory: z.enum(traitCategoryList).nullish().catch(null),
	color: z.enum(colorMap).nullish().catch(null),
	cursor: z.string().regex(idRegex).nullish().catch(null),
	page: z.string().regex(positiveIntRegex).nullish().catch('1'),
	limit: z.string().regex(positiveIntRegex).nullish().catch(defaultLimit),
});

export type SearchQuery = z.infer<typeof searchQueryValidator>;

export const idQueryValidator = z.object({
	id: z.string().regex(idRegex).nullish().catch(null),
});

export type IdQuery = z.infer<typeof idQueryValidator>;
