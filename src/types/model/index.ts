import type { CommonRecord } from '@root/server/database/postgresql/schema';
import type { PreparedPGQuery } from '@root/types/common';
import type { ModuleIdEnum } from '@root/types/common/zod';
import type { TRPC_ERROR_CODE_KEY } from '@trpc/server/rpc';

export const errorList = [
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
	'CLIENT_CLOSED_REQUEST',
] as const satisfies Readonly<Array<TRPC_ERROR_CODE_KEY>>;

export const booleanishList = ['false', 'true'] as const satisfies Array<`${boolean}`>;

export const serverErrorList = ['INTERNAL_SERVER_ERROR', 'BAD_REQUEST', 'NOT_FOUND'] as const;

export const moduleIdList = ['effect', 'item', 'trait', 'rumor'] as const;

export const colorList = ['BLUE', 'GREEN', 'RED', 'WHITE', 'YELLOW'] as const;

export const rumorTypeList = ['MATERIAL', 'MONSTER'] as const;

export const recipeTypeList = [
	'BEGINNER_RECIPES',
	'GROWTH_RECIPES',
	'HOPE_RECIPES',
	'DREAM_RECIPES',
	'MYSTERY_RECIPES',
] as const;

export const traitCategoryList = [
	'ACCESSORY',
	'ARMOR',
	'ATK_ITEM',
	'BUFF_ITEM',
	'DE_BUFF_ITEM',
	'HEAL_ITEM',
	'WEAPON',
	'EXPLORATION',
	'SYNTHESIS',
] as const;

export const categoryList = [...traitCategoryList, 'KEY_ITEM', 'MACHINE', 'MATERIAL', 'BOOK'] as const;

export const relatedCategoryList = [
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
	'MAGIC_ITEM',
] as const;

export const daisyUIThemeList = ['autumn', 'fantasy', 'forest', 'synthwave'] as const;

export const directionList = ['asc', 'desc'] as const;
export const providerIdList = ['atlassian', 'facebook', 'github', 'google', 'instagram'] as const;

export type DBListResult<TRecord extends CommonRecord> = Array<TRecord & { totalRecord: number }>;

export type ListRecord<TRecord extends CommonRecord> = {
	records: Array<TRecord>;
	totalPage: number;
	totalRecord: number;
	search: string | undefined;
};

export type ExportDBQueriesMap = Record<ModuleIdEnum, PreparedPGQuery<Array<CommonRecord>>>;
export type GetBookmarksQueriesMap = {
	effect: PreparedPGQuery<{ bookmarkedEffectList: Array<string> } | undefined>;
	item: PreparedPGQuery<{ bookmarkedItemList: Array<string> } | undefined>;
	rumor: PreparedPGQuery<{ bookmarkedRumorList: Array<string> } | undefined>;
	trait: PreparedPGQuery<{ bookmarkedTraitList: Array<string> } | undefined>;
};
