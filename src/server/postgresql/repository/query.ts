import { postgresql } from '@root/server/postgresql/repository';
import { accounts, sessions, users } from '@root/server/postgresql/schema';
import type { ExportDBQueriesMap } from '@root/types/model';
import { and, eq, sql } from 'drizzle-orm';

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

export const getAuthenticatorRecordQuery = postgresql.query.authenticators
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.credentialID, sql.placeholder('credentialID')) })
	.prepare('getAuthenticatorRecord');

export const getAllAuthenticatorRecordsByUserIdQuery = postgresql.query.authenticators
	.findMany({ where: (schema, { eq, sql }) => eq(schema.userId, sql.placeholder('userId')) })
	.prepare('getAllAuthenticatorRecordsByUserId');

export const getAccountRecordQuery = postgresql.query.accounts
	.findFirst({
		where: (schema, { eq, sql, and }) =>
			and(
				eq(schema.provider, sql.placeholder('provider')),
				eq(schema.providerAccountId, sql.placeholder('providerAccountId'))
			)
	})
	.prepare('getAccountRecord');

export const getUserRecordByIdQuery = postgresql.query.users
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getUserRecordById');
export const getUserRecordByEmailQuery = postgresql.query.users
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.email, sql.placeholder('email')) })
	.prepare('getUserRecordByEmail');

export const getSessionAndUserQuery = postgresql
	.select({ session: sessions, user: users })
	.from(sessions)
	.where(eq(sessions.sessionToken, sql.placeholder('sessionToken')))
	.innerJoin(users, eq(users.id, sessions.userId))
	.prepare('getSessionAndUser');
export const getUserByAccountQuery = postgresql
	.select({ account: accounts, user: users })
	.from(accounts)
	.innerJoin(users, eq(accounts.userId, users.id))
	.where(
		and(
			eq(accounts.provider, sql.placeholder('provider')),
			eq(accounts.providerAccountId, sql.placeholder('providerAccountId'))
		)
	)
	.prepare('getUserByAccount');

export const getProfileRecordQuery = postgresql.query.profiles
	.findFirst({
		where: (schema, { eq, sql }) => eq(schema.login, sql.placeholder('login')),
		columns: {
			avatar_url: true,
			login: true,
			bio: true,
			company: true,
			blog: true,
			email: true,
			location: true,
			twitter_username: true,
			name: true,
			followers: true,
			following: true,
			public_repos: true,
			owned_private_repos: true,
			hireable: true,
			collaborators: true
		}
	})
	.prepare('getProfileRecord');

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
		where: (schema, { eq, sql }) => eq(schema.name, sql.placeholder('name')),
		columns: { bookmarkedEffectList: true }
	})
	.prepare('getEffectBookmarks');
export const getItemBookmarksQuery = postgresql.query.users
	.findFirst({
		where: (schema, { eq, sql }) => eq(schema.name, sql.placeholder('name')),
		columns: { bookmarkedItemList: true }
	})
	.prepare('getItemBookmarks');
export const getRumorBookmarksQuery = postgresql.query.users
	.findFirst({
		where: (schema, { eq, sql }) => eq(schema.name, sql.placeholder('name')),
		columns: { bookmarkedRumorList: true }
	})
	.prepare('getRumorBookmarks');
export const getTraitBookmarksQuery = postgresql.query.users
	.findFirst({
		where: (schema, { eq, sql }) => eq(schema.name, sql.placeholder('name')),
		columns: { bookmarkedTraitList: true }
	})
	.prepare('getTraitBookmarks');

export const getBookmarksQueriesMap = {
	effect: getEffectBookmarksQuery,
	item: getItemBookmarksQuery,
	rumor: getRumorBookmarksQuery,
	trait: getTraitBookmarksQuery
};
