import { colorTailwindMap, recipeTypeColorMap } from '@root/constants';
import type { SelectOptionItem } from '@root/types/common';
import type { CategoryEnum, ColorEnum, RecipeTypeEnum, RumorTypeEnum } from '@root/types/common/zod';
import type { UnicodeClass } from '@root/types/fonts/atelier';

export const hideCategoryOnTrait: Readonly<CategoryEnum[]> = ['KEY_ITEM', 'MACHINE', 'MATERIAL', 'BOOK'] as const;

export const categoryMap = new Map<CategoryEnum, { name: string; className: UnicodeClass }>([
	['MATERIAL', { name: 'Material', className: 'atelier__material' }],
	['SYNTHESIS', { name: 'Synthesis', className: 'atelier__type-synthesis' }],
	['WEAPON', { name: 'Weapon', className: 'atelier__type-weapon' }],
	['ARMOR', { name: 'Armor', className: 'atelier__type-armor' }],
	['ATK_ITEM', { name: 'Attack Item', className: 'atelier__type-attack' }],
	['ACCESSORY', { name: 'Accessory', className: 'atelier__type-accessory' }],
	['HEAL_ITEM', { name: 'Heal Item', className: 'atelier__type-heal' }],
	['KEY_ITEM', { name: 'Key Item', className: 'atelier__category-key-items' }],
	['BUFF_ITEM', { name: 'Buff Item', className: 'atelier__type-buff' }],
	['DE_BUFF_ITEM', { name: 'De-Buff Item', className: 'atelier__type-debuff' }],
	['EXPLORATION', { name: 'Exploration', className: 'atelier__tool-gather' }],
	['BOOK', { name: 'Book', className: 'atelier__book' }],
	['MACHINE', { name: 'Machine', className: 'atelier__category-neutralizers' }],
]);

export const rumorTypeMap = new Map<
	RumorTypeEnum,
	{ name: Capitalize<Lowercase<RumorTypeEnum>>; className: UnicodeClass }
>([
	['MATERIAL', { className: 'atelier__material', name: 'Material' }],
	['MONSTER', { className: 'atelier__race-puni', name: 'Monster' }],
]);

const colorMap = ['RED', 'BLUE', 'GREEN', 'YELLOW', 'WHITE'] satisfies ColorEnum[];

const recipeTypeMap = [
	'BEGINNER_RECIPES',
	'GROWTH_RECIPES',
	'HOPE_RECIPES',
	'DREAM_RECIPES',
	'MYSTERY_RECIPES',
] satisfies RecipeTypeEnum[];

export const categoryDefaultSelect = {
	value: null,
	label: 'Category',
	icon: <span className='h-4 w-4 2xl:h-5 2xl:w-5' aria-hidden='true' />,
};

export const colorDefaultSelect = {
	value: null,
	label: 'Color',
	icon: <span className='h-4 w-4 2xl:h-5 2xl:w-5' aria-hidden='true' />,
};

export const recipeTypeDefaultSelect = {
	value: null,
	label: 'Recipe type',
	icon: <span className='h-4 w-4 2xl:h-5 2xl:w-5' aria-hidden='true' />,
};

export const rumorTypeDefaultSelect = {
	value: null,
	label: 'Rumor type',
	icon: <span className='h-4 w-4 2xl:h-5 2xl:w-5' aria-hidden='true' />,
};

export const categorySelectList = [
	categoryDefaultSelect,
	...[...categoryMap].map(([code, { name, className }]) => ({
		label: name,
		value: code,
		icon: <span className={`h-4 w-4 2xl:h-5 2xl:w-5 ${className}`} aria-hidden='true' />,
	})),
] satisfies SelectOptionItem<CategoryEnum | null>[];

export const rumorTypeSelectList = [
	rumorTypeDefaultSelect,
	...[...rumorTypeMap].map(([code, { className, name }]) => ({
		label: <span>{name}</span>,
		value: code,
		icon: <span className={`h-4 w-4 2xl:h-5 2xl:w-5 ${className}`} aria-hidden='true' />,
	})),
] satisfies SelectOptionItem<RumorTypeEnum | null>[];

export const colorSelectList = [
	colorDefaultSelect,
	...colorMap.map(color => ({
		label: <span className='capitalize'>{color.toLocaleLowerCase()}</span>,
		value: color,
		icon: (
			<span
				style={{ color: colorTailwindMap[color] }}
				className='h-4 w-4 rounded-full bg-current shadow-current'
				aria-hidden='true'
			/>
		),
	})),
] satisfies SelectOptionItem<ColorEnum | null>[];

export const recipeTypeSelectList = [
	recipeTypeDefaultSelect,
	...recipeTypeMap.map(recipeType => ({
		label: <span className='capitalize'>{recipeType.toLocaleLowerCase().replaceAll('_', ' ')}</span>,
		value: recipeType,
		icon: (
			<span
				style={{ color: recipeTypeColorMap[recipeType] }}
				className='h-4 w-4 rounded-full bg-current shadow-current'
				aria-hidden='true'
			/>
		),
	})),
] satisfies SelectOptionItem<RecipeTypeEnum | null>[];
