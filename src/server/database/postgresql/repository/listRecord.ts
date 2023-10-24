import 'server-only';

import { DEFAULT_LIMIT, sortByMap } from '@root/constants/common';
import { postgresql } from '@root/server/database/postgresql';
import type { CommonRecord, Effect, Item, Rumor, Trait } from '@root/server/database/postgresql/schema';
import type { SearchQuery, SortByEnum } from '@root/types/common/zod';
import type { DBListResult, ListRecord } from '@root/types/model';
import { arrayInclude } from '@root/utils/common';
import { onQueryDBError } from '@root/utils/server/database';
import type { SQL, sql } from 'drizzle-orm';
import { arrayOverlaps } from 'drizzle-orm';

const countQueryFunc = (_: unknown, { sql: sqlFunc }: { sql: typeof sql }) => ({
	totalRecord: sqlFunc<number>`count(*) over()`.as('total_record'),
});

const getOffset = (page: number | null) => ((page ?? 1) - 1) * DEFAULT_LIMIT;

const getSortField = <TSearch extends Readonly<SortByEnum>>(
	allowedSortField: Readonly<Array<TSearch>>,
	defaultSortField: TSearch,
	search: SortByEnum | null,
) => (arrayInclude(allowedSortField, search) ? search : defaultSortField);

const processOutput = <TRecord extends CommonRecord>(dbResult: DBListResult<TRecord>) => {
	const [totalRecord, records] = [
		dbResult[0]?.totalRecord ?? 0,
		dbResult.map(({ totalRecord: _, ...record }) => record),
	] as const;

	return { records: records, totalRecord, totalPage: Math.ceil(totalRecord / DEFAULT_LIMIT) };
};

export const getEffects = (input: SearchQuery): Promise<ListRecord<Effect>> => {
	const { search, sortBy, direction, page } = input;

	return postgresql.query.effects
		.findMany({
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
		})
		.then(processOutput)
		.catch(onQueryDBError);
};

export const getItems = (input: SearchQuery): Promise<ListRecord<Item>> => {
	const { search, sortBy, direction, color, relatedCategory, page, category, recipeType } = input;

	return postgresql.query.items
		.findMany({
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
		})
		.then(processOutput)
		.catch(onQueryDBError);
};

export const getRumors = (input: SearchQuery): Promise<ListRecord<Rumor>> => {
	const { search, sortBy, direction, page, rumorType } = input;

	return postgresql.query.rumors
		.findMany({
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
		})
		.then(processOutput)
		.catch(onQueryDBError);
};

export const getTraits = async (input: SearchQuery): Promise<ListRecord<Trait>> => {
	const { search, sortBy, direction, category, page } = input;

	return await postgresql.query.traits
		.findMany({
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
		})
		.then(processOutput)
		.catch(onQueryDBError);
};