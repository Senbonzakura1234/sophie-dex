import { env } from '@root/utils/common/env';
if (env.NEXT_PUBLIC_NODE_ENV !== 'script') void import('server-only');

import { DEFAULT_LIMIT, sortByMap } from '@root/constants/common';
import {
	getBookmarksQueriesMap,
	getToggleBookmarkQuery,
	getUserRecordQuery,
	postgresql
} from '@root/server/postgresql/repository';
import type { CommonRecord, Effect, Item, Rumor, Trait, User } from '@root/server/postgresql/schema';
import { users } from '@root/server/postgresql/schema';
import type { APIResult, ImprovePick } from '@root/types/common';
import { APIError } from '@root/types/common';
import type { BookmarkQuery, GithubUserInfo, ModuleIdQuery, SearchQuery } from '@root/types/common/zod';
import type { SortByEnum } from '@root/types/common/zod/generic';
import { arrayInclude, deleteNullableProperty, objectValues, tryCatchHandler } from '@root/utils/common';
import type { SessionResult } from '@root/utils/server';
import dayjs from 'dayjs';
import type { SQL, sql } from 'drizzle-orm';
import { arrayOverlaps, eq } from 'drizzle-orm';
import type { PgRelationalQuery } from 'drizzle-orm/pg-core/query-builders/query';

const countQueryFunc = (_: unknown, { sql: sqlFunc }: { sql: typeof sql }) => ({
	totalRecord: sqlFunc<number>`count(*) over()`.as('total_record')
});

const getOffset = (page: number | null) => ((page ?? 1) - 1) * DEFAULT_LIMIT;

const getSortField = <TSearch extends Readonly<SortByEnum>>(
	allowedSortField: Readonly<Array<TSearch>>,
	defaultSortField: TSearch,
	sortBy: SortByEnum | null
) => (arrayInclude(allowedSortField, sortBy) ? sortBy : defaultSortField);

type GetListRecordProp<TRecord extends CommonRecord> =
	| { query: PgRelationalQuery<Array<TRecord & { totalRecord: number }>>; isEmptyBookmark: false }
	| { isEmptyBookmark: true };

const getListRecord = async <TRecord extends CommonRecord>(args: GetListRecordProp<TRecord>) => {
	if (args.isEmptyBookmark) return { records: [], totalRecord: 0, totalPage: 0 };

	const { query } = args;

	const { data, isSuccess } = await tryCatchHandler(query.execute(), 'getListRecord.executeQuery');

	if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR' });

	const [totalRecord, records] = [
		data[0]?.totalRecord ?? 0,
		data.map(({ totalRecord: _, ...record }) => record)
	] as const;

	return { records, totalRecord, totalPage: Math.ceil(totalRecord / DEFAULT_LIMIT) };
};

const sanitizeSearch = (input: string | null) =>
	input?.split(' ')?.filter(Boolean)?.join(' ').replaceAll('?', '') || null;

export const getEffects = async (input: SearchQuery, { isAuthenticated, session }: SessionResult) => {
	const { search, sortBy, direction, page, bookmarked } = input;

	const searchValue = sanitizeSearch(search);

	let bookmarkList: Array<string> = [];

	let isEnableBookmarkFilter: typeof bookmarked = null;

	if (isAuthenticated && bookmarked === 'true') {
		isEnableBookmarkFilter = 'true';

		const bookmarkListRes = await getModuleBookmarks({ moduleId: 'effect' }, session);

		if (!bookmarkListRes.isSuccess) isEnableBookmarkFilter = null;

		if (bookmarkListRes.isSuccess) {
			if (bookmarkListRes.result.length === 0) return getListRecord<Effect>({ isEmptyBookmark: true });

			bookmarkList = bookmarkListRes.result;
		}
	}

	const query = postgresql.query.effects.findMany({
		extras: countQueryFunc,
		limit: DEFAULT_LIMIT,
		orderBy: (schema, { asc, desc }) => [
			{ asc, desc }[direction || 'asc'](schema[getSortField(sortByMap.effect, 'index', sortBy)])
		],
		offset: getOffset(page),
		where: (schema, { or, and, ilike, inArray }) => {
			const OR: Array<SQL> = searchValue
				? [
						ilike(schema.name, `%${searchValue}%`),
						ilike(schema.description, `%${searchValue}%`),
						ilike(schema.keyWords, `%${searchValue}%`)
					]
				: [];

			const AND: Array<SQL> = [];

			if (isEnableBookmarkFilter === 'true') AND.push(inArray(schema.id, bookmarkList));

			return and(or(...OR), ...AND);
		}
	});

	return getListRecord<Effect>({ query, isEmptyBookmark: false });
};

