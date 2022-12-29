import type { CATEGORY, COLOR, RELATED_CATEGORY } from '@prisma/client';

export const ColorDisplay = {
	GREEN: 'Green',
	BLUE: 'Blue',
	WHITE: 'White',
	YELLOW: 'Yellow',
	RED: 'Red',
} as const satisfies Readonly<{ [color in COLOR]: string }>;

export const colorMap = ['BLUE', 'GREEN', 'RED', 'WHITE', 'YELLOW'] as const satisfies Readonly<COLOR[]>;

export type ColorDisplay = typeof ColorDisplay[keyof typeof ColorDisplay];

export const RelatedCategoryDisplay = {
	PLANT: 'Plant',
	MEDICINE_MAT: 'Medicine Mat',
	WATER: 'Water',
	IMPORTANT: 'Important',
	BOMB: 'Bomb',
	MEDICINE: 'Medicine',
	FOOD: 'Food',
	SWEETS: 'Sweets',
	CLOTH: 'Cloth',
	NEUTRALIZER: 'Neutralizer',
	WEAPON_MAT: 'Weapon Mat',
	ARMOR_MAT: 'Armor Mat',
	WEAPON: 'Weapon',
	ARMOR: 'Armor',
	ACCESSORY: 'Accessory',
	POISON_MAT: 'Poison Mat',
	SECRET_POWER: 'Secret Power',
	FUEL: 'Fuel',
	THREAD: 'Thread',
	WOOD: 'Wood',
	ELIXIR: 'Elixir',
	ORE: 'Ore',
	GUNPOWDER: 'Gunpowder',
	GEM: 'Gem',
	METAL: 'Metal',
	CLAY: 'Clay',
	ANIMAL: 'Animal',
	INGREDIENT: 'Ingredient',
	PAPER: 'Paper',
	MAGIC_ITEM: 'Magic Item',
} as const satisfies Readonly<{ [relatedCategory in RELATED_CATEGORY]: string }>;

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
] as const satisfies Readonly<RELATED_CATEGORY[]>;

export type RelatedCategoryDisplay = typeof RelatedCategoryDisplay[keyof typeof RelatedCategoryDisplay];

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
] as const satisfies Readonly<CATEGORY[]>;

export type ListRecord<T> = {
	records: T[];
	page: number | null;
	totalRecord: number;
	totalPage: number;
};
