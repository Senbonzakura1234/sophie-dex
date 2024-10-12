import { env } from '@root/utils/common/env';
if (env.NEXT_PUBLIC_NODE_ENV !== 'script') void import('server-only');

import { DEFAULT_LIMIT, sortByMap } from '@root/constants/common';
import {
	exportDBQueriesMap,
	getBookmarksQueriesMap,
	getToggleBookmarkQuery,
	getUserRecordQuery,
	postgresql
} from '@root/server/postgresql/repository';
import type { CommonRecord, Effect, Item, Rumor, Trait, User } from '@root/server/postgresql/schema';
import { effects, items, rumors, traits, users } from '@root/server/postgresql/schema';
import type { APIResult, ImprovePick } from '@root/types/common';
import { APIError } from '@root/types/common';
import type { BookmarkQuery, GithubUserInfo, ModuleIdQuery, SearchQuery } from '@root/types/common/zod';
import type { ModuleIdEnum, SortByEnum } from '@root/types/common/zod/generic';
import { arrayInclude, deleteNullableProperty, entries, objectValues, tryCatchHandler } from '@root/utils/common';
import type { SessionResult } from '@root/utils/server';
import dayjs from 'dayjs';
import type { AnyColumn, SQL, SQLWrapper } from 'drizzle-orm';
import { and, arrayOverlaps, asc, count, desc, eq, ilike, inArray, or } from 'drizzle-orm';
import type { PgColumn, PgSelect } from 'drizzle-orm/pg-core';
import { writeFile } from 'fs/promises';

// ======================================= 				Helper Section 				=======================================
const getWhereClause = (AND: Array<SQL>, OR: Array<SQL>) => and(or(...OR), ...AND);

const getOrderBy = (direction: SearchQuery['direction'], column: AnyColumn | SQLWrapper) =>
	({ asc, desc })[direction || 'asc'](column);

const getSortField = <TSearch extends Readonly<SortByEnum>>(
	allowedSortField: Readonly<Array<TSearch>>,
	defaultSortField: TSearch,
	sortBy: SortByEnum | null
) => (arrayInclude(allowedSortField, sortBy) ? sortBy : defaultSortField);

const withPagination = <TQuery extends PgSelect>(
	query: TQuery,
	orderByColumn: PgColumn | SQL | SQL.Aliased,
	page: number | null,
	pageSize = DEFAULT_LIMIT
) =>
	query
		.orderBy(orderByColumn)
		.limit(pageSize)
		.offset(((page ?? 1) - 1) * pageSize);

type GetListRecordProp<TRecord extends CommonRecord> =
	| { data: [Array<{ count: number }>, Array<TRecord>]; isEmptyResult?: false }
	| { isEmptyResult: true };

const getListRecord = async <TRecord extends CommonRecord>(args: GetListRecordProp<TRecord>) => {
	if (args.isEmptyResult) return { records: [], totalRecord: 0, totalPage: 0 };

	const {
		data: [countRes, records]
	} = args;

	const totalRecord = countRes[0]?.count || 0;

	return { records, totalRecord, totalPage: Math.ceil(totalRecord / DEFAULT_LIMIT) };
};

const sanitizeSearch = (input: string | null) =>
	input?.split(' ')?.filter(Boolean)?.join(' ').replaceAll('?', '') || null;

// =======================================  		   	Query Section 				   =======================================

export const getEffects = async (input: SearchQuery, { isAuthenticated, session }: SessionResult) => {
	const schema = effects;
	const moduleId: ModuleIdEnum = 'effect';

	const { search, sortBy, direction, page, bookmarked } = input;

	const searchValue = sanitizeSearch(search);

	let bookmarkList: Array<string> = [];

	let isEnableBookmarkFilter: typeof bookmarked = null;

	if (isAuthenticated && bookmarked === 'true') {
		isEnableBookmarkFilter = 'true';

		const bookmarkListRes = await getModuleBookmarks({ moduleId }, session);

		if (!bookmarkListRes.isSuccess) isEnableBookmarkFilter = null;

		if (bookmarkListRes.isSuccess) {
			if (bookmarkListRes.result.length === 0) return getListRecord<Effect>({ isEmptyResult: true });

			bookmarkList = bookmarkListRes.result;
		}
	}

	const OR: Array<SQL> = searchValue
		? [
				ilike(schema.name, `%${searchValue}%`),
				ilike(schema.description, `%${searchValue}%`),
				ilike(schema.keyWords, `%${searchValue}%`)
			]
		: [];

	const AND: Array<SQL> = [];
	if (isEnableBookmarkFilter === 'true') AND.push(inArray(schema.id, bookmarkList));

	const countQuery = postgresql.select({ count: count() }).from(schema).where(getWhereClause(AND, OR));

	const filterQuery = withPagination(
		postgresql.select().from(schema).where(getWhereClause(AND, OR)).$dynamic(),
		getOrderBy(direction, schema[getSortField(sortByMap[moduleId], sortByMap[moduleId][0], sortBy)]),
		page
	);

	const queryRes = await tryCatchHandler(
		Promise.all([countQuery.execute(), filterQuery.execute()]),
		'getListRecord.executeQuery'
	);

	if (!queryRes.isSuccess) return getListRecord<Effect>({ isEmptyResult: true });

	return getListRecord<Effect>({ data: queryRes.data });
};

