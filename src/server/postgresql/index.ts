import { env } from '@root/utils/common/env';
if (env.NEXT_PUBLIC_NODE_ENV !== 'script') void import('server-only');

import { DEFAULT_LIMIT, sortByMap } from '@root/constants/common';
import { postgresql } from '@root/server/postgresql/repository';
import { getAllRecordQueriesMap } from '@root/server/postgresql/repository/query';
import type { CommonRecord, Effect, Item, ProfileCreate, Rumor, Trait } from '@root/server/postgresql/schema';
import { effects, items, profiles, rumors, traits, users } from '@root/server/postgresql/schema';
import type { ImprovedOmit } from '@root/types/common';
import { APIError } from '@root/types/common';
import type { BookmarkQuery, SearchQuery } from '@root/types/common/zod';
import type { ModuleIdEnum, SortByEnum } from '@root/types/common/zod/generic';
import { arrayInclude, capitalize, entries, tryCatchHandler } from '@root/utils/common';
import type { SessionResult } from '@root/utils/server';
import { getModuleBookmarks } from '@root/utils/server/database';
import type { AnyColumn, SQL, SQLWrapper } from 'drizzle-orm';
import { and, arrayOverlaps, asc, count, desc, eq, ilike, inArray, or, sql } from 'drizzle-orm';
import type { PgColumn, PgSelect } from 'drizzle-orm/pg-core';
import type { writeFile } from 'fs/promises';

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

	const queryRes = await tryCatchHandler(
		postgresql.batch([
			postgresql.select({ count: count() }).from(schema).where(getWhereClause(AND, OR)),
			withPagination(
				postgresql.select().from(schema).where(getWhereClause(AND, OR)).$dynamic(),
				getOrderBy(direction, schema[getSortField(sortByMap[moduleId], sortByMap[moduleId][0], sortBy)]),
				page
			)
		]),
		{ operationCode: 'getListRecord.executeBatchQuery' }
	);

	if (!queryRes.isSuccess)
		throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: `Get ${capitalize(moduleId)} List failed` });

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

	const queryRes = await tryCatchHandler(
		postgresql.batch([
			postgresql.select({ count: count() }).from(schema).where(getWhereClause(AND, OR)),
			withPagination(
				postgresql.select().from(schema).where(getWhereClause(AND, OR)).$dynamic(),
				getOrderBy(direction, schema[getSortField(sortByMap[moduleId], sortByMap[moduleId][0], sortBy)]),
				page
			)
		]),
		{ operationCode: 'getListRecord.executeBatchQuery' }
	);

	if (!queryRes.isSuccess)
		throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: `Get ${capitalize(moduleId)} List failed` });

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

	const queryRes = await tryCatchHandler(
		postgresql.batch([
			postgresql.select({ count: count() }).from(schema).where(getWhereClause(AND, OR)),
			withPagination(
				postgresql.select().from(schema).where(getWhereClause(AND, OR)).$dynamic(),
				getOrderBy(direction, schema[getSortField(sortByMap[moduleId], sortByMap[moduleId][0], sortBy)]),
				page
			)
		]),
		{ operationCode: 'getListRecord.executeBatchQuery' }
	);

	if (!queryRes.isSuccess)
		throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: `Get ${capitalize(moduleId)} List failed` });

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

	const queryRes = await tryCatchHandler(
		postgresql.batch([
			postgresql.select({ count: count() }).from(schema).where(getWhereClause(AND, OR)),
			withPagination(
				postgresql.select().from(schema).where(getWhereClause(AND, OR)).$dynamic(),
				getOrderBy(direction, schema[getSortField(sortByMap[moduleId], sortByMap[moduleId][0], sortBy)]),
				page
			)
		]),
		{ operationCode: 'getListRecord.executeBatchQuery' }
	);

	if (!queryRes.isSuccess)
		throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: `Get ${capitalize(moduleId)} List failed` });

	return getListRecord<Trait>({ data: queryRes.data });
};

export const checkProfileExist = (login: string, profile_id: number) =>
	postgresql.query.profiles
		.findFirst({
			where: or(eq(profiles.login, login), eq(profiles.profile_id, profile_id))
		})
		.then(value => Boolean(value))
		.catch(() => false);

export const insertOrUpdateProfile = async (
	profileData: ImprovedOmit<ProfileCreate, 'createdAt' | 'updatedAt' | 'id'>,
	isUpdate: boolean
) => {
	if (isUpdate || (await checkProfileExist(profileData.login, profileData.profile_id))) {
		return await postgresql
			.update(profiles)
			.set(profileData)
			.where(eq(profiles.login, profileData.login))
			.returning()
			.then(res => res[0]);
	}

	return await postgresql
		.insert(profiles)
		.values(profileData)
		.returning()
		.then(res => res[0]);
};

type GetToggleBookmarkQuery = { username: string } & BookmarkQuery;

const getToggleBookmarkQuery = ({ bookmarkRecordId, isBookmarked, moduleId, username }: GetToggleBookmarkQuery) => {
	const columnName = users[`bookmarked${capitalize(moduleId)}List`].name;
	const updateCommand = isBookmarked ? 'array_remove' : 'array_append';

	return sql`update ${users} set ${sql.raw(columnName)} = ${sql.raw(updateCommand)}(${sql.raw(columnName)}, ${bookmarkRecordId}) where ${sql.raw(users.name.name)} = ${username}`;
};

export const bookmarkRecord = async (
	{ bookmarkRecordId, isBookmarked, moduleId }: BookmarkQuery,
	session: NonNullable<SessionResult['session']>
) => {
	const bookmarkRes = await tryCatchHandler(
		postgresql.execute(
			getToggleBookmarkQuery({ bookmarkRecordId, isBookmarked, moduleId, username: session.user.name })
		),
		{ operationCode: 'bookmarkRecord.executeQuery' }
	);

	if (!bookmarkRes.isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR' });

	return bookmarkRes.data;
};

export const exportAllRecords = async (writeFileFn?: typeof writeFile) =>
	await Promise.all(
		entries(getAllRecordQueriesMap).map(async ([table, query]) => {
			const exportData = await tryCatchHandler(query.execute(), { operationCode: 'exportDataQuery.execute' });

			if (!exportData.isSuccess) return { table, error: 'read-error', isSuccess: false } as const;

			if (writeFileFn) {
				const writeFileResult = await tryCatchHandler(
					writeFileFn(`backup/${table}.json`, JSON.stringify(exportData.data, null, 2)),
					{ operationCode: 'exportDataQuery.writeFile' }
				);

				if (!writeFileResult.isSuccess) return { table, error: 'write-error', isSuccess: false } as const;
			}

			return { table, error: null, isSuccess: true } as const;
		})
	);
