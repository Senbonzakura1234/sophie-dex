import {
	booleanishList,
	categoryList,
	colorList,
	daisyUIThemeList,
	directionList,
	errorList,
	moduleIdList,
	nodeEnvList,
	providerIdList,
	recipeTypeList,
	relatedCategoryList,
	rumorTypeList,
	sortByList,
} from '@root/types/model';
import { z } from 'zod';

export const appCodeSchema = z
	.string()
	.regex(/(?=\S*['-])([a-zA-Z'-]+)/)
	.catch('-');
export const appKeyWordSchema = z.string().regex(/[^,]+/).catch('-');

export const nodeEnvEnumSchema = z.enum(nodeEnvList).catch('production');
export type NodeEnvEnum = z.infer<typeof nodeEnvEnumSchema>;

export const daisyUIThemeEnumSchema = z.enum(daisyUIThemeList).catch('fantasy');
export type DaisyUIThemeEnum = z.infer<typeof daisyUIThemeEnumSchema>;

export const errorEnumSchema = z.enum(errorList).catch('INTERNAL_SERVER_ERROR');
export type ErrorEnum = z.infer<typeof errorEnumSchema>;

export const genericStringSchema = z.string();

export const genericNonnegativeIntSchema = z.number().int().nonnegative();

export const genericBooleanishEnumSchema = z.enum(booleanishList);
export type BooleanishEnum = z.infer<typeof genericBooleanishEnumSchema>;

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

export const genericSortByEnumSchema = z.enum(sortByList);
export type SortByEnum = z.infer<typeof genericSortByEnumSchema>;

export const genericIdSchema = genericStringSchema.ulid();
export type Id = z.infer<typeof genericIdSchema>;

export const searchQueryValidator = z.object({
	bookmarked: genericBooleanishEnumSchema.nullish().catch(null).default(null),
	category: genericCategoryEnumSchema.nullish().catch(null).default(null),
	color: genericColorEnumSchema.nullish().catch(null).default(null),
	direction: genericDirectionEnumSchema.nullish().catch(null).default(null),
	page: genericPageSchema.nullish().catch(null).default(null),
	recipeType: genericRecipeTypeEnumSchema.nullish().catch(null).default(null),
	relatedCategory: genericRelatedCategoryEnumSchema.nullish().catch(null).default(null),
	rumorType: genericRumorTypeEnumSchema.nullish().catch(null).default(null),
	search: genericStringSchema
		.transform(val => val.trim())
		.nullish()
		.catch(null)
		.default(null),
	sortBy: genericSortByEnumSchema.nullish().catch(null).default(null),
});
export type SearchQuery = z.infer<typeof searchQueryValidator>;

export const signInQueryValidator = z
	.object({
		callbackUrl: genericStringSchema.url().optional().catch('/').default('/'),
		error: genericStringSchema.optional().catch(undefined).transform(Boolean),
	})
	.catch({ callbackUrl: '/', error: false })
	.default({ callbackUrl: '/', error: false });
export type SignInQuery = z.infer<typeof signInQueryValidator>;

export const idQueryValidator = z.object({ id: genericIdSchema.nullable().catch(null) });
export type IdQuery = z.infer<typeof idQueryValidator>;

export const moduleIdQueryValidator = z.object({ moduleId: genericModuleIdEnumSchema });
export type ModuleIdQuery = z.infer<typeof moduleIdQueryValidator>;

export const bookmarkQueryValidator = z.object({
	moduleId: genericModuleIdEnumSchema,
	bookmarkRecordId: genericIdSchema,
	isBookmarked: z.boolean().default(false),
});
export type BookmarkQuery = z.infer<typeof bookmarkQueryValidator>;

export const providerIdEnumValidator = z.enum(providerIdList);
export type ProviderIdEnum = z.infer<typeof providerIdEnumValidator>;

export const highlightTextValidator = z.object({ content: z.string() });
export type HighlightText = z.infer<typeof highlightTextValidator>;

export const githubFileResponseSchema = z.object({ content: z.string() });
export type GithubFileResponse = z.infer<typeof githubFileResponseSchema>;

export const packageDotJSONSchema = z.object({ version: z.string() });
export type PackageDotJSON = z.infer<typeof packageDotJSONSchema>;

export const githubUserInfoSchema = z.object({
	login: z.string(),
	id: z.number(),
	avatar_url: z.string().url().optional().catch(''),
	html_url: z.string().url().optional().catch(''),
	company: z.string().optional().catch(''),
	blog: z.string().url().optional().catch(''),
	location: z.string().optional().catch(''),
	email: z.string().email(),
	bio: z.string().optional().catch(''),
	twitter_username: z.string().optional().catch(''),
});
export type GithubUserInfo = z.infer<typeof githubUserInfoSchema>;

export const licenseInfoSchema = z.object({
	name: z.string(),
	description: z.string(),
	permissions: z.array(z.string()),
	conditions: z.array(z.string()),
	limitations: z.array(z.string()),
	body: z.string(),
});
export type LicenseInfo = z.infer<typeof licenseInfoSchema>;