export const getItems = async (input: SearchQuery, { isAuthenticated, session }: SessionResult) => {
	const schema = items;
	const moduleId: ModuleIdEnum = 'item';

	const { search, sortBy, direction, color, relatedCategory, page, category, recipeType, bookmarked } = input;

	const searchValue = sanitizeSearch(search);

	let bookmarkList: Array<string> = [];

	let isEnableBookmarkFilter: typeof bookmarked = null;

	if (isAuthenticated && bookmarked === 'true') {
		isEnableBookmarkFilter = 'true';

		const bookmarkListRes = await getModuleBookmarks({ moduleId }, session);

		if (!bookmarkListRes.isSuccess) isEnableBookmarkFilter = null;

		if (bookmarkListRes.isSuccess) {
			if (bookmarkListRes.result.length === 0) return getListRecord<Item>({ isEmptyResult: true });

			bookmarkList = bookmarkListRes.result;
		}
	}

	const OR: Array<SQL> = searchValue
		? [ilike(schema.name, `%${searchValue}%`), ilike(schema.keyWords, `%${searchValue}%`)]
		: [];

	const AND: Array<SQL> = [];
	if (relatedCategory) AND.push(arrayOverlaps(schema.relatedCategories, [relatedCategory]));
	if (color) AND.push(eq(schema.color, color));
	if (recipeType) AND.push(eq(schema.recipeType, recipeType));
	if (category) AND.push(eq(schema.category, category));
	if (isEnableBookmarkFilter === 'true') AND.push(inArray(schema.id, bookmarkList));

	const countQuery = postgresql.select({ count: count() }).from(schema).where(getWhereClause(AND, OR));

	const filterQuery = withPagination(
		postgresql.select().from(schema).where(getWhereClause(AND, OR)).$dynamic(),
		getOrderBy(direction, schema[getSortField(sortByMap[moduleId], sortByMap[moduleId][0], sortBy)]),
		page
	);

	const queryRes = await tryCatchHandler(
		Promise.all([countQuery.execute(), filterQuery.execute()]),
		'getListRecord.executeQuery'
	);

	if (!queryRes.isSuccess) return getListRecord<Item>({ isEmptyResult: true });

	return getListRecord<Item>({ data: queryRes.data });
};

export const getRumors = async (input: SearchQuery, { isAuthenticated, session }: SessionResult) => {
	const schema = rumors;
	const moduleId: ModuleIdEnum = 'rumor';

	const { search, sortBy, direction, page, rumorType, bookmarked } = input;

	const searchValue = sanitizeSearch(search);

	let bookmarkList: Array<string> = [];

	let isEnableBookmarkFilter: typeof bookmarked = null;

	if (isAuthenticated && bookmarked === 'true') {
		isEnableBookmarkFilter = 'true';

		const bookmarkListRes = await getModuleBookmarks({ moduleId }, session);

		if (!bookmarkListRes.isSuccess) isEnableBookmarkFilter = null;

		if (bookmarkListRes.isSuccess) {
			if (bookmarkListRes.result.length === 0) return getListRecord<Rumor>({ isEmptyResult: true });

			bookmarkList = bookmarkListRes.result;
		}
	}

	const OR: Array<SQL> = searchValue
		? [ilike(schema.name, `%${searchValue}%`), ilike(schema.keyWords, `%${searchValue}%`)]
		: [];

	const AND: Array<SQL> = [];
	if (rumorType) AND.push(eq(schema.rumorType, rumorType));
	if (isEnableBookmarkFilter === 'true') AND.push(inArray(schema.id, bookmarkList));

	const countQuery = postgresql.select({ count: count() }).from(schema).where(getWhereClause(AND, OR));

	const filterQuery = withPagination(
		postgresql.select().from(schema).where(getWhereClause(AND, OR)).$dynamic(),
		getOrderBy(direction, schema[getSortField(sortByMap[moduleId], sortByMap[moduleId][0], sortBy)]),
		page
	);

	const queryRes = await tryCatchHandler(
		Promise.all([countQuery.execute(), filterQuery.execute()]),
		'getListRecord.executeQuery'
	);

	if (!queryRes.isSuccess) return getListRecord<Rumor>({ isEmptyResult: true });

	return getListRecord<Rumor>({ data: queryRes.data });
};

