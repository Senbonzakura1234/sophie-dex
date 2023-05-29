import {
	categoryList,
	colorList,
	recipeTypeList,
	relatedCategoryList,
	rumorTypeList,
	tableList,
} from '@root/types/model';
import { z } from 'zod';

const nodeEnvSchema = z.enum(['development', 'test', 'production']);

export type NodeEnv = z.infer<typeof nodeEnvSchema>;

const positiveIntSchema = z.coerce.number().positive();

const genericStringSchema = z.string();

const genericTableEnumSchema = z.enum(tableList);
export type TableEnum = z.infer<typeof genericTableEnumSchema>;

const genericSortByEnumSchema = z.enum(['index', 'name', 'level', 'price']);
export type SortByEnum = z.infer<typeof genericSortByEnumSchema>;
const genericDirectionEnumSchema = z.enum(['asc', 'desc']);
export type DirectionEnum = z.infer<typeof genericDirectionEnumSchema>;
const genericRelatedCategoryEnumSchema = z.enum(relatedCategoryList);
export type RelatedCategoryEnum = z.infer<typeof genericRelatedCategoryEnumSchema>;
const genericCategoryEnumSchema = z.enum(categoryList);
export type CategoryEnum = z.infer<typeof genericCategoryEnumSchema>;
const genericColorEnumSchema = z.enum(colorList);
export type ColorEnum = z.infer<typeof genericColorEnumSchema>;
const genericRumorTypeEnumSchema = z.enum(rumorTypeList);
export type RumorTypeEnum = z.infer<typeof genericRumorTypeEnumSchema>;
const genericRecipeTypeEnumSchema = z.enum(recipeTypeList);
export type RecipeTypeEnum = z.infer<typeof genericRecipeTypeEnumSchema>;
const genericIdSchema = genericStringSchema.uuid();
export type Id = z.infer<typeof genericIdSchema>;

const searchSchema = genericStringSchema.nullish().catch(null).default(null);
const sortBySchema = genericSortByEnumSchema.nullish().catch(null).default(null);
const directionSchema = genericDirectionEnumSchema.nullish().catch(null).default(null);
const relatedCategorySchema = genericRelatedCategoryEnumSchema.nullish().catch(null).default(null);
const categorySchema = genericCategoryEnumSchema.nullish().catch(null).default(null);
const colorSchema = genericColorEnumSchema.nullish().catch(null).default(null);
const rumorTypeSchema = genericRumorTypeEnumSchema.nullish().catch(null).default(null);
const recipeTypeSchema = genericRecipeTypeEnumSchema.nullish().catch(null).default(null);
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
	table: genericTableEnumSchema,
});

export const hyperLinkSearchValidator = z.object({
	searchQuery: searchQueryValidator,
	table: genericTableEnumSchema,
});

export const exportDBDataValidator = z.object({
	effects: z.array(z.unknown()),
	items: z.array(z.unknown()),
	rumors: z.array(z.unknown()),
	traits: z.array(z.unknown()),
});

export type ExportDBData = z.infer<typeof exportDBDataValidator>;
