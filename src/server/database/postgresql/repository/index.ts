import 'server-only';

import { DEFAULT_LIMIT, sortByMap } from '@root/constants/common';
import {
	getAllBookmarksQuery,
	getBookmarksQueriesMap,
	getToggleBookmarkQuery,
	postgresql,
} from '@root/server/database/postgresql';
import type { CommonRecord, User } from '@root/server/database/postgresql/schema';
import { users } from '@root/server/database/postgresql/schema';
import type { APIResult, ImprovePick } from '@root/types/common';
import { APIError } from '@root/types/common';
import type { BookmarkQuery, ModuleIdQuery, SearchQuery, SortByEnum } from '@root/types/common/zod';
import { arrayInclude, deleteNullableProperty, tryCatchHandler } from '@root/utils/common';
import { getSessionUser } from '@root/utils/server';
import type { SQL, sql } from 'drizzle-orm';
import { arrayOverlaps, eq } from 'drizzle-orm';
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

export const checkUserExist = (username: string) =>
	postgresql.query.users
		.findFirst({
			where: eq(users.username, username),
		})
		.then(value => Boolean(value))
		.catch(() => false);

type InsertOrUpdateUserProps =
	| {
			userData: ImprovePick<User, 'email' | 'username' | 'githubProfile'>;
			isUpdate: false;
	  }
	| {
			userData: ImprovePick<
				User,
				'username',
				| 'email'
				| 'githubProfile'
				| 'bookmarkedEffectList'
				| 'bookmarkedItemList'
				| 'bookmarkedRumorList'
				| 'bookmarkedTraitList'
			>;
			isUpdate: true;
	  };

export const insertOrUpdateUser = async ({ isUpdate, userData }: InsertOrUpdateUserProps) => {
	if (isUpdate || (await checkUserExist(userData.username))) {
		return await postgresql
			.update(users)
			.set(deleteNullableProperty(userData))
			.where(eq(users.username, userData.username))
			.returning()
			.then(res => res[0]);
	}

	return await postgresql
		.insert(users)
		.values(deleteNullableProperty(userData))
		.returning()
		.then(res => res[0]);
};

const onGetBookmarks = async (moduleId: ModuleIdQuery['moduleId'], username: string) =>
	Object.values((await getBookmarksQueriesMap[moduleId].execute({ username })) || {})[0];

export const getModuleBookmarks = async ({ moduleId }: ModuleIdQuery) => {
	const userSessionRes = await getSessionUser();

	if (!userSessionRes.isSuccess) return userSessionRes;

	const getModuleBookmarkRes = await tryCatchHandler(onGetBookmarks(moduleId, userSessionRes.result.name));

	if (!getModuleBookmarkRes.isSuccess)
		return {
			isSuccess: false as const,
			result: null,
			error: new APIError({ code: 'INTERNAL_SERVER_ERROR' }),
		} satisfies APIResult;

	if (!getModuleBookmarkRes.data)
		return {
			isSuccess: false as const,
			result: null,
			error: new APIError({ code: 'NOT_FOUND', message: 'User not found' }),
		} satisfies APIResult;

	return {
		isSuccess: true as const,
		result: getModuleBookmarkRes.data,
		error: null,
	} satisfies APIResult;
};

export const getAllBookmarks = async () => {
	const userSessionRes = await getSessionUser();

	if (!userSessionRes.isSuccess) return userSessionRes;

	const getAllBookmarkRes = await tryCatchHandler(
		getAllBookmarksQuery.execute({ username: userSessionRes.result.name }),
	);

	if (!getAllBookmarkRes.data)
		return {
			isSuccess: false as const,
			result: null,
			error: new APIError({ code: 'NOT_FOUND', message: 'User not found' }),
		} satisfies APIResult;

	return {
		isSuccess: true as const,
		result: getAllBookmarkRes.data,
		error: null,
	} satisfies APIResult;
};

export const bookmarkRecord = async ({ bookmarkRecordId, isBookmarked, moduleId }: BookmarkQuery) => {
	const userSessionRes = await getSessionUser();

	if (!userSessionRes.isSuccess) throw userSessionRes.error;

	const bookmarkRes = await tryCatchHandler(
		postgresql.execute(
			getToggleBookmarkQuery({
				bookmarkRecordId,
				isBookmarked,
				moduleId,
				username: userSessionRes.result.name,
			}),
		),
	);

	if (!bookmarkRes.isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR' });

	return bookmarkRes.data;
};
