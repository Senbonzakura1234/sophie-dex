import 'server-only';

import { DEFAULT_LIMIT, sortByMap } from '@root/constants/common';
import {
	getBookmarksQueriesMap,
	getToggleBookmarkQuery,
	getUserRecordQuery,
	postgresql,
} from '@root/server/database/postgresql';
import type { CommonRecord, Effect, Item, Rumor, Trait, User } from '@root/server/database/postgresql/schema';
import { users } from '@root/server/database/postgresql/schema';
import type { APIResult, ImprovePick } from '@root/types/common';
import { APIError } from '@root/types/common';
import type { BookmarkQuery, GithubUserInfo, ModuleIdQuery, SearchQuery, SortByEnum } from '@root/types/common/zod';
import { arrayInclude, deleteNullableProperty, objectValues, tryCatchHandler } from '@root/utils/common';
import { getSessionResult } from '@root/utils/server';
import dayjs from 'dayjs';
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

type GetListRecordProp<TRecord extends CommonRecord> =
	| {
			query: PgRelationalQuery<Array<TRecord & { totalRecord: number }>>;
			search: string | null;
			isEmptyBookmark: false;
	  }
	| {
			search: string | null;
			isEmptyBookmark: true;
	  };

const getListRecord = async <TRecord extends CommonRecord>(args: GetListRecordProp<TRecord>) => {
	if (args.isEmptyBookmark) return { records: [], totalRecord: 0, totalPage: 0, search: args.search || undefined };

	const { query, search } = args;

	const { data, isSuccess } = await tryCatchHandler(query);

	if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR' });

	const [totalRecord, records] = [
		data[0]?.totalRecord ?? 0,
		data.map(({ totalRecord: _, ...record }) => record),
	] as const;

	return { records, totalRecord, totalPage: Math.ceil(totalRecord / DEFAULT_LIMIT), search: search || undefined };
};

export const getEffects = async (input: SearchQuery) => {
	const { search, sortBy, direction, page, bookmarked } = input;

	let bookmarkList: Array<string> = [];

	let isEnableBookmarkFilter = bookmarked;

	if (isEnableBookmarkFilter === 'true') {
		const bookmarkListRes = await getModuleBookmarks({ moduleId: 'effect' });

		if (!bookmarkListRes.isSuccess) isEnableBookmarkFilter = null;

		if (bookmarkListRes.isSuccess) {
			if (bookmarkListRes.result.length === 0) return getListRecord<Effect>({ search, isEmptyBookmark: true });

			bookmarkList = bookmarkListRes.result;
		}
	}

	const query = postgresql.query.effects.findMany({
		extras: countQueryFunc,
		limit: DEFAULT_LIMIT,
		orderBy: (schema, { asc, desc }) => [
			{ asc, desc }[direction || 'asc'](schema[getSortField(sortByMap.effect, 'index', sortBy)]),
		],
		offset: getOffset(page),
		where: (schema, { or, and, ilike, inArray }) => {
			const OR: Array<SQL> = search
				? [
						ilike(schema.name, `%${search}%`),
						ilike(schema.description, `%${search}%`),
						ilike(schema.keyWords, `%${search}%`),
					]
				: [];

			const AND: Array<SQL> = [];

			if (isEnableBookmarkFilter === 'true') AND.push(inArray(schema.id, bookmarkList));

			return and(or(...OR), ...AND);
		},
	});

	return getListRecord<Effect>({ query, search, isEmptyBookmark: false });
};

export const getItems = async (input: SearchQuery) => {
	const { search, sortBy, direction, color, relatedCategory, page, category, recipeType, bookmarked } = input;

	let bookmarkList: Array<string> = [];

	let isEnableBookmarkFilter = bookmarked;

	if (isEnableBookmarkFilter === 'true') {
		const bookmarkListRes = await getModuleBookmarks({ moduleId: 'item' });

		if (!bookmarkListRes.isSuccess) isEnableBookmarkFilter = null;

		if (bookmarkListRes.isSuccess) {
			if (bookmarkListRes.result.length === 0) return getListRecord<Item>({ search, isEmptyBookmark: true });

			bookmarkList = bookmarkListRes.result;
		}
	}

	const query = postgresql.query.items.findMany({
		extras: (_, { sql }) => ({ totalRecord: sql<number>`count(*) over()`.as('total_record') }),
		limit: DEFAULT_LIMIT,
		orderBy: (schema, { asc, desc }) => [
			{ asc, desc }[direction || 'asc'](schema[getSortField(sortByMap.item, 'index', sortBy)]),
		],
		offset: getOffset(page),
		where: (schema, { or, and, ilike, eq, inArray }) => {
			const OR: Array<SQL> = search
				? [ilike(schema.name, `%${search}%`), ilike(schema.keyWords, `%${search}%`)]
				: [];

			const AND: Array<SQL> = [];
			if (relatedCategory) AND.push(arrayOverlaps(schema.relatedCategories, [relatedCategory]));
			if (color) AND.push(eq(schema.color, color));
			if (recipeType) AND.push(eq(schema.recipeType, recipeType));
			if (category) AND.push(eq(schema.category, category));
			if (isEnableBookmarkFilter === 'true') AND.push(inArray(schema.id, bookmarkList));

			return and(or(...OR), ...AND);
		},
	});

	return getListRecord<Item>({ query, search, isEmptyBookmark: false });
};