export const getTraits = async (input: SearchQuery, { isAuthenticated, session }: SessionResult) => {
	const schema = traits;
	const moduleId: ModuleIdEnum = 'trait';

	const { search, sortBy, direction, category, page, bookmarked } = input;

	const searchValue = sanitizeSearch(search);

	let bookmarkList: Array<string> = [];

	let isEnableBookmarkFilter: typeof bookmarked = null;

	if (isAuthenticated && bookmarked === 'true') {
		isEnableBookmarkFilter = 'true';

		const bookmarkListRes = await getModuleBookmarks({ moduleId }, session);

		if (!bookmarkListRes.isSuccess) isEnableBookmarkFilter = null;

		if (bookmarkListRes.isSuccess) {
			if (bookmarkListRes.result.length === 0) return getListRecord<Trait>({ isEmptyResult: true });

			bookmarkList = bookmarkListRes.result;
		}
	}

	const OR: Array<SQL> = searchValue
		? [
				ilike(schema.name, `%${searchValue}%`),
				ilike(schema.description, `%${searchValue}%`),
				ilike(schema.keyWords, `%${searchValue}%`)
			]
		: [];

	const AND: Array<SQL> = [];
	if (category) AND.push(arrayOverlaps(schema.categories, [category]));
	if (isEnableBookmarkFilter === 'true') AND.push(inArray(schema.id, bookmarkList));

	const countQuery = postgresql.select({ count: count() }).from(schema).where(getWhereClause(AND, OR));

	const filterQuery = withPagination(
		postgresql.select().from(schema).where(getWhereClause(AND, OR)).$dynamic(),
		getOrderBy(direction, schema[getSortField(sortByMap[moduleId], sortByMap[moduleId][0], sortBy)]),
		page
	);

	const queryRes = await tryCatchHandler(
		Promise.all([countQuery.execute(), filterQuery.execute()]),
		'getListRecord.executeQuery'
	);

	if (!queryRes.isSuccess) return getListRecord<Trait>({ isEmptyResult: true });

	return getListRecord<Trait>({ data: queryRes.data });
};

export const checkUserExist = (username: string) =>
	postgresql.query.users
		.findFirst({
			where: eq(users.username, username)
		})
		.then(value => Boolean(value))
		.catch(() => false);

type InsertOrUpdateUserParams =
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

export const insertOrUpdateUser = async ({ isUpdate, userData }: InsertOrUpdateUserParams) => {
	if (isUpdate || (await checkUserExist(userData.username))) {
		return await postgresql
			.update(users)
			.set(deleteNullableProperty({ ...userData, updatedAt: dayjs().format('YYYY-MM-DD HH:mm:ss.SSSSSSZZ') }))
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

export const getProfile = async (session: NonNullable<SessionResult['session']>): APIResult<GithubUserInfo> => {
	const { data, isSuccess } = await tryCatchHandler(
		getUserRecordQuery.execute({ username: session.user.name }),
		'getProfile.executeQuery'
	);

	if (!isSuccess) return { isSuccess: false, result: null, error: new APIError({ code: 'INTERNAL_SERVER_ERROR' }) };

	if (!data)
		return {
			isSuccess: false,
			result: null,
			error: new APIError({ code: 'NOT_FOUND', message: `User ${session.user.name} Not Found` })
		};

	return { isSuccess: true, result: data.githubProfile, error: null };
};

const onGetBookmarks = async (moduleId: ModuleIdQuery['moduleId'], username: string) => {
	const res = (await getBookmarksQueriesMap[moduleId].execute({ username })) as Record<string, Array<string>>;

	return objectValues(res || {})[0] || [];
};

export const getModuleBookmarks = async (
	{ moduleId }: ModuleIdQuery,
	session: NonNullable<SessionResult['session']>
): APIResult<Array<string>> => {
	const getModuleBookmarkRes = await tryCatchHandler(
		onGetBookmarks(moduleId, session.user.name),
		'getModuleBookmarks.executeQuery'
	);

	if (!getModuleBookmarkRes.isSuccess)
		return {
			isSuccess: false as const,
			result: null,
			error: new APIError({ code: 'INTERNAL_SERVER_ERROR' })
		};

	if (!getModuleBookmarkRes.data)
		return {
			isSuccess: false as const,
			result: null,
			error: new APIError({ code: 'NOT_FOUND', message: 'User not found' })
		};

	return {
		isSuccess: true as const,
		result: getModuleBookmarkRes.data,
		error: null
	};
};

export const bookmarkRecord = async (
	{ bookmarkRecordId, isBookmarked, moduleId }: BookmarkQuery,
	session: NonNullable<SessionResult['session']>
) => {
	const bookmarkRes = await tryCatchHandler(
		postgresql.execute(
			getToggleBookmarkQuery({ bookmarkRecordId, isBookmarked, moduleId, username: session.user.name })
		),
		'bookmarkRecord.executeQuery'
	);

	if (!bookmarkRes.isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR' });

	return bookmarkRes.data;
};

export const exportAllRecords = async () =>
	await Promise.all(
		entries(exportDBQueriesMap).map(async ([table, query]) => {
			const exportData = await tryCatchHandler(query.execute(), 'exportDataQuery.execute');

			if (!exportData.isSuccess) return { table, error: 'read-error', isSuccess: false } as const;

			const writeFileResult = await tryCatchHandler(
				writeFile(`backup/${table}.json`, JSON.stringify(exportData.data, null, 2)),
				'exportDataQuery.writeFile'
			);

			if (!writeFileResult.isSuccess) return { table, error: 'write-error', isSuccess: false } as const;

			return { table, error: null, isSuccess: true } as const;
		})
	);
