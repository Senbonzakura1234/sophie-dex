import { z } from 'zod';
import type { ZodOpenApiPathItemObject, ZodOpenApiPathsObject, ZodOpenApiResponsesObject } from 'zod-openapi';
import { createDocument, extendZodWithOpenApi } from 'zod-openapi';

extendZodWithOpenApi(z);

import { APP_AUTHOR, APP_AUTHOR_EMAIL, APP_CODE, APP_DESCRIPTION, APP_NAME, APP_VERSION } from '@root/constants';
import type { ExampleRecord, ExampleRecordObject } from '@root/server/database/schema';
import type { ModuleIdEnum } from '@root/types/common/zod';
import {
	genericCategoryEnumSchema,
	genericColorEnumSchema,
	genericIdSchema,
	genericNonnegativeIntSchema,
	genericRecipeTypeEnumSchema,
	genericRelatedCategoryEnumSchema,
	genericRumorTypeEnumSchema,
	genericStringSchema,
	searchQueryValidator,
	serverErrorEnumSchema,
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

const getRespondSwaggerSchema = (
	moduleId: ModuleIdEnum,
	exampleRecord: ExampleRecord,
	isDetail = false,
): ZodOpenApiResponsesObject => ({
	'200': {
		description: '',
		content: {
			'application/json:': {
				schema: z.object({
					isSuccess: z.boolean().openapi({ example: true }),
					data: (isDetail
						? getRecordSwaggerSchema(moduleId, exampleRecord)
						: z.object({
								records: z.array(getRecordSwaggerSchema(moduleId, exampleRecord)),
								totalPage: genericNonnegativeIntSchema.openapi({ example: 1 }),
								totalRecord: genericNonnegativeIntSchema.openapi({ example: 1 }),
						  })
					).nullable(),
					error: z.object({ code: serverErrorEnumSchema }).nullable().openapi({ example: null }),
				}),
			},
		},
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
		responses: getRespondSwaggerSchema(moduleId, exampleRecord),
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
		responses: getRespondSwaggerSchema(moduleId, exampleRecord, true),
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
					] as const,
			)
			.flat(),
	);

export const getApiDocs = (exampleRecordObject: ExampleRecordObject) =>
	createDocument({
		openapi: '3.1.0',
		info: {
			title: `${APP_NAME} | OpenApi`,
			version: APP_VERSION,
			description: `${APP_DESCRIPTION}`,
			contact: { url: `https://github.com/${APP_AUTHOR}`, name: APP_AUTHOR, email: APP_AUTHOR_EMAIL },
			license: { name: 'MIT License', url: `https://github.com/${APP_AUTHOR}/${APP_CODE}/blob/main/LICENSE` },
		},
		externalDocs: {
			description: 'README.md',
			url: `https://github.com/${APP_AUTHOR}/${APP_CODE}/blob/main/README.md`,
		},
		paths: getPaths(exampleRecordObject),
	});
