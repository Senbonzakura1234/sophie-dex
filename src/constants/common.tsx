import type { AlertTypeEnum } from '@root/types/common';
import type { AtelierIcon } from '@root/types/common/icon';
import {
	type CategoryEnum,
	type ColorEnum,
	type ModuleIdEnum,
	type RecipeTypeEnum,
	type RumorTypeEnum,
	type SortByEnum,
	genericModuleIdEnumSchema
} from '@root/types/common/zod/generic';
import { capitalize } from '@root/utils/common';
import { env } from '@root/utils/common/env';
import type { DefaultOptions } from '@tanstack/react-query';
import type { TRPC_ERROR_CODE_KEY } from '@trpc/server/unstable-core-do-not-import';
import type { NextAuthConfig } from 'next-auth';

export const APP_NAME = capitalize(env.NEXT_PUBLIC_APP_CODE.replaceAll('-', ' '));
export const APP_DB_PREFIX = env.NEXT_PUBLIC_APP_CODE.replaceAll('-', '_');

export const DEFAULT_LIMIT = 16;

export const MAXIMUM_DB_ARRAY_FIELD_LENGTH = 1000;
export const MAXIMUM_BOOKMARK_LENGTH = MAXIMUM_DB_ARRAY_FIELD_LENGTH / 2;

export const colorTWClassMap = {
	BLUE: { background: 'text-blue-500', foreground: 'text-slate-950' },
	GREEN: { background: 'text-green-500', foreground: 'text-slate-950' },
	RED: { background: 'text-red-500', foreground: 'text-slate-950' },
	WHITE: { background: 'text-slate-500', foreground: 'text-slate-50' },
	YELLOW: { background: 'text-yellow-500', foreground: 'text-slate-950' }
} as const satisfies Record<ColorEnum, { background: string; foreground: string }>;

export const alertTypeColorMap = {
	ERROR: 'RED',
	INFO: 'BLUE',
	SUCCESS: 'GREEN',
	WARN: 'YELLOW'
} as const satisfies Record<AlertTypeEnum, ColorEnum>;

export const recipeTypeColorMap = {
	BEGINNER_RECIPES: 'RED',
	GROWTH_RECIPES: 'BLUE',
	HOPE_RECIPES: 'GREEN',
	DREAM_RECIPES: 'YELLOW',
	MYSTERY_RECIPES: 'WHITE'
} as const satisfies Record<RecipeTypeEnum, ColorEnum>;

export const rumorTypeColorMap = {
	MONSTER: colorTWClassMap['RED'],
	MATERIAL: colorTWClassMap['GREEN']
} as const satisfies Record<RumorTypeEnum, { background: string; foreground: string }>;

export const rumorColorMap = {
	MONSTER: 'RED',
	MATERIAL: 'GREEN'
} as const satisfies Record<RumorTypeEnum, ColorEnum>;

export const sortByMap = {
	effect: ['index', 'name'],
	item: ['index', 'level', 'name'],
	rumor: ['price', 'name'],
	trait: ['index', 'name']
} as const satisfies Record<ModuleIdEnum, Readonly<Array<SortByEnum>>>;

export const rumorTypeIconMap = {
	MATERIAL: 'atelier__material',
	MONSTER: 'atelier__race-puni'
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
	MACHINE: 'atelier__category-neutralizers'
} as const satisfies Record<CategoryEnum, AtelierIcon>;

export const errorMap = {
	// Request Error
	PARSE_ERROR: { message: 'Invalid JSON From Client', status: 400 },
	BAD_REQUEST: { message: 'Bad Request', status: 400 },
	UNAUTHORIZED: { message: 'Unauthorized Content', status: 401 },
	FORBIDDEN: { message: 'Forbidden Content', status: 403 },
	NOT_FOUND: { message: 'Content Not Found', status: 404 },
	METHOD_NOT_SUPPORTED: { message: 'Method Not Supported', status: 405 },
	TIMEOUT: { message: 'Request Timeout', status: 408 },
	CONFLICT: { message: 'Request Conflict', status: 409 },
	PRECONDITION_FAILED: { message: 'Request Precondition Failed', status: 412 },
	PAYLOAD_TOO_LARGE: { message: 'Payload Request Too Large', status: 413 },
	UNSUPPORTED_MEDIA_TYPE: { message: 'Unsupported Media Type', status: 415 },
	UNPROCESSABLE_CONTENT: { message: 'Unprocessable Content', status: 422 },
	TOO_MANY_REQUESTS: { message: 'Too Many Requests', status: 429 },
	CLIENT_CLOSED_REQUEST: { message: 'Client Closed Request', status: 499 },

	// Server Error
	INTERNAL_SERVER_ERROR: { message: 'Some Thing Wrong Server', status: 500 },
	NOT_IMPLEMENTED: { message: 'Some Thing Wrong Server', status: 501 },
	BAD_GATEWAY: { message: 'Bad Gateway', status: 502 },
	SERVICE_UNAVAILABLE: { message: 'Service Unavailable', status: 503 },
	GATEWAY_TIMEOUT: { message: 'Gateway Timeout', status: 504 }
} as const satisfies Record<TRPC_ERROR_CODE_KEY, { message: string; status: number }>;

export const listAboutPaths = ['about', 'license'] as const;

export const defaultTRPCQueryOptions: DefaultOptions = {
	queries: {
		refetchOnMount: false,
		refetchOnReconnect: env.NEXT_PUBLIC_NODE_ENV === 'production',
		refetchOnWindowFocus: false,
		retry: false
	}
};

export const KEY_BINDING_DICTIONARY = {
	THEME_COOKIE_KEY: 'theme-cookie',
	ROOT_SCROLL_WRAPPER_ID: 'root-scroll-wrapper'
} as const;

export const customPages = { signIn: '/signin' } as const satisfies Partial<NextAuthConfig['pages']>;

export const moduleIdList = genericModuleIdEnumSchema._def.values;
