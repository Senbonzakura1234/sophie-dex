import type { COLOR, ITEM_CATEGORY, TRAIT_CATEGORY } from '@prisma/client';

import type { UnicodeClass } from '../fonts/atelier';

export const ColorDisplay = {
	GREEN: 'Green',
	BLUE: 'Blue',
	WHITE: 'White',
	YELLOW: 'Yellow',
	RED: 'Red',
	NONE: 'None',
} as const satisfies Readonly<{ [color in COLOR]: string }>;

export const colorMap = ['BLUE', 'GREEN', 'RED', 'WHITE', 'YELLOW', 'NONE'] as const satisfies Readonly<COLOR[]>;

export type ColorDisplay = typeof ColorDisplay[keyof typeof ColorDisplay];

export const ItemCategoryDisplay = {
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
} as const satisfies Readonly<{ [itemCategory in ITEM_CATEGORY]: string }>;

export const itemCategoryList = [
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
] as const satisfies Readonly<ITEM_CATEGORY[]>;

export type ItemCategoryDisplay = typeof ItemCategoryDisplay[keyof typeof ItemCategoryDisplay];

export const TraitCategoryMap = [
	{
		code: 'ATK_ITEM',
		name: 'Attack Item',
		className: 'atelier-ryza2-type-attack',
	},
	{
		code: 'HEAL_ITEM',
		name: 'Heal Item',
		className: 'atelier-ryza2-type-heal',
	},
	{
		code: 'DE_BUFF_ITEM',
		name: 'De-Buff Item',
		className: 'atelier-ryza2-type-debuff',
	},
	{
		code: 'BUFF_ITEM',
		name: 'Buff Item',
		className: 'atelier-ryza2-type-buff',
	},
	{
		code: 'WEAPON',
		name: 'Weapon',
		className: 'atelier-ryza2-type-weapon',
	},
	{
		code: 'ARMOR',
		name: 'Armor',
		className: 'atelier-ryza2-type-armor',
	},
	{
		code: 'ACCESSORY',
		name: 'Accessory',
		className: 'atelier-ryza2-type-accessory',
	},
] satisfies {
	code: TRAIT_CATEGORY;
	name: string;
	className: UnicodeClass;
}[];

export const traitCategoryList = [
	'ACCESSORY',
	'ARMOR',
	'ATK_ITEM',
	'BUFF_ITEM',
	'DE_BUFF_ITEM',
	'HEAL_ITEM',
	'WEAPON',
] as const satisfies Readonly<TRAIT_CATEGORY[]>;

export type TraitCategoryDisplay = typeof TraitCategoryMap[keyof typeof TraitCategoryMap];

export type ListRecord<T> = {
	records: T[];
	cursor: string;
	page: number | null;
	limit: number | null;
	totalRecord: number;
	totalPage: number;
};
