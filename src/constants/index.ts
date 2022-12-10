import type { SearchQuery } from '@root/types/common/zod';

export const defaultSearchParam: SearchQuery = {
	search: null,
	sortBy: 'noId',
	direction: 'asc',
	itemCategory: null,
	traitCategory: null,
	color: null,
	cursor: null,
	limit: '10',
	page: '1',
};

export const idRegex = /^[0-9A-F]{24}$/i;