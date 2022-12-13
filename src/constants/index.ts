import type { PageName } from '@root/types/common';
import type { SearchQuery } from '@root/types/common/zod';

export const APP_NAME = 'Sophie Dex';
export const APP_DESCRIPTION = 'Atelier Sophie: The Alchemist of the Mysterious Book - Wiki';
export const APP_KEYWORD = 'Atelier, Wiki, Sophie, Mysterious';

export const defaultLimit = '20';
export const defaultLimitInt = 20;

export const defaultSearchParam: SearchQuery = {
	search: null,
	sortBy: 'noId',
	direction: 'asc',
	itemCategory: null,
	traitCategory: null,
	color: null,
	cursor: null,
	limit: defaultLimit,
	page: '1',
};

export const idRegex = /^[0-9A-F]{24}$/i;

export const positiveIntRegex = /^[1-9]\d*$/;

export const PageNameList = ['Effect', 'Item', 'Trait'] as const satisfies Readonly<PageName[]>;
