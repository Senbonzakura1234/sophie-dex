import type { AtelierIcon } from '@root/types/common/icon';
import type {
	CategoryEnum,
	ColorEnum,
	ModuleIdEnum,
	RecipeTypeEnum,
	RumorTypeEnum,
	SortByEnum,
} from '@root/types/common/zod';
import { createArray } from '@root/utils/common';

export const APP_NAME = 'Sophie Dex';
export const APP_DESCRIPTION = 'Atelier Sophie: The Alchemist of the Mysterious Book DX - Wiki';
export const APP_KEYWORD = 'Atelier, Wiki, Sophie, Mysterious, DX';
export const APP_AUTHOR = 'Senbonzakura1234';
export const APP_VERSION = 'sophie-dex@15.8.1';

export const defaultLimit = 16;
export const defaultListData = createArray(defaultLimit, { data: undefined, isDataReady: false as const });

export const DEFAULT_MAXIMUM_PULL_LENGTH = 240;
export const DEFAULT_REFRESH_THRESHOLD = 180;

export const colorFilterTWClassMap = {
	BLUE: 'text-blue-500',
	GREEN: 'text-green-500',
	RED: 'text-red-500',
	WHITE: 'text-slate-500',
	YELLOW: 'text-yellow-500',
} as const satisfies Record<ColorEnum, string>;

export const recipeTypeColorMap = {
	BEGINNER_RECIPES: 'RED',
	GROWTH_RECIPES: 'BLUE',
	HOPE_RECIPES: 'GREEN',
	DREAM_RECIPES: 'YELLOW',
	MYSTERY_RECIPES: 'WHITE',
} as const satisfies Record<RecipeTypeEnum, ColorEnum>;

export const rumorTypeColorMap = {
	MONSTER: colorFilterTWClassMap['RED'],
	MATERIAL: colorFilterTWClassMap['GREEN'],
} as const satisfies Record<RumorTypeEnum, string>;

export const rumorColorMap = {
	MONSTER: 'RED',
	MATERIAL: 'GREEN',
} as const satisfies Record<RumorTypeEnum, ColorEnum>;

export const sortByMap = {
	effect: ['index', 'name'],
	item: ['index', 'level', 'name'],
	rumor: ['price', 'name'],
	trait: ['index', 'name'],
} as const satisfies Record<ModuleIdEnum, Readonly<SortByEnum[]>>;

export const rumorTypeIconMap = {
	MATERIAL: 'atelier__material',
	MONSTER: 'atelier__race-puni',
} as const satisfies Record<RumorTypeEnum, AtelierIcon>;

export const categoryIconMap = {
	MATERIAL: 'atelier__material',
	SYNTHESIS: 'atelier__type-synthesis',
	WEAPON: 'atelier__type-weapon',
	ARMOR: 'atelier__type-armor',
	ATK_ITEM: 'atelier__type-attack',
	ACCESSORY: 'atelier__type-accessory',
	HEAL_ITEM: 'atelier__type-heal',
	KEY_ITEM: 'atelier__category-key-items',
	BUFF_ITEM: 'atelier__type-buff',
	DE_BUFF_ITEM: 'atelier__type-debuff',
	EXPLORATION: 'atelier__tool-gather',
	BOOK: 'atelier__book',
	MACHINE: 'atelier__category-neutralizers',
} as const satisfies Record<CategoryEnum, AtelierIcon>;
