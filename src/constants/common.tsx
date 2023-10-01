import type { AlertTypeEnum } from '@root/types/common';
import type { AtelierIcon } from '@root/types/common/icon';
import type {
	CategoryEnum,
	ColorEnum,
	DaisyUIThemeEnum,
	ErrorEnum,
	ModuleIdEnum,
	RecipeTypeEnum,
	RumorTypeEnum,
	SortByEnum,
} from '@root/types/common/zod';
import { env } from '@root/utils/common/env.mjs';
import { capitalize, replaceAll } from 'string-ts';

export const APP_CODE = env.NEXT_PUBLIC_APP_CODE;
export const APP_AUTHOR = env.NEXT_PUBLIC_APP_AUTHOR;
export const APP_PATH = `${APP_AUTHOR}/${APP_CODE}`;
export const APP_NAME = capitalize(replaceAll(APP_CODE, '-', ' '));
export const APP_KEYWORD = env.NEXT_PUBLIC_APP_KEYWORD;
export const APP_AUTHOR_EMAIL = env.NEXT_PUBLIC_APP_AUTHOR_EMAIL;

export const DEFAULT_LIMIT = 16;

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

export const errorMap = {
	PARSE_ERROR: { message: 'Invalid JSON From Client', status: 400 },
	BAD_REQUEST: { message: 'Bad Request', status: 400 },
	UNAUTHORIZED: { message: 'Unauthorized Request', status: 401 },
	NOT_FOUND: { message: 'Content Not Found', status: 404 },
	FORBIDDEN: { message: 'Forbidden Content', status: 403 },
	METHOD_NOT_SUPPORTED: { message: 'Method Not Supported', status: 405 },
	TIMEOUT: { message: 'Request Timeout', status: 408 },
	CONFLICT: { message: 'Request Conflict', status: 409 },
	PRECONDITION_FAILED: { message: 'Request Precondition Failed', status: 412 },
	PAYLOAD_TOO_LARGE: { message: 'Payload Request Too Large', status: 413 },
	UNPROCESSABLE_CONTENT: { message: 'Unprocessable Content', status: 422 },
	TOO_MANY_REQUESTS: { message: 'Too Many Requests', status: 429 },
	CLIENT_CLOSED_REQUEST: { message: 'Client Closed Request', status: 499 },
	INTERNAL_SERVER_ERROR: { message: 'Some Thing Wrong Server', status: 500 },
	NOT_IMPLEMENTED: { message: 'Some Thing Wrong Server', status: 501 },
} as const satisfies Record<ErrorEnum, { message: string; status: number }>;

export const listAboutPaths = ['about', 'profile', 'license'] as const;