export const getItems = async (input: SearchQuery, { isAuthenticated, session }: SessionResult) => {
	const { search, sortBy, direction, color, relatedCategory, page, category, recipeType, bookmarked } = input;

	const searchValue = sanitizeSearch(search);

	let bookmarkList: Array<string> = [];

	let isEnableBookmarkFilter: typeof bookmarked = null;

	if (isAuthenticated && bookmarked === 'true') {
		isEnableBookmarkFilter = 'true';

		const bookmarkListRes = await getModuleBookmarks({ moduleId: 'item' }, session);

		if (!bookmarkListRes.isSuccess) isEnableBookmarkFilter = null;

		if (bookmarkListRes.isSuccess) {
			if (bookmarkListRes.result.length === 0) return getListRecord<Item>({ isEmptyBookmark: true });

			bookmarkList = bookmarkListRes.result;
		}
	}

	const query = postgresql.query.items.findMany({
		extras: (_, { sql }) => ({ totalRecord: sql<number>`count(*) over()`.as('total_record') }),
		limit: DEFAULT_LIMIT,
		orderBy: (schema, { asc, desc }) => [
			{ asc, desc }[direction || 'asc'](schema[getSortField(sortByMap.item, 'index', sortBy)])
		],
		offset: getOffset(page),
		where: (schema, { or, and, ilike, eq, inArray }) => {
			const OR: Array<SQL> = searchValue
				? [ilike(schema.name, `%${searchValue}%`), ilike(schema.keyWords, `%${searchValue}%`)]
				: [];

			const AND: Array<SQL> = [];
			if (relatedCategory) AND.push(arrayOverlaps(schema.relatedCategories, [relatedCategory]));
			if (color) AND.push(eq(schema.color, color));
			if (recipeType) AND.push(eq(schema.recipeType, recipeType));
			if (category) AND.push(eq(schema.category, category));
			if (isEnableBookmarkFilter === 'true') AND.push(inArray(schema.id, bookmarkList));

			return and(or(...OR), ...AND);
		}
	});

	return getListRecord<Item>({ query, isEmptyBookmark: false });
};

export const getRumors = async (input: SearchQuery, { isAuthenticated, session }: SessionResult) => {
	const { search, sortBy, direction, page, rumorType, bookmarked } = input;

	const searchValue = sanitizeSearch(search);

	let bookmarkList: Array<string> = [];

	let isEnableBookmarkFilter: typeof bookmarked = null;

	if (isAuthenticated && bookmarked === 'true') {
		isEnableBookmarkFilter = 'true';

		const bookmarkListRes = await getModuleBookmarks({ moduleId: 'rumor' }, session);

		if (!bookmarkListRes.isSuccess) isEnableBookmarkFilter = null;

		if (bookmarkListRes.isSuccess) {
			if (bookmarkListRes.result.length === 0) return getListRecord<Rumor>({ isEmptyBookmark: true });

			bookmarkList = bookmarkListRes.result;
		}
	}

	const query = postgresql.query.rumors.findMany({
		extras: countQueryFunc,
		limit: DEFAULT_LIMIT,
		orderBy: (schema, { asc, desc }) => [
			{ asc, desc }[direction || 'asc'](schema[getSortField(sortByMap.rumor, 'price', sortBy)])
		],
		offset: getOffset(page),
		where: (schema, { or, and, ilike, eq, inArray }) => {
			const OR: Array<SQL> = searchValue
				? [ilike(schema.name, `%${searchValue}%`), ilike(schema.keyWords, `%${searchValue}%`)]
				: [];

			const AND: Array<SQL> = [];
			if (rumorType) AND.push(eq(schema.rumorType, rumorType));
			if (isEnableBookmarkFilter === 'true') AND.push(inArray(schema.id, bookmarkList));

			return and(or(...OR), ...AND);
		}
	});

	return getListRecord<Rumor>({ query, isEmptyBookmark: false });
};

export const getTraits = async (input: SearchQuery, { isAuthenticated, session }: SessionResult) => {
	const { search, sortBy, direction, category, page, bookmarked } = input;

	const searchValue = sanitizeSearch(search);

	let bookmarkList: Array<string> = [];

	let isEnableBookmarkFilter: typeof bookmarked = null;

	if (isAuthenticated && bookmarked === 'true') {
		isEnableBookmarkFilter = 'true';

		const bookmarkListRes = await getModuleBookmarks({ moduleId: 'trait' }, session);

		if (!bookmarkListRes.isSuccess) isEnableBookmarkFilter = null;

		if (bookmarkListRes.isSuccess) {
			if (bookmarkListRes.result.length === 0) return getListRecord<Trait>({ isEmptyBookmark: true });

			bookmarkList = bookmarkListRes.result;
		}
	}

	const query = postgresql.query.traits.findMany({
		extras: countQueryFunc,
		limit: DEFAULT_LIMIT,
		orderBy: (schema, { asc, desc }) => [
			{ asc, desc }[direction || 'asc'](schema[getSortField(sortByMap.trait, 'index', sortBy)])
		],
		offset: getOffset(page),
		where: (schema, { or, and, ilike, inArray }) => {
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

			return and(or(...OR), ...AND);
		}
	});

	return getListRecord<Trait>({ query, isEmptyBookmark: false });
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
