import type { TRPC_ERROR_CODE_KEY } from '@trpc/server/rpc';
import { z } from 'zod';

export const genericBooleanishEnumSchema = z.enum(['false', 'true']);
export type BooleanishEnum = z.infer<typeof genericBooleanishEnumSchema>;

export const genericProviderIdEnumValidator = z.enum(['github']);
export type ProviderIdEnum = z.infer<typeof genericProviderIdEnumValidator>;

export const lightThemesList = ['autumn', 'fantasy'] as const;
export const darkThemesList = ['forest', 'synthwave'] as const;
export const themesList = [...lightThemesList, ...darkThemesList] as const;

export const genericDaisyUIThemeEnumSchema = z.enum(themesList);
export type DaisyUIThemeEnum = z.infer<typeof genericDaisyUIThemeEnumSchema>;

export const genericErrorEnumSchema = z.enum([
	'PARSE_ERROR',
	'BAD_REQUEST',
	'INTERNAL_SERVER_ERROR',
	'NOT_IMPLEMENTED',
	'UNAUTHORIZED',
	'FORBIDDEN',
	'NOT_FOUND',
	'METHOD_NOT_SUPPORTED',
	'TIMEOUT',
	'CONFLICT',
	'PRECONDITION_FAILED',
	'PAYLOAD_TOO_LARGE',
	'UNPROCESSABLE_CONTENT',
	'TOO_MANY_REQUESTS',
	'CLIENT_CLOSED_REQUEST'
] as const satisfies Readonly<Array<TRPC_ERROR_CODE_KEY>>);
export type ErrorEnum = z.infer<typeof genericErrorEnumSchema>;

export const genericModuleIdEnumSchema = z.enum(['effect', 'item', 'trait', 'rumor']);
export type ModuleIdEnum = z.infer<typeof genericModuleIdEnumSchema>;

export const genericCategoryEnumSchema = z.enum([
	'ACCESSORY',
	'ARMOR',
	'ATK_ITEM',
	'BUFF_ITEM',
	'DE_BUFF_ITEM',
	'HEAL_ITEM',
	'WEAPON',
	'EXPLORATION',
	'SYNTHESIS',
	'KEY_ITEM',
	'MACHINE',
	'MATERIAL',
	'BOOK'
]);
export type CategoryEnum = z.infer<typeof genericCategoryEnumSchema>;

export const genericColorEnumSchema = z.enum(['BLUE', 'GREEN', 'RED', 'WHITE', 'YELLOW']);
export type ColorEnum = z.infer<typeof genericColorEnumSchema>;

export const genericDirectionEnumSchema = z.enum(['asc', 'desc']);
export type DirectionEnum = z.infer<typeof genericDirectionEnumSchema>;

export const genericRecipeTypeEnumSchema = z.enum([
	'BEGINNER_RECIPES',
	'GROWTH_RECIPES',
	'HOPE_RECIPES',
	'DREAM_RECIPES',
	'MYSTERY_RECIPES'
]);
export type RecipeTypeEnum = z.infer<typeof genericRecipeTypeEnumSchema>;

export const genericRelatedCategoryEnumSchema = z.enum([
	'PLANT',
	'MEDICINE_MAT',
	'WATER',
	'IMPORTANT',
	'BOMB',
	'MEDICINE',
	'FOOD',
	'SWEETS',
	'CLOTH',
	'NEUTRALIZER',
	'WEAPON_MAT',
	'ARMOR_MAT',
	'WEAPON',
	'ARMOR',
	'ACCESSORY',
	'POISON_MAT',
	'SECRET_POWER',
	'FUEL',
	'THREAD',
	'WOOD',
	'ELIXIR',
	'ORE',
	'GUNPOWDER',
	'GEM',
	'METAL',
	'CLAY',
	'ANIMAL',
	'INGREDIENT',
	'PAPER',
	'MAGIC_ITEM'
]);
export type RelatedCategoryEnum = z.infer<typeof genericRelatedCategoryEnumSchema>;

export const genericRumorTypeEnumSchema = z.enum(['MATERIAL', 'MONSTER']);
export type RumorTypeEnum = z.infer<typeof genericRumorTypeEnumSchema>;

export const genericSortByEnumSchema = z.enum(['index', 'name', 'level', 'price']);
export type SortByEnum = z.infer<typeof genericSortByEnumSchema>;

export const genericIdSchema = z.string().ulid();
export type Id = z.infer<typeof genericIdSchema>;