export const getRumors = async (input: SearchQuery) => {
	const { search, sortBy, direction, page, rumorType, bookmarked } = input;

	let bookmarkList: Array<string> = [];

	let isEnableBookmarkFilter = bookmarked;

	if (isEnableBookmarkFilter === 'true') {
		const bookmarkListRes = await getModuleBookmarks({ moduleId: 'rumor' });

		if (!bookmarkListRes.isSuccess) isEnableBookmarkFilter = null;

		if (bookmarkListRes.isSuccess) {
			if (bookmarkListRes.result.length === 0) return getListRecord<Rumor>({ search, isEmptyBookmark: true });

			bookmarkList = bookmarkListRes.result;
		}
	}

	const query = postgresql.query.rumors.findMany({
		extras: countQueryFunc,
		limit: DEFAULT_LIMIT,
		orderBy: (schema, { asc, desc }) => [
			{ asc, desc }[direction || 'asc'](schema[getSortField(sortByMap.rumor, 'price', sortBy)]),
		],
		offset: getOffset(page),
		where: (schema, { or, and, ilike, eq, inArray }) => {
			const OR: Array<SQL> = search
				? [ilike(schema.name, `%${search}%`), ilike(schema.keyWords, `%${search}%`)]
				: [];

			const AND: Array<SQL> = [];
			if (rumorType) AND.push(eq(schema.rumorType, rumorType));
			if (isEnableBookmarkFilter === 'true') AND.push(inArray(schema.id, bookmarkList));

			return and(or(...OR), ...AND);
		},
	});

	return getListRecord<Rumor>({ query, search, isEmptyBookmark: false });
};

export const getTraits = async (input: SearchQuery) => {
	const { search, sortBy, direction, category, page, bookmarked } = input;

	let bookmarkList: Array<string> = [];

	let isEnableBookmarkFilter = bookmarked;

	if (isEnableBookmarkFilter === 'true') {
		const bookmarkListRes = await getModuleBookmarks({ moduleId: 'trait' });

		if (!bookmarkListRes.isSuccess) isEnableBookmarkFilter = null;

		if (bookmarkListRes.isSuccess) {
			if (bookmarkListRes.result.length === 0) return getListRecord<Trait>({ search, isEmptyBookmark: true });

			bookmarkList = bookmarkListRes.result;
		}
	}

	const query = postgresql.query.traits.findMany({
		extras: countQueryFunc,
		limit: DEFAULT_LIMIT,
		orderBy: (schema, { asc, desc }) => [
			{ asc, desc }[direction || 'asc'](schema[getSortField(sortByMap.trait, 'index', sortBy)]),
		],
		offset: getOffset(page),
		where: (schema, { or, and, ilike, inArray }) => {
			const OR: Array<SQL> = search
				? [
						ilike(schema.name, `%${search}%`),
						ilike(schema.description, `%${search}%`),
						ilike(schema.keyWords, `%${search}%`),
					]
				: [];

			const AND: Array<SQL> = [];
			if (category) AND.push(arrayOverlaps(schema.categories, [category]));
			if (isEnableBookmarkFilter === 'true') AND.push(inArray(schema.id, bookmarkList));

			return and(or(...OR), ...AND);
		},
	});

	return getListRecord<Trait>({ query, search, isEmptyBookmark: false });
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

export const getProfile = async (): APIResult<GithubUserInfo> => {
	const userSessionRes = await getSessionResult();

	if (!userSessionRes.isSuccess) return userSessionRes;

	const username = userSessionRes.result.user.name;

	const { data, isSuccess } = await tryCatchHandler(getUserRecordQuery.execute({ username }));

	if (!isSuccess) return { isSuccess: false, result: null, error: new APIError({ code: 'INTERNAL_SERVER_ERROR' }) };

	if (!data)
		return {
			isSuccess: false,
			result: null,
			error: new APIError({ code: 'NOT_FOUND', message: `User ${username} Not Found` }),
		};

	return { isSuccess: true, result: data.githubProfile, error: null };
};

const onGetBookmarks = async (moduleId: ModuleIdQuery['moduleId'], username: string) =>
	await getBookmarksQueriesMap[moduleId].execute({ username }).then<Array<string>>(res => objectValues(res || {}));

export const getModuleBookmarks = async ({ moduleId }: ModuleIdQuery): APIResult<Array<string>> => {
	const userSessionRes = await getSessionResult();

	if (!userSessionRes.isSuccess) return userSessionRes;

	const username = userSessionRes.result.user.name;

	const getModuleBookmarkRes = await tryCatchHandler(onGetBookmarks(moduleId, username));

	if (!getModuleBookmarkRes.isSuccess)
		return {
			isSuccess: false as const,
			result: null,
			error: new APIError({ code: 'INTERNAL_SERVER_ERROR' }),
		};

	if (!getModuleBookmarkRes.data)
		return {
			isSuccess: false as const,
			result: null,
			error: new APIError({ code: 'NOT_FOUND', message: 'User not found' }),
		};

	return {
		isSuccess: true as const,
		result: getModuleBookmarkRes.data,
		error: null,
	};
};

export const bookmarkRecord = async ({ bookmarkRecordId, isBookmarked, moduleId }: BookmarkQuery) => {
	const userSessionRes = await getSessionResult();

	if (!userSessionRes.isSuccess) throw userSessionRes.error;

	const username = userSessionRes.result.user.name;

	const bookmarkRes = await tryCatchHandler(
		postgresql.execute(getToggleBookmarkQuery({ bookmarkRecordId, isBookmarked, moduleId, username })),
	);

	if (!bookmarkRes.isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR' });

	return bookmarkRes.data;
};
