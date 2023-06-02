import type { NeonDatabase } from 'drizzle-orm/neon-serverless';
import type { VercelPgDatabase } from 'drizzle-orm/vercel-postgres';
import type { IdQuery, SearchQuery } from '../common/zod';

import type * as schema from '@root/server/db/schema';

export const tableList = ['effect', 'item', 'trait', 'rumor'] as const;

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

export type CommonRecord = {
	id: string;
	name: string;
	keyWords: string;
};

export type DBListResult<TRecord extends CommonRecord> = { totalRecord: number; record: TRecord }[];

export type ListRecord<TRecord extends CommonRecord> = {
	records: TRecord[];
	page: number | null;
	totalRecord: number;
	totalPage: number;
};

export type DBDriver = VercelPgDatabase<typeof schema> | NeonDatabase<typeof schema>;

export type GetRecord<TRecord extends CommonRecord> = (
	db: DBDriver,
	id: NonNullable<IdQuery['id']>,
) => Promise<TRecord | undefined>;

export type GetListRecords<TRecord extends CommonRecord> = (
	db: DBDriver,
	input: SearchQuery,
) => Promise<Readonly<[number, TRecord[]]>>;
