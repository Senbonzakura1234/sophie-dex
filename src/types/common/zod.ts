import {
	categoryList,
	colorList,
	daisyUIThemeList,
	moduleIdList,
	recipeTypeList,
	relatedCategoryList,
	rumorTypeList,
} from '@root/types/model';
import { z } from 'zod';

export const dbListEnumSchema = z.enum(['NEON_DB', 'VERCEL_DB']);
export type DBListEnum = z.infer<typeof dbListEnumSchema>;

export const daisyUIThemeEnumSchema = z.enum(daisyUIThemeList).catch('fantasy');
export type DaisyUIThemeEnum = z.infer<typeof daisyUIThemeEnumSchema>;

export const nodeEnumEnvSchema = z.enum(['development', 'test', 'production']);
export type NodeEnv = z.infer<typeof nodeEnumEnvSchema>;

const positiveIntSchema = z.coerce.number().positive();

const genericStringSchema = z.string();

const genericModuleIdEnumSchema = z.enum(moduleIdList);
export type ModuleIdEnum = z.infer<typeof genericModuleIdEnumSchema>;

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

const idSchema = genericIdSchema;

export const searchQueryValidator = z.object({
	search: genericStringSchema.nullish().catch(null).default(null),
	sortBy: genericSortByEnumSchema.nullish().catch(null).default(null),
	direction: genericDirectionEnumSchema.nullish().catch(null).default(null),
	relatedCategory: genericRelatedCategoryEnumSchema.nullish().catch(null).default(null),
	category: genericCategoryEnumSchema.nullish().catch(null).default(null),
	color: genericColorEnumSchema.nullish().catch(null).default(null),
	rumorType: genericRumorTypeEnumSchema.nullish().catch(null).default(null),
	recipeType: genericRecipeTypeEnumSchema.nullish().catch(null).default(null),
	page: positiveIntSchema.nullish().catch(null).default(null),
});

export type SearchQuery = z.infer<typeof searchQueryValidator>;

export const idQueryValidator = z.object({ id: idSchema });

export const highlightTextValidator = z.object({ content: z.string() });

export type HighlightText = z.infer<typeof highlightTextValidator>;
