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
import colors from 'tailwindcss/colors';

export const APP_NAME = 'Sophie Dex';
export const APP_DESCRIPTION = 'Atelier Sophie: The Alchemist of the Mysterious Book DX - Wiki';
export const APP_KEYWORD = 'Atelier, Wiki, Sophie, Mysterious, DX';
export const APP_AUTHOR = 'Senbonzakura1234';
export const APP_VERSION = 'sophie-dex@13.1.1';

export const defaultLimit = 16;
export const defaultListData = createArray(defaultLimit, { data: undefined, isDataReady: false as const });

export const colorFilterMap = {
	BLUE: { primary: colors.blue[500], secondary: colors.blue[600] },
	GREEN: { primary: colors.green[500], secondary: colors.green[600] },
	RED: { primary: colors.red[500], secondary: colors.red[600] },
	WHITE: { primary: colors.slate[500], secondary: colors.slate[600] },
	YELLOW: { primary: colors.yellow[500], secondary: colors.yellow[600] },
} as const satisfies Record<ColorEnum, { primary: string; secondary: string }>;

export const recipeTypeColorMap = {
	BEGINNER_RECIPES: colorFilterMap['RED'],
	GROWTH_RECIPES: colorFilterMap['BLUE'],
	HOPE_RECIPES: colorFilterMap['GREEN'],
	DREAM_RECIPES: colorFilterMap['YELLOW'],
	MYSTERY_RECIPES: colorFilterMap['WHITE'],
} as const satisfies Record<RecipeTypeEnum, (typeof colorFilterMap)[keyof typeof colorFilterMap]>;

export const rumorTypeColorMap = {
	MONSTER: colorFilterMap['RED'],
	MATERIAL: colorFilterMap['GREEN'],
} as const satisfies Record<RumorTypeEnum, (typeof colorFilterMap)[keyof typeof colorFilterMap]>;

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
