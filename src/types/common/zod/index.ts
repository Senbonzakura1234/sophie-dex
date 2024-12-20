import type { CommonRecord } from '@root/server/postgresql/schema';
import {
	genericBooleanishEnumSchema,
	genericCategoryEnumSchema,
	genericColorEnumSchema,
	genericDirectionEnumSchema,
	genericIdSchema,
	genericModuleIdEnumSchema,
	genericRecipeTypeEnumSchema,
	genericRelatedCategoryEnumSchema,
	genericRumorTypeEnumSchema,
	genericSortByEnumSchema
} from '@root/types/common/zod/generic';
import { z } from 'zod';

export const searchQueryValidator = z.object({
	bookmarked: genericBooleanishEnumSchema.nullish().catch(null).default(null),
	category: genericCategoryEnumSchema.nullish().catch(null).default(null),
	color: genericColorEnumSchema.nullish().catch(null).default(null),
	direction: genericDirectionEnumSchema.nullish().catch(null).default(null),
	page: z.coerce.number().positive().nullish().catch(null).default(null),
	recipeType: genericRecipeTypeEnumSchema.nullish().catch(null).default(null),
	relatedCategory: genericRelatedCategoryEnumSchema.nullish().catch(null).default(null),
	rumorType: genericRumorTypeEnumSchema.nullish().catch(null).default(null),
	search: z
		.string()
		.transform(val => val.trim())
		.nullish()
		.catch(null)
		.default(null),
	sortBy: genericSortByEnumSchema.nullish().catch(null).default(null)
});
export type SearchQuery = z.infer<typeof searchQueryValidator>;

export const signInQueryValidator = z
	.object({
		callbackUrl: z.string().url().optional().catch('/').default('/'),
		error: z.string().optional().catch(undefined).transform(Boolean)
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
	isBookmarked: z.boolean().default(false)
});
export type BookmarkQuery = z.infer<typeof bookmarkQueryValidator>;

export const highlightTextValidator = z.object({ content: z.string() });
export type HighlightText = z.infer<typeof highlightTextValidator>;

export const githubFileResponseSchema = z.object({ content: z.string() });
export type GithubFileResponse = z.infer<typeof githubFileResponseSchema>;

export const packageDotJSONSchema = z.object({
	version: z.string().regex(/^\d+\.\d+\.\d+$/, "Version must be in 'major.minor.patch' format")
});
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
	twitter_username: z.string().optional().catch('')
});
export type GithubUserInfo = z.infer<typeof githubUserInfoSchema>;

export const licenseInfoSchema = z.object({
	name: z.string(),
	description: z.string(),
	permissions: z.array(z.string()),
	conditions: z.array(z.string()),
	limitations: z.array(z.string()),
	body: z.string()
});
export type LicenseInfo = z.infer<typeof licenseInfoSchema>;

export const commonRecordValidator = z.object({
	name: z.string(),
	id: genericIdSchema,
	keyWords: z.string(),
	moduleId: genericModuleIdEnumSchema
}) satisfies z.ZodType<CommonRecord>;

export const ogQuerySchema = z.object({
	title: z.string().min(1).optional().catch(undefined),
	description: z.string().min(1).optional().catch(undefined),
	alt: z.string().min(1).optional().catch(undefined)
});
export type OgQuery = z.infer<typeof ogQuerySchema>;

export const changeVersionTypeSchema = z.enum(['patch', 'minor', 'major']).catch('minor');
export type ChangeVersionType = z.infer<typeof changeVersionTypeSchema>;
