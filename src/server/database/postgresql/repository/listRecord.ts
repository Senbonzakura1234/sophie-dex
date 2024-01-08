import 'server-only';

import { DEFAULT_LIMIT, sortByMap } from '@root/constants/common';
import { postgresql } from '@root/server/database/postgresql';
import type { CommonRecord } from '@root/server/database/postgresql/schema';
import { APIError } from '@root/types/common';
import type { SearchQuery, SortByEnum } from '@root/types/common/zod';
import { arrayInclude, tryCatchHandler } from '@root/utils/common';
import type { SQL, sql } from 'drizzle-orm';
import { arrayOverlaps } from 'drizzle-orm';
import type { PgRelationalQuery } from 'drizzle-orm/pg-core/query-builders/query';

const countQueryFunc = (_: unknown, { sql: sqlFunc }: { sql: typeof sql }) => ({
	totalRecord: sqlFunc<number>`count(*) over()`.as('total_record'),
});

const getOffset = (page: number | null) => ((page ?? 1) - 1) * DEFAULT_LIMIT;

const getSortField = <TSearch extends Readonly<SortByEnum>>(
	allowedSortField: Readonly<Array<TSearch>>,
	defaultSortField: TSearch,
	search: SortByEnum | null,
) => (arrayInclude(allowedSortField, search) ? search : defaultSortField);

const getListRecord = async <TRecord extends CommonRecord>(
	query: PgRelationalQuery<Array<TRecord & { totalRecord: number }>>,
	search: string | null,
) => {
	const { data, isSuccess } = await tryCatchHandler(query);

	if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR' });

	const [totalRecord, records] = [
		data[0]?.totalRecord ?? 0,
		data.map(({ totalRecord: _, ...record }) => record),
	] as const;

	return { records, totalRecord, totalPage: Math.ceil(totalRecord / DEFAULT_LIMIT), search: search || undefined };
};

export const getEffects = async (input: SearchQuery) => {
	const { search, sortBy, direction, page } = input;

	const query = postgresql.query.effects.findMany({
		extras: countQueryFunc,
		limit: DEFAULT_LIMIT,
		orderBy: (schema, { asc, desc }) => [
			{ asc, desc }[direction || 'asc'](schema[getSortField(sortByMap.effect, 'index', sortBy)]),
		],
		offset: getOffset(page),
		where: (schema, { or, ilike }) =>
			or(
				...(search
					? [
							ilike(schema.name, `%${search}%`),
							ilike(schema.description, `%${search}%`),
							ilike(schema.keyWords, `%${search}%`),
						]
					: []),
			),
	});

	return getListRecord(query, search);
};

export const getItems = async (input: SearchQuery) => {
	const { search, sortBy, direction, color, relatedCategory, page, category, recipeType } = input;

	const query = postgresql.query.items.findMany({
		extras: (_, { sql }) => ({ totalRecord: sql<number>`count(*) over()`.as('total_record') }),
		limit: DEFAULT_LIMIT,
		orderBy: (schema, { asc, desc }) => [
			{ asc, desc }[direction || 'asc'](schema[getSortField(sortByMap.item, 'index', sortBy)]),
		],
		offset: getOffset(page),
		where: (schema, { or, and, ilike, eq }) => {
			const OR: Array<SQL> = search
				? [ilike(schema.name, `%${search}%`), ilike(schema.keyWords, `%${search}%`)]
				: [];

			const AND: Array<SQL> = [];
			if (relatedCategory) AND.push(arrayOverlaps(schema.relatedCategories, [relatedCategory]));
			if (color) AND.push(eq(schema.color, color));
			if (recipeType) AND.push(eq(schema.recipeType, recipeType));
			if (category) AND.push(eq(schema.category, category));

			return and(or(...OR), ...AND);
		},
	});

	return getListRecord(query, search);
};

export const getRumors = async (input: SearchQuery) => {
	const { search, sortBy, direction, page, rumorType } = input;

	const query = postgresql.query.rumors.findMany({
		extras: countQueryFunc,
		limit: DEFAULT_LIMIT,
		orderBy: (schema, { asc, desc }) => [
			{ asc, desc }[direction || 'asc'](schema[getSortField(sortByMap.rumor, 'price', sortBy)]),
		],
		offset: getOffset(page),
		where: (schema, { or, and, ilike, eq }) => {
			const OR: Array<SQL> = search
				? [ilike(schema.name, `%${search}%`), ilike(schema.keyWords, `%${search}%`)]
				: [];

			const AND: Array<SQL> = [];
			if (rumorType) AND.push(eq(schema.rumorType, rumorType));

			return and(or(...OR), ...AND);
		},
	});

	return getListRecord(query, search);
};

export const getTraits = async (input: SearchQuery) => {
	const { search, sortBy, direction, category, page } = input;

	const query = postgresql.query.traits.findMany({
		extras: countQueryFunc,
		limit: DEFAULT_LIMIT,
		orderBy: (schema, { asc, desc }) => [
			{ asc, desc }[direction || 'asc'](schema[getSortField(sortByMap.trait, 'index', sortBy)]),
		],
		offset: getOffset(page),
		where: (schema, { or, and, ilike }) => {
			const OR: Array<SQL> = search
				? [
						ilike(schema.name, `%${search}%`),
						ilike(schema.description, `%${search}%`),
						ilike(schema.keyWords, `%${search}%`),
					]
				: [];

			const AND: Array<SQL> = [];
			if (category) AND.push(arrayOverlaps(schema.categories, [category]));

			return and(or(...OR), ...AND);
		},
	});

	return getListRecord(query, search);
};
