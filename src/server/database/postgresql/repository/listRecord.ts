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

const processOutput = <TRecord extends CommonRecord>(dbResult: DBListResult<TRecord>, search: string | null) => {
	const [totalRecord, records] = [
		dbResult[0]?.totalRecord ?? 0,
		dbResult.map(({ totalRecord: _, ...record }) => record),
	] as const;

	return { records, totalRecord, totalPage: Math.ceil(totalRecord / DEFAULT_LIMIT), search: search || undefined };
};

export const getEffects = async (input: SearchQuery): Promise<ListRecord<Effect>> => {
	const { search, sortBy, direction, page } = input;

	try {
		const res = await postgresql.query.effects.findMany({
			extras: countQueryFunc,
			limit: DEFAULT_LIMIT,
			orderBy: (schema_1, { asc, desc }) => [
				{ asc, desc }[direction || 'asc'](schema_1[getSortField(sortByMap.effect, 'index', sortBy)]),
			],
			offset: getOffset(page),
			where: (schema_3, { or, ilike }) =>
				or(
					...(search
						? [
								ilike(schema_3.name, `%${search}%`),
								ilike(schema_3.description, `%${search}%`),
								ilike(schema_3.keyWords, `%${search}%`),
						  ]
						: []),
				),
		});
		return processOutput(res, search);
	} catch (error) {
		return onQueryDBError(error);
	}
};

export const getItems = async (input: SearchQuery): Promise<ListRecord<Item>> => {
	const { search, sortBy, direction, color, relatedCategory, page, category, recipeType } = input;

	try {
		const res = await postgresql.query.items.findMany({
			extras: (__1, { sql }) => ({ totalRecord: sql<number>`count(*) over()`.as('total_record') }),
			limit: DEFAULT_LIMIT,
			orderBy: (schema_1, { asc, desc }) => [
				{ asc, desc }[direction || 'asc'](schema_1[getSortField(sortByMap.item, 'index', sortBy)]),
			],
			offset: getOffset(page),
			where: (schema_3, { or, and, ilike, eq }) => {
				const OR: Array<SQL> = search
					? [ilike(schema_3.name, `%${search}%`), ilike(schema_3.keyWords, `%${search}%`)]
					: [];

				const AND: Array<SQL> = [];
				if (relatedCategory) AND.push(arrayOverlaps(schema_3.relatedCategories, [relatedCategory]));
				if (color) AND.push(eq(schema_3.color, color));
				if (recipeType) AND.push(eq(schema_3.recipeType, recipeType));
				if (category) AND.push(eq(schema_3.category, category));

				return and(or(...OR), ...AND);
			},
		});
		return processOutput(res, search);
	} catch (error) {
		return onQueryDBError(error);
	}
};

export const getRumors = async (input: SearchQuery): Promise<ListRecord<Rumor>> => {
	const { search, sortBy, direction, page, rumorType } = input;

	try {
		const res = await postgresql.query.rumors.findMany({
			extras: countQueryFunc,
			limit: DEFAULT_LIMIT,
			orderBy: (schema_1, { asc, desc }) => [
				{ asc, desc }[direction || 'asc'](schema_1[getSortField(sortByMap.rumor, 'price', sortBy)]),
			],
			offset: getOffset(page),
			where: (schema_3, { or, and, ilike, eq }) => {
				const OR: Array<SQL> = search
					? [ilike(schema_3.name, `%${search}%`), ilike(schema_3.keyWords, `%${search}%`)]
					: [];

				const AND: Array<SQL> = [];
				if (rumorType) AND.push(eq(schema_3.rumorType, rumorType));

				return and(or(...OR), ...AND);
			},
		});
		return processOutput(res, search);
	} catch (error) {
		return onQueryDBError(error);
	}
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
		.then(res => processOutput(res, search))
		.catch(onQueryDBError);
};
