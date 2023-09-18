import {
	categoryList,
	colorList,
	daisyUIThemeList,
	directionList,
	moduleIdList,
	recipeTypeList,
	relatedCategoryList,
	rumorTypeList,
	serverErrorList,
} from '@root/types/model';
import { z } from 'zod';
import { extendZodWithOpenApi } from 'zod-openapi';

extendZodWithOpenApi(z);

export const dbListEnumSchema = z.enum(['NEON_DB', 'VERCEL_DB']);
export type DBListEnum = z.infer<typeof dbListEnumSchema>;

export const daisyUIThemeEnumSchema = z.enum(daisyUIThemeList).catch('fantasy');
export type DaisyUIThemeEnum = z.infer<typeof daisyUIThemeEnumSchema>;

export const serverErrorEnumSchema = z.enum(serverErrorList).catch('INTERNAL_SERVER_ERROR');
export type ServerErrorEnum = z.infer<typeof serverErrorEnumSchema>;

export const nodeEnumEnvSchema = z.enum(['development', 'test', 'production']);
export type NodeEnv = z.infer<typeof nodeEnumEnvSchema>;

export const genericStringSchema = z.string();

export const genericNonnegativeIntSchema = z.number().int().nonnegative();

export const genericModuleIdEnumSchema = z.enum(moduleIdList);
export type ModuleIdEnum = z.infer<typeof genericModuleIdEnumSchema>;

export const genericCategoryEnumSchema = z.enum(categoryList);
export type CategoryEnum = z.infer<typeof genericCategoryEnumSchema>;

export const genericColorEnumSchema = z.enum(colorList);
export type ColorEnum = z.infer<typeof genericColorEnumSchema>;

export const genericDirectionEnumSchema = z.enum(directionList);
export type DirectionEnum = z.infer<typeof genericDirectionEnumSchema>;

export const genericPageSchema = z.coerce.number().positive();

export const genericRecipeTypeEnumSchema = z.enum(recipeTypeList);
export type RecipeTypeEnum = z.infer<typeof genericRecipeTypeEnumSchema>;

export const genericRelatedCategoryEnumSchema = z.enum(relatedCategoryList);
export type RelatedCategoryEnum = z.infer<typeof genericRelatedCategoryEnumSchema>;

export const genericRumorTypeEnumSchema = z.enum(rumorTypeList);
export type RumorTypeEnum = z.infer<typeof genericRumorTypeEnumSchema>;

export const genericSortByEnumSchema = z.enum(['index', 'name', 'level', 'price']);
export type SortByEnum = z.infer<typeof genericSortByEnumSchema>;

export const genericIdSchema = genericStringSchema.uuid();
export type Id = z.infer<typeof genericIdSchema>;

export const searchQueryValidator = z.object({
	category: genericCategoryEnumSchema.nullish().catch(null).default(null),
	color: genericColorEnumSchema.nullish().catch(null).default(null),
	direction: genericDirectionEnumSchema.nullish().catch(null).default(null),
	page: genericPageSchema.nullish().catch(null).default(null),
	recipeType: genericRecipeTypeEnumSchema.nullish().catch(null).default(null),
	relatedCategory: genericRelatedCategoryEnumSchema.nullish().catch(null).default(null),
	rumorType: genericRumorTypeEnumSchema.nullish().catch(null).default(null),
	search: genericStringSchema.nullish().catch(null).default(null),
	sortBy: genericSortByEnumSchema.nullish().catch(null).default(null),
});
export type SearchQuery = z.infer<typeof searchQueryValidator>;

export const idQueryValidator = z.object({ id: genericIdSchema.nullable().catch(null) });
export type IdQuery = z.infer<typeof idQueryValidator>;

export const highlightTextValidator = z.object({ content: z.string() });
export type HighlightText = z.infer<typeof highlightTextValidator>;
