export const Color = {
	GREEN: 'Green',
	BLUE: 'Blue',
	WHITE: 'White',
	YELLOW: 'Yellow',
	RED: 'Red',
	NONE: 'None',
} as const;

export const colorList = ['BLUE', 'GREEN', 'RED', 'WHITE', 'YELLOW', 'NONE'] as const;

export type Color = typeof Color[keyof typeof Color];

export const ItemCategory = {
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
} as const;

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
] as const;

export type ItemCategory = typeof ItemCategory[keyof typeof ItemCategory];

export const TraitCategory = {
	ACCESSORY: 'Accessory',
	ARMOR: 'Armor',
	ATK_ITEM: 'Attack Item',
	BUFF_ITEM: 'Buff Item',
	DE_BUFF_ITEM: 'De-Buff Item',
	HEAL_ITEM: 'Heal Item',
	WEAPON: 'Weapon',
} as const;

export const traitCategoryList = [
	'ACCESSORY',
	'ARMOR',
	'ATK_ITEM',
	'BUFF_ITEM',
	'DE_BUFF_ITEM',
	'HEAL_ITEM',
	'WEAPON',
] as const;

export type TraitCategory = typeof TraitCategory[keyof typeof TraitCategory];

export type Item = {
	id: string;
	noId: number;
	name: string;
	color: keyof typeof Color;
	itemCategories: {
		name: keyof typeof ItemCategory;
		grade: number;
	}[];
};

export type Effect = {
	id: string;
	noId: number;
	name: string;
	description: string;
};

export type Trait = {
	id: string;
	noId: number;
	name: string;
	description: string;
	mergeFrom: {
		consist: string[];
	}[];
	traitCategories: (keyof typeof TraitCategory)[];
};
