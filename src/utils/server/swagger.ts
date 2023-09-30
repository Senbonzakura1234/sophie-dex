import 'server-only';

import type { ZodType } from 'zod';
import { z } from 'zod';
import type { ZodOpenApiPathItemObject, ZodOpenApiPathsObject, ZodOpenApiResponsesObject } from 'zod-openapi';
import { createDocument, extendZodWithOpenApi } from 'zod-openapi';

extendZodWithOpenApi(z);

import { APP_CODE, APP_NAME } from '@root/constants/common';
import type { Effect, ExampleRecord, ExampleRecordObject, Item, Rumor, Trait } from '@root/server/database/schema';
import type { GithubUserInfo, ModuleIdEnum, RepoInfo } from '@root/types/common/zod';
import {
	errorEnumSchema,
	genericCategoryEnumSchema,
	genericColorEnumSchema,
	genericIdSchema,
	genericNonnegativeIntSchema,
	genericRecipeTypeEnumSchema,
	genericRelatedCategoryEnumSchema,
	genericRumorTypeEnumSchema,
	genericStringSchema,
	searchQueryValidator,
} from '@root/types/common/zod';
import { moduleIdList } from '@root/types/model';
import { capitalize, improvedFromEntries, improvedInclude } from '@root/utils/common';

const getRecordSwaggerSchema = (moduleId: ModuleIdEnum, example: ExampleRecord) =>
	z
		.object({
			id: genericIdSchema,
			keyWords: genericStringSchema,
			name: genericStringSchema,

			...(moduleId === 'item'
				? {
						category: genericCategoryEnumSchema,
						color: genericColorEnumSchema,
						level: genericNonnegativeIntSchema,
						recipeIdea: z.object({}),
						recipeType: genericRecipeTypeEnumSchema,
						relatedCategories: z.array(genericRelatedCategoryEnumSchema),
						traitPresent: z.object({}),
				  }
				: {}),

			...(moduleId === 'rumor'
				? {
						price: genericNonnegativeIntSchema,
						location: genericStringSchema,
						rumorType: genericRumorTypeEnumSchema,
				  }
				: { index: genericNonnegativeIntSchema }),

			...(moduleId === 'trait'
				? {
						categories: z.array(genericCategoryEnumSchema),
						itemPresent: z.object({}),
						mergeFrom: z.array(z.array(z.object({}))),
				  }
				: {}),

			...(improvedInclude(['trait', 'effect'], moduleId)
				? { description: genericStringSchema }
				: { description: z.object({}) }),
		})
		.openapi({ example });

type ResponseTypeEnum = 'list' | 'detail' | 'export';

const responseMapper = {
	detail: recordSchema => recordSchema,
	list: recordSchema =>
		z.object({
			records: z.array(recordSchema),
			totalPage: genericNonnegativeIntSchema.openapi({ example: 1 }),
			totalRecord: genericNonnegativeIntSchema.openapi({ example: 1 }),
		}),
	export: recordSchema => z.array(recordSchema),
} as const satisfies Record<ResponseTypeEnum, (recordSchema: ReturnType<typeof getRecordSwaggerSchema>) => ZodType>;

const getRespondSwaggerSchema = (
	moduleId: ModuleIdEnum,
	exampleRecord: ExampleRecord,
	type: ResponseTypeEnum,
): ZodOpenApiResponsesObject => ({
	'200': {
		description: '',
		content: {
			'application/json:': {
				schema: z.object({
					isSuccess: z.boolean().openapi({ example: true }),
					data: responseMapper[type](getRecordSwaggerSchema(moduleId, exampleRecord)).nullable(),
					error: z.object({ code: errorEnumSchema }).nullable().openapi({ example: null }),
				}),
			},
		},
	},
});

const getSingleRecordSwaggerSchema = (
	moduleId: ModuleIdEnum,
	exampleRecord: ExampleRecord,
): ZodOpenApiPathItemObject => ({
	get: {
		tags: [capitalize(moduleId)],
		summary: `${capitalize(moduleId)} Record`,
		description: `Return Single ${capitalize(moduleId)} Record`,
		requestParams: { path: z.object({ id: genericIdSchema }) },
		responses: getRespondSwaggerSchema(moduleId, exampleRecord, 'detail'),
	},
});

const getListRecordSwaggerSchema = (
	moduleId: ModuleIdEnum,
	exampleRecord: ExampleRecord,
): ZodOpenApiPathItemObject => ({
	get: {
		summary: `${capitalize(moduleId)} Records`,
		tags: [capitalize(moduleId)],
		description: `Return List of ${capitalize(moduleId)} Records`,
		requestParams: {
			query: z.object({
				page: searchQueryValidator.shape.page,
				search: searchQueryValidator.shape.search,
				sortBy: searchQueryValidator.shape.sortBy,
				direction: searchQueryValidator.shape.direction,

				...(improvedInclude(['trait', 'item'], moduleId) ? { category: searchQueryValidator.shape.category } : {}),

				...(moduleId === 'item'
					? {
							relatedCategory: searchQueryValidator.shape.relatedCategory,
							color: searchQueryValidator.shape.color,
							recipeType: searchQueryValidator.shape.recipeType,
					  }
					: {}),

				...(moduleId === 'rumor' ? { rumorType: searchQueryValidator.shape.rumorType } : {}),
			}),
		},
		responses: getRespondSwaggerSchema(moduleId, exampleRecord, 'list'),
	},
});

const getExportRecordsSwaggerSchema = (
	moduleId: ModuleIdEnum,
	exampleRecord: ExampleRecord,
): ZodOpenApiPathItemObject => ({
	get: {
		tags: [capitalize(moduleId)],
		summary: `Export ${capitalize(moduleId)} Table`,
		description: `Return Full ${capitalize(moduleId)} Table`,
		responses: getRespondSwaggerSchema(moduleId, exampleRecord, 'export'),
	},
});

const getPaths = (exampleRecordObject: ExampleRecordObject): ZodOpenApiPathsObject =>
	improvedFromEntries(
		moduleIdList
			.map(
				m =>
					[
						[`/api/public/${m}`, getListRecordSwaggerSchema(m, exampleRecordObject[m])],
						[`/api/public/${m}/{id}`, getSingleRecordSwaggerSchema(m, exampleRecordObject[m])],
						[`/api/public/${m}/export`, getExportRecordsSwaggerSchema(m, exampleRecordObject[m])],
					] as const,
			)
			.flat(),
	);

export const getApiDocs = ([[effect, item, rumor, trait], version, { description }, { html_url, login, email }]: [
	[Effect, Item, Rumor, Trait],
	string,
	RepoInfo,
	GithubUserInfo,
]) =>
	createDocument({
		openapi: '3.1.0',
		info: {
			title: `${APP_NAME} | OpenApi`,
			version,
			description,
			contact: { url: html_url, name: login, email },
			license: { name: 'MIT License', url: `https://github.com/${login}/${APP_CODE}/blob/main/LICENSE` },
		},
		externalDocs: { description: 'README.md', url: `https://github.com/${login}/${APP_CODE}/blob/main/README.md` },
		paths: getPaths({ effect, item, rumor, trait }),
	});
