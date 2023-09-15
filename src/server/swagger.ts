import { z } from 'zod';
import type { ZodOpenApiPathItemObject, ZodOpenApiResponsesObject } from 'zod-openapi';
import { createDocument, extendZodWithOpenApi } from 'zod-openapi';

extendZodWithOpenApi(z);

import { APP_AUTHOR, APP_AUTHOR_EMAIL, APP_CODE, APP_DESCRIPTION, APP_NAME, APP_VERSION } from '@root/constants';
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

import { capitalize, improvedInclude } from '@root/utils/common';
import { createServerSideHelpers } from '@trpc/react-query/server';
import { appRouter } from './api/router/_app';

const getExampleRecord = async (moduleId: ModuleIdEnum) =>
	createServerSideHelpers({ router: appRouter, ctx: {} })[moduleId].getOneExample.fetch();

const getRecordSwaggerSchema = async (moduleId: ModuleIdEnum) =>
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
		.openapi({ example: await getExampleRecord(moduleId) });

export const getRespondSwaggerSchema = async (moduleId: ModuleIdEnum, isDetail = false) =>
	({
		'200': {
			description: '',
			content: {
				'application/json:': {
					schema: z.object({
						isSuccess: z.boolean().openapi({ example: true }),
						data: (isDetail
							? await getRecordSwaggerSchema(moduleId)
							: z.object({
									records: z.array(await getRecordSwaggerSchema(moduleId)),
									totalPage: genericNonnegativeIntSchema.openapi({ example: 1 }),
									totalRecord: genericNonnegativeIntSchema.openapi({ example: 1 }),
							  })
						).nullable(),
						error: z.object({ code: serverErrorEnumSchema }).nullable().openapi({ example: null }),
					}),
				},
			},
		},
	}) satisfies ZodOpenApiResponsesObject;

export const getListRecordSwaggerSchema = async (moduleId: ModuleIdEnum) =>
	({
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

					...(improvedInclude(['trait', 'item'], moduleId)
						? { category: searchQueryValidator.shape.category }
						: {}),

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
			responses: await getRespondSwaggerSchema(moduleId),
		},
	}) satisfies ZodOpenApiPathItemObject;

export const getSingleRecordSwaggerSchema = async (moduleId: ModuleIdEnum) =>
	({
		get: {
			tags: [capitalize(moduleId)],
			summary: `${capitalize(moduleId)} Record`,
			description: `Return Single ${capitalize(moduleId)} Record`,
			requestParams: { path: z.object({ id: genericIdSchema }) },
			responses: await getRespondSwaggerSchema(moduleId, true),
		},
	}) satisfies ZodOpenApiPathItemObject;

export const getApiDocs = async () =>
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
		paths: {
			'/api/public/effect': await getListRecordSwaggerSchema('effect'),
			'/api/public/effect/{id}': await getSingleRecordSwaggerSchema('effect'),

			'/api/public/item': await getListRecordSwaggerSchema('item'),
			'/api/public/item/{id}': await getSingleRecordSwaggerSchema('item'),

			'/api/public/rumor': await getListRecordSwaggerSchema('rumor'),
			'/api/public/rumor/{id}': await getSingleRecordSwaggerSchema('rumor'),

			'/api/public/trait': await getListRecordSwaggerSchema('trait'),
			'/api/public/trait/{id}': await getSingleRecordSwaggerSchema('trait'),
		},
	});
