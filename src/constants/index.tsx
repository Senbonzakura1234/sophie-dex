import type { AlertTypeEnum, AppleMediaConfig, ServerErrorEnum } from '@root/types/common';
import type { AtelierIcon } from '@root/types/common/icon';
import type {
	CategoryEnum,
	ColorEnum,
	DaisyUIThemeEnum,
	ModuleIdEnum,
	RecipeTypeEnum,
	RumorTypeEnum,
	SortByEnum,
} from '@root/types/common/zod';

export const APP_NAME = 'Sophie Dex';
export const APP_DESCRIPTION = 'Atelier Sophie: The Alchemist of the Mysterious Book DX - Wiki';
export const APP_KEYWORD = ['Atelier', 'Wiki', 'Sophie', 'Mysterious', 'DX'];
export const APP_AUTHOR = 'Senbonzakura1234';
export const APP_VERSION = 'v17.1.1';

export const defaultLimit = 16;

export const DEFAULT_MAXIMUM_PULL_LENGTH = 240;
export const DEFAULT_REFRESH_THRESHOLD = 180;

export const colorTWClassMap = {
	BLUE: 'text-blue-500',
	GREEN: 'text-green-500',
	RED: 'text-red-500',
	WHITE: 'text-slate-500',
	YELLOW: 'text-yellow-500',
} as const satisfies Record<ColorEnum, string>;

export const alertTypeColorMap = {
	ERROR: 'RED',
	INFO: 'BLUE',
	SUCCESS: 'GREEN',
	WARN: 'YELLOW',
} as const satisfies Record<AlertTypeEnum, ColorEnum>;

export const recipeTypeColorMap = {
	BEGINNER_RECIPES: 'RED',
	GROWTH_RECIPES: 'BLUE',
	HOPE_RECIPES: 'GREEN',
	DREAM_RECIPES: 'YELLOW',
	MYSTERY_RECIPES: 'WHITE',
} as const satisfies Record<RecipeTypeEnum, ColorEnum>;

export const rumorTypeColorMap = {
	MONSTER: colorTWClassMap['RED'],
	MATERIAL: colorTWClassMap['GREEN'],
} as const satisfies Record<RumorTypeEnum, string>;

export const rumorColorMap = {
	MONSTER: 'RED',
	MATERIAL: 'GREEN',
} as const satisfies Record<RumorTypeEnum, ColorEnum>;

export const metaThemeColorMap = {
	autumn: 'rgb(140, 3, 39)',
	fantasy: 'rgb(110, 11, 117)',
	forest: 'rgb(30, 184, 84)',
	synthwave: 'rgb(231, 121, 193)',
	wireframe: 'rgb(184, 184, 184)',
} as const satisfies Record<DaisyUIThemeEnum, string>;

export const sortByMap = {
	effect: ['index', 'name'],
	item: ['index', 'level', 'name'],
	rumor: ['price', 'name'],
	trait: ['index', 'name'],
} as const satisfies Record<ModuleIdEnum, Readonly<Array<SortByEnum>>>;

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

export const appleMediaConfig: AppleMediaConfig = [
	{
		url: 'iPhone_14_Pro_Max_landscape',
	},
	{
		url: 'iPhone_14_Pro_Max_landscape',
		media: { width: 430, height: 932, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_14_Pro_landscape',
		media: { width: 393, height: 852, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape',
		media: { width: 428, height: 926, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape',
		media: { width: 390, height: 844, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape',
		media: { width: 375, height: 812, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_11_Pro_Max__iPhone_XS_Max_landscape',
		media: { width: 414, height: 896, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_11__iPhone_XR_landscape',
		media: { width: 414, height: 896, ratio: 2, orientation: 'landscape' },
	},
	{
		url: 'iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape',
		media: { width: 414, height: 736, ratio: 3, orientation: 'landscape' },
	},
	{
		url: 'iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape',
		media: { width: 375, height: 667, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape',
		media: { width: 320, height: 568, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '12.9__iPad_Pro_landscape',
		media: { width: 1024, height: 1366, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '11__iPad_Pro__10.5__iPad_Pro_landscape',
		media: { width: 834, height: 1194, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '10.9__iPad_Air_landscape',
		media: { width: 820, height: 1180, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '10.5__iPad_Air_landscape',
		media: { width: 834, height: 1112, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '10.2__iPad_landscape',
		media: { width: 810, height: 1080, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape',
		media: { width: 768, height: 1024, ratio: 2, orientation: 'landscape' },
	},
	{
		url: '8.3__iPad_Mini_landscape',
		media: { width: 744, height: 1133, ratio: 2, orientation: 'landscape' },
	},
	{
		url: 'iPhone_14_Pro_Max_portrait',
		media: { width: 430, height: 932, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_14_Pro_portrait',
		media: { width: 393, height: 852, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait',
		media: { width: 428, height: 926, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait',
		media: { width: 390, height: 844, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait',
		media: { width: 375, height: 812, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_11_Pro_Max__iPhone_XS_Max_portrait',
		media: { width: 414, height: 896, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_11__iPhone_XR_portrait',
		media: { width: 414, height: 896, ratio: 2, orientation: 'portrait' },
	},
	{
		url: 'iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait',
		media: { width: 414, height: 736, ratio: 3, orientation: 'portrait' },
	},
	{
		url: 'iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait',
		media: { width: 375, height: 667, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait',
		media: { width: 320, height: 568, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '12.9__iPad_Pro_portrait',
		media: { width: 1024, height: 1366, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '11__iPad_Pro__10.5__iPad_Pro_portrait',
		media: { width: 834, height: 1194, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '10.9__iPad_Air_portrait',
		media: { width: 820, height: 1180, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '10.5__iPad_Air_portrait',
		media: { width: 834, height: 1112, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '10.2__iPad_portrait',
		media: { width: 810, height: 1080, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait',
		media: { width: 768, height: 1024, ratio: 2, orientation: 'portrait' },
	},
	{
		url: '8.3__iPad_Mini_portrait',
		media: { width: 744, height: 1133, ratio: 2, orientation: 'portrait' },
	},
];

export const ServerErrorMap = {
	BAD_REQUEST: { message: 'Invalid Parameters', code: 400 },
	INTERNAL_SERVER_ERROR: { message: 'Some Thing Wrong Server.', code: 500 },
	NOT_FOUND: { message: 'Content Not Found', code: 404 },
} as const satisfies Record<ServerErrorEnum, { code: number; message: string }>;
