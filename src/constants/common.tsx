import type { APIError, AlertTypeEnum } from '@root/types/common';
import type { AtelierIcon } from '@root/types/common/icon';
import type {
	CategoryEnum,
	ColorEnum,
	ModuleIdEnum,
	RecipeTypeEnum,
	RumorTypeEnum,
	SortByEnum,
} from '@root/types/common/zod';
import { evnIs } from '@root/utils/common';
import type { DefaultOptions } from '@tanstack/react-query';

export const DEFAULT_LIMIT = 16;

export const MAXIMUM_DB_ARRAY_FIELD_LENGTH = 100 as const;
export const MAXIMUM_BOOKMARK_LENGTH = MAXIMUM_DB_ARRAY_FIELD_LENGTH / 2;

export const colorTWClassMap = {
	BLUE: { background: 'text-blue-500', foreground: 'text-slate-950' },
	GREEN: { background: 'text-green-500', foreground: 'text-slate-950' },
	RED: { background: 'text-red-500', foreground: 'text-slate-950' },
	WHITE: { background: 'text-slate-500', foreground: 'text-slate-50' },
	YELLOW: { background: 'text-yellow-500', foreground: 'text-slate-950' },
} as const satisfies Record<ColorEnum, { background: string; foreground: string }>;

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
} as const satisfies Record<RumorTypeEnum, { background: string; foreground: string }>;

export const rumorColorMap = {
	MONSTER: 'RED',
	MATERIAL: 'GREEN',
} as const satisfies Record<RumorTypeEnum, ColorEnum>;

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
	UNSUPPORTED_MEDIA_TYPE: { message: 'Unsupported Media Type', status: 415 },
} as const satisfies Record<APIError['code'], { message: string; status: number }>;

export const listAboutPaths = ['about', 'license'] as const;

export const defaultTRPCQueryOptions: DefaultOptions = {
	queries: {
		refetchOnMount: false,
		refetchOnReconnect: evnIs('production'),
		refetchOnWindowFocus: false,
		retry: evnIs('production') ? 2 : 1,
	},
};
