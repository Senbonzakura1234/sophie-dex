import { env } from '@root/utils/common/env';
if (env.NEXT_PUBLIC_NODE_ENV !== 'script') import('server-only');

import { neon } from '@neondatabase/serverless';
import * as schema from '@root/server/postgresql/schema';
import { users } from '@root/server/postgresql/schema';
import type { BookmarkQuery } from '@root/types/common/zod';
import type { ExportDBQueriesMap } from '@root/types/model';
import { capitalize } from '@root/utils/common';
import { sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/neon-http';

const connection = neon<boolean, boolean>(env.PGURL_NONPOOLING);

export const postgresql = drizzle(connection, { schema, logger: env.NEXT_PUBLIC_NODE_ENV !== 'production' });

export const getEffectRecordQuery = postgresql.query.effects
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getEffectRecord');
export const getItemRecordQuery = postgresql.query.items
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getItemRecord');
export const getRumorRecordQuery = postgresql.query.rumors
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getRumorRecord');
export const getTraitRecordQuery = postgresql.query.traits
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getTraitRecord');

export const getUserRecordQuery = postgresql.query.users
	.findFirst({
		where: (schema, { eq, sql }) => eq(schema.username, sql.placeholder('username')),
		columns: { githubProfile: true }
	})
	.prepare('getUserRecord');

export const getAllEffectIdsQuery = postgresql.query.effects
	.findMany({ columns: { id: true } })
	.prepare('getAllEffectIds');
export const getAllItemIdsQuery = postgresql.query.items.findMany({ columns: { id: true } }).prepare('getAllItemIds');
export const getAllRumorIdsQuery = postgresql.query.rumors
	.findMany({ columns: { id: true } })
	.prepare('getAllRumorIds');
export const getAllTraitIdsQuery = postgresql.query.traits
	.findMany({ columns: { id: true } })
	.prepare('getAllTraitIds');

export const exportEffectsQuery = postgresql.query.effects.findMany().prepare('exportEffects');
export const exportItemsQuery = postgresql.query.items.findMany().prepare('exportItems');
export const exportRumorsQuery = postgresql.query.rumors.findMany().prepare('exportRumors');
export const exportTraitsQuery = postgresql.query.traits.findMany().prepare('exportTraits');

export const exportDBQueriesMap: ExportDBQueriesMap = {
	effect: exportEffectsQuery,
	item: exportItemsQuery,
	rumor: exportRumorsQuery,
	trait: exportTraitsQuery
};

export const getEffectBookmarksQuery = postgresql.query.users
	.findFirst({
		where: (schema, { eq, sql }) => eq(schema.username, sql.placeholder('username')),
		columns: { bookmarkedEffectList: true }
	})
	.prepare('getEffectBookmarks');
export const getItemBookmarksQuery = postgresql.query.users
	.findFirst({
		where: (schema, { eq, sql }) => eq(schema.username, sql.placeholder('username')),
		columns: { bookmarkedItemList: true }
	})
	.prepare('getItemBookmarks');
export const getRumorBookmarksQuery = postgresql.query.users
	.findFirst({
		where: (schema, { eq, sql }) => eq(schema.username, sql.placeholder('username')),
		columns: { bookmarkedRumorList: true }
	})
	.prepare('getRumorBookmarks');
export const getTraitBookmarksQuery = postgresql.query.users
	.findFirst({
		where: (schema, { eq, sql }) => eq(schema.username, sql.placeholder('username')),
		columns: { bookmarkedTraitList: true }
	})
	.prepare('getTraitBookmarks');

export const getBookmarksQueriesMap = {
	effect: getEffectBookmarksQuery,
	item: getItemBookmarksQuery,
	rumor: getRumorBookmarksQuery,
	trait: getTraitBookmarksQuery
};

type GetToggleBookmarkQuery = { username: string } & BookmarkQuery;

export const getToggleBookmarkQuery = ({
	bookmarkRecordId,
	isBookmarked,
	moduleId,
	username
}: GetToggleBookmarkQuery) => {
	const columnName = users[`bookmarked${capitalize(moduleId)}List`].name;
	const updateCommand = isBookmarked ? 'array_remove' : 'array_append';

	return sql`update ${users} set ${sql.raw(columnName)} = ${sql.raw(updateCommand)}(${sql.raw(columnName)}, ${bookmarkRecordId}) where ${sql.raw(users.username.name)} = ${username}`;
};
