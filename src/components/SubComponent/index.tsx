import type { ITEM_CATEGORY, TRAIT_CATEGORY } from '@prisma/client';
import type { SelectOptionItem } from '@root/types/common';
import type { UnicodeClass } from '@root/types/fonts/atelier';

const TraitCategoryMap = [
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
] as const satisfies Readonly<
	{
		code: TRAIT_CATEGORY;
		name: string;
		className: UnicodeClass;
	}[]
>;

export const ItemCategorySelectList = [
	{
		value: 'PLANT',
		label: 'Plant',
	},
	{
		value: 'MEDICINE_MAT',
		label: 'Medicine Mat',
	},
	{
		value: 'WATER',
		label: 'Water',
	},
	{
		value: 'IMPORTANT',
		label: 'Important',
	},
	{
		value: 'BOMB',
		label: 'Bomb',
	},
	{
		value: 'MEDICINE',
		label: 'Medicine',
	},
	{
		value: 'FOOD',
		label: 'Food',
	},
	{
		value: 'SWEETS',
		label: 'Sweets',
	},
	{
		value: 'CLOTH',
		label: 'Cloth',
	},
	{
		value: 'NEUTRALIZER',
		label: 'Neutralizer',
	},
	{
		value: 'WEAPON_MAT',
		label: 'Weapon Mat',
	},
	{
		value: 'ARMOR_MAT',
		label: 'Armor Mat',
	},
	{
		value: 'WEAPON',
		label: 'Weapon',
	},
	{
		value: 'ARMOR',
		label: 'Armor',
	},
	{
		value: 'ACCESSORY',
		label: 'Accessory',
	},
	{
		value: 'POISON_MAT',
		label: 'Poison Mat',
	},
	{
		value: 'SECRET_POWER',
		label: 'Secret Power',
	},
	{
		value: 'FUEL',
		label: 'Fuel',
	},
	{
		value: 'THREAD',
		label: 'Thread',
	},
	{
		value: 'WOOD',
		label: 'Wood',
	},
	{
		value: 'ELIXIR',
		label: 'Elixir',
	},
	{
		value: 'ORE',
		label: 'Ore',
	},
	{
		value: 'GUNPOWDER',
		label: 'Gunpowder',
	},
	{
		value: 'GEM',
		label: 'Gem',
	},
	{
		value: 'METAL',
		label: 'Metal',
	},
	{
		value: 'CLAY',
		label: 'Clay',
	},
	{
		value: 'ANIMAL',
		label: 'Animal',
	},
	{
		value: 'INGREDIENT',
		label: 'Ingredient',
	},
	{
		value: 'PAPER',
		label: 'Paper',
	},
	{
		value: 'MAGIC_ITEM',
		label: 'Magic Item',
	},
] as const satisfies Readonly<SelectOptionItem<ITEM_CATEGORY>[]>;

export const defaultTraitCategorySelect = {
	value: null,
	label: '-----------------',
	icon: <span className='h-4 w-4 xl:h-5 xl:w-5' aria-hidden='true' />,
};

export const TraitCategorySelectList = [
	defaultTraitCategorySelect,
	...TraitCategoryMap.map(({ code, name, className }) => ({
		label: name,
		value: code,
		icon: <span className={`h-4 w-4 xl:h-5 xl:w-5 ${className}`} aria-hidden='true' />,
	})),
] satisfies SelectOptionItem<TRAIT_CATEGORY | null>[];
