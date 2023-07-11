import type { PreparedQuery, PreparedQueryConfig } from 'drizzle-orm/pg-core';
import type { ModuleIdEnum } from '../common/zod';

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

export const categoryList = [
	'ACCESSORY',
	'ARMOR',
	'ATK_ITEM',
	'BUFF_ITEM',
	'DE_BUFF_ITEM',
	'HEAL_ITEM',
	'WEAPON',
	'MATERIAL',
	'BOOK',
	'EXPLORATION',
	'MACHINE',
	'KEY_ITEM',
	'SYNTHESIS',
] as const;

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

export type CommonRecord = { id: string; keyWords: string; name: string };

export type DBListResult<TRecord extends CommonRecord> = { record: TRecord; totalRecord: number }[];

export type ListRecord<TRecord extends CommonRecord> = {
	page: number | null;
	records: TRecord[];
	totalPage: number;
	totalRecord: number;
};

export type ExportDBQueriesMap = Record<ModuleIdEnum, PreparedQuery<PreparedQueryConfig & { execute: unknown[] }>>;
